import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Header'
import Hero from './assets/Hero'
import Statics from './assets/Statics'
import Step from './assets/Step'
import Projects from './assets/Projects'
import Testomonial from './assets/Testomonial'
import Footer from './assets/Footer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Hero />
     <Statics />
     <Step />
     <Projects />
     <Testomonial />
     <Footer />
    </>
  )
}

export default App
