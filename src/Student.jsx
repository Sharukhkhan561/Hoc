import React from 'react'
import HighOrder from './HighOrder'

function Student({num, handleIncrement}) {
  return (
    <div>
        <h1>Count is {num}</h1>
        <button onClick={handleIncrement}>Click me</button>
    </div>
  )
}

export default HighOrder(Student);