import axios from 'axios'
import React, { useEffect } from 'react'

export default function FetchUsers() {
    useEffect(()=>{
        const controller = new AbortController();
        console.log(controller)
        const getUsers = async () => {
            const userData = await axios.get('https://jsonplaceholder.typicode.com/users',{signal:controller.signal}).catch((error) => console.log(error.message))
            if (userData) {
                console.log(userData.data)
            }
        }
            getUsers()
        return ()=>{
            controller.abort()
            console.log(controller)
        }
    },[])   
  return (
    <div>
      <h2>Users</h2>
    </div>
  )
}
