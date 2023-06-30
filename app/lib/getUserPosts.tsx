import React from 'react';

export default async function getUserPost(userId:string) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    if(!res.ok) throw new Error('User Data not found')

  return res.json();
}
