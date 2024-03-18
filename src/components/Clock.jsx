import React from 'react'
import useClock from '../hooks/useClock'

export default function Clock() {
    const time = useClock()
    return (
        <>
            <div>Clock</div>
            <br />
            {time.toString()}
        </>
    )
}
