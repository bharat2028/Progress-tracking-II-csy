import React,{useState} from 'react'

const State = () => {

    const[count,setcount]=useState(0);
  return (
    <div>
    <p>Count: {count}</p>
    <button onClick={()=>setcount(count+1)}>+</button>
    <button onClick={()=>setcount(count-1)}>-</button>
    </div>
  )
}

export default State