import React from 'react'

interface User {
  id: number;
  name: string;
}

export default async function UsersPage () {
 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 const users: User[] = await res.json()
  return (
    <>
    <h1>USERS</h1>
    <ul>
     {
      users.map(user=> <li key={user.id}>{user.name}</li>)
     }
    </ul>
    </>
  )
}