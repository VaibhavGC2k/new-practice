import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useFetchUsers(url) {
    const [users, setUsers] = useState()
    useEffect(() => {
        const getUsers = async () => {
            const userData = await axios.get(url).catch((error) => console.log(error.message))
            if (userData) {
                setUsers(userData.data)
            } else {
                setUsers("no data found")
            }
        }
        getUsers()
    }, [])
    return users
}
