import React, {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0)

    const inc = ()=> setCount(count+1)
    const reset = ()=> setCount(0)
    const dec = ()=> setCount(count-1)

    return(
        <>
        <p className='counter-text'>Count: {count}</p>
        <button className='counter-button' onClick={inc}>increment</button>
        <button className='counter-button' onClick={reset}>reset</button>
        <button className='counter-button' onClick={dec}>decrement</button>
        </>
    )

}

export default Counter