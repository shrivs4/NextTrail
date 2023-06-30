import React from 'react'

export default async function getAllUsers() {
    let getData = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!getData.ok) throw new Error('Failed to fetch Data')
  return getData.json();
}
