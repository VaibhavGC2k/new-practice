import React from 'react'
import useCounter from '../hooks/useCounter';


export default function Count1() {
    const [count, increment, decrement, reset] = useCounter(5);
    return (
        <>
            {count}
            <button onClick={() => increment()}>incre</button>
            <button onClick={() => decrement()}> decre</button>
            <button onClick={() => reset()}>reset</button>
        </>
    )
}
