"use server"

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";

export async function syncUser() {
    try{
        const {userId} = await auth();
        const user = await currentUser();
        
        if(!userId || !user) return;    

        const existingUser = await prisma.user.findUnique({
            where:{
                clerkID:userId,
            }
        })

        if (existingUser) return existingUser;
    
        const dbUser=await prisma.user.create({
            data:{
                clerkID:userId,
                name: `${user.firstName || ""} ${user.lastName || ""}`,
                username: user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
                email: user.emailAddresses[0].emailAddress,
                image: user.imageUrl,
            }
        })
        return dbUser;
    }catch(e){
        console.log("Error in syncUser",e);
    }
  
}


export async function getUserByClerkID(clerkID:string){
    return await prisma.user.findUnique({
        where:{
            clerkID,
        },
        include :{
            _count:{
                select:{
                    followers:true,
                    following:true,
                    posts:true,
                }
            }
        }
    })
}

export async function getDbUserId(){
    const {userId : clerkID} = await auth();
    if(!clerkID) throw new Error("Unauthorized");
    const user = await getUserByClerkID(clerkID);
    if(!user) throw new Error("User not found");
    return user.id;    
}

export async function getRandomUsers(){
    try {
        const userId= await getDbUserId();
        const randomUsers = await prisma.user.findMany({
            where:{
            AND:[
                {
                // NOT:{
                //     id:userId,
                // }
                },
                {
                NOT:{
                    followers:{
                    some:{
                        followerId:userId
                    }
                    }
                }
                }
            ]
            },
            select:{
            id:true,
            name:true,
            username:true,
            image:true,
            _count:{
                select:{
                followers:true,
                }
            }
            },
            take:3,
        })
        return randomUsers;
    } catch (error) {
        console.error("Failed to get random users",error);
        return [];
    }
}

export async function toggleFollow(targetuserId:string){
   try {
      const userId = await getDbUserId();
      if(userId === targetuserId) throw new Error("You can't follow yourself");
      const existingFollow = await prisma.follows.findFirst({
          where:{
              followerId:userId,
              followingId:targetuserId,
          }
      })
      
      if(existingFollow){
          await prisma.follows.delete({
              where:{
                  id:existingFollow.id
              }
          })
      }else{
          await prisma.$transaction([
            prisma.follows.create({
                data:{
                    followerId:userId,
                    followingId:targetuserId,
                } 
            }),
            prisma.notification.create({
                data:{
                    userId:targetuserId,
                    type:"FOLLOW",
                    creatorId: userId,
                }
            })
         ])   
      }
      return {success:true};
   } catch (error) {
      console.log("Failed to follow",error);
      return {success:false, error:"Failed to Toggle Follow"};
   }
}