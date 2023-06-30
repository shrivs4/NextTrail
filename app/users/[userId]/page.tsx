import React, { Suspense } from 'react';
import getUser from '@/app/lib/getUser';
import getUserPost from '@/app/lib/getUserPosts';
import UserPost  from './components/UserPost';
import { Metadata } from 'next';
type Params = {
    params:{
        userId: string
    }
}

export async function generateMetadata({params:{userId}}:Params): Promise<Metadata>{
    
    const userData: Promise<Users> = getUser(userId);
    const user: Users = await userData;

    
    return {
        title: user.name,
        description:`This is the page of ${user.name}`
    }
}


export default async function UserPage({params: {userId}}:Params) {
    const userData: Promise<Users> = getUser(userId);
    const userPost: Promise<Post[]> = getUserPost(userId);

    // const [user,Post] = await Promise.all([userData,userPost]);

    const user = await userData;


  return (
    <>
        <h2>{user?.name}</h2>
        <br />
        <Suspense fallback={<h2>Loading...</h2>}>
            <UserPost promise={userPost} />
        </Suspense>
    </>
  )
}
