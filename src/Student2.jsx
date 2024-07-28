import React from 'react'
import HighOrder from './HighOrder'

function Student2({num, handleIncrement}) {
  return (
    <div>
        <h1>Counter is : {num}</h1>
        <button onClick={handleIncrement}>click me</button>
    </div>
  )
}

export default HighOrder(Student2)