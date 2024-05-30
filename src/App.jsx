import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'
import Taste from './Components/Taste.jsx'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Vegetable from './Components/Vegetable.jsx'
import Carrot from './Components/Carrot.jsx'
import Fruits from './Components/Fruit.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    
    <div className=''>
      <BrowserRouter>
      <Header />
   
      <Routes>
       <Route path='/' element={<>  <Hero /> <Taste /> </>}></Route>
        <Route path='vegetable' element={<Vegetable/>}></Route>
       
        <Route path='fruits' element={<Fruits/>}></Route>
        <Route path='carrot' element={<Carrot/>}></Route>
      </Routes>
    </BrowserRouter>
   
  
    
    </div>
  )
}

export default App
