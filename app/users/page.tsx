import React from 'react'

interface User {
  id: number;
  name: string;
  email:string;
}

export default async function UsersPage () {
 const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache:'no-store'})
 const users: User[] = await res.json()
  return (
    <>
    <h1>USERS</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {
      users.map(user=> <tr className='hover' key={user.id}>
        <th>{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>)
     }
      </tbody>
    
    </table>
    </>
  )
}
