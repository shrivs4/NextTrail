import React from 'react';

export default async function getUser(userId:string) {
    let user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if(!user.ok) throw new Error('User Data not found')

  return user.json();
}
