import React from 'react'
import useClock from '../hooks/useClock'
import { Checkbox, Input } from 'antd'

export default function Clock() {
    const time = useClock()
    return (
        <>
            <div>Clock</div>
            <br />
            {time.toString()}
            {/* <Input style={{ width: '200px' }} />
            <Checkbox style={{}}/> */}
        </>
    )
}
