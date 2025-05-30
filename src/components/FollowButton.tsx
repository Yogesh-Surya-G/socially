"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { LoaderIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { toggleFollow } from '@/actions/user.action';
import { revalidatePath } from 'next/cache';

function FollowButton({userId}: {userId: string}) {
  const [isLoading,setisLoading] = useState(false);
  const [Follow,setFollow] = useState("Follow");

  const handleFollow = async () => {  
      setisLoading(true);
      try {
         const response = await toggleFollow(userId);
         if(response?.follow === true){
          toast.success("User followed successfully");
          setFollow("Unfollow")
         }else{
          toast.success("User unfollowed successfully");
          setFollow("Follow")
         }
      } catch (error) {
        toast.error("Failed to follow user");
      } finally{
          setisLoading(false);
      }
   }
  return (
    <Button size={"sm"} disabled={isLoading} variant= {'secondary'} onClick={handleFollow} className='w-20'>
        {isLoading ? <LoaderIcon className='size-4 animate-spin [animation-duration:2000ms]'/> : `${Follow} `}
    </Button>
  )
}

export default FollowButton
