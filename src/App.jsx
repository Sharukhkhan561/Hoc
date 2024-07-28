import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'
import Student2 from './Student2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student/>
      <Student2/>
    </>
  )
}

export default App
