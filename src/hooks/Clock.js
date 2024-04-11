import { useEffect, useState } from 'react'

export default function Clock() {
    const [time, setTime] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])
    return <h1>Hello</h1>
}