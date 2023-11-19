import { revalidateTag } from 'next/cache';
import React from 'react'

interface User{
  id:number;
  name: string;
}

const NewPAge =async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users',
  {cache :'no-store'}); // not to use cache rather update the json resp everytime
  //{next:{ revalidate :10}}); // for fetching data every 10 sec. for data resp changing scenario
  const users: User[] = await resp.json();
  return (

<>

    <div>NewPAge</div>
    <p>{new Date().toLocaleTimeString()}</p>
    <>
    <ul>
      {users.map( user => 
        <li key={user.id}> {user.name}</li>
      )}
      </ul>
      </>
    </>
  )
}

export default NewPAge