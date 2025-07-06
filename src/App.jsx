import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdvancedCounter from './components/AdvancedCounter/AdvancedCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <AdvancedCounter />
    </>
  )
}

export default App
