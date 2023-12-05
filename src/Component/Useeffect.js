import React, { useEffect, useState } from "react";

const Effect = () => {
  const [data, setData] = useState(0);
  const [item, setItem] = useState(0);
  useEffect(() => {
    let interval;
    setTimeout(() => {
      interval = setItem(() => item+1);
    }, 1000);
   return()=>clearTimeout(interval); 
  },[]);
// const handle=()=>{
//    setData(()=>data+1);
// }
  return (
    <> 
    <h1>effect:{item} </h1>
      <h1>count:{data}</h1><br></br>
      </>
      // <button onClick={handle}>click</button>
      );
    };

export default Effect;