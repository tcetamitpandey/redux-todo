import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo_Comp from './components/Todo_Comp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo_Comp />
      
    </>
  )
}

export default App
