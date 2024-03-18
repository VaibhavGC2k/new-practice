import React from 'react'
import useCounter from '../hooks/useCounter';


export default function Count2() {
  const [count, increment, decrement, reset] = useCounter(10);
  return (
    <>
      {count}
      <button onClick={() => increment()}>increase</button>
      <button onClick={() => decrement()}> decrease</button>
      <button onClick={() => reset()}>reset</button>
    </>
  )
}
