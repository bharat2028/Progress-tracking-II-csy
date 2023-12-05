import React, { useState } from 'react'
import Signin from './SignInside'
import Signup from './signup'
const Condition = () => {
    const [show,setShow]=useState(true);
  return (
    <>
    <button onClick={()=>setShow(!show)}>{show? "create account" :"Already have an acccount"}</button>
    {
  show?
  <Signin/>:<Signup/>
    }
    </>
  )
};

export default Condition;