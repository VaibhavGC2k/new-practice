import { useEffect, useState } from 'react'

export default function useClock() {
    const [time, setTime] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])
    return time
}
