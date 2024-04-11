import React from 'react'
import customClock from '../hooks/Clock'


export default function Clock() {
    const time = customClock()
    return (
        <>
            <div>Clock</div>
            <br />
            {time}
            {/* <Input style={{ width: '200px' }} />
            <Checkbox style={{}}/> */}
        </>
    )
}
