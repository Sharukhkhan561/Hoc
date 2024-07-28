import React, { useState } from 'react'

const HighOrder = (Comp) => {
    const highOrderInner=()=>{
        const [num, setNum]= useState(0);
        const handleIncrement=()=>{
            setNum(num+1)
        }
        return(
<Comp num={num} handleIncrement={handleIncrement}/>
        )
    }
  return highOrderInner;
}

export default HighOrder