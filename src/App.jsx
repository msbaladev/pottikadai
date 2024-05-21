import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header />
    <Hero />
    
    </>
  )
}

export default App
