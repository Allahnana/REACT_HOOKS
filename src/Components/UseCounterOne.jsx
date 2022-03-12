import React, {useState} from 'react'
import useCounter from './useCounter'

function UseCounterOne() {

    const [count, increament, decreament, reset] = useCounter(0, 1)

  return (
    <div>
           <h2>
              Count - {count}
           </h2>
        

        <button onClick={increament}> Increament</button>

        <button onClick={decreament}> Decreament</button>

        <button onClick={reset}> Reset</button>
    </div>
  )
}

export default UseCounterOne