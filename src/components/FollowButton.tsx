"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { LoaderIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { toggleFollow } from '@/actions/user.action';

function FollowButton({userId}: {userId: string}) {
  const [isLoading,setisLoading] = useState(false);

  const handleFollow = async () => {  
      setisLoading(true);
      try {
         await toggleFollow(userId);
         toast.success("User followed successfully");
      } catch (error) {
        toast.error("Failed to follow user");
      } finally{
          setisLoading(false);
      }
   }
  return (
    <Button size={"sm"} disabled={isLoading} variant= {'secondary'} onClick={handleFollow} className='w-20'>
        {isLoading ? <LoaderIcon className='size-4 animate-spin [animation-duration:2000ms]'/> : 'Follow'}
    </Button>
  )
}

export default FollowButton
