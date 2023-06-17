
import './App.css'
import { Card } from './components/Card'
import Hero from './components/Hero'
import Footer from './layout/Footer'
import WhatAbout from './components/WhatAbout'
import Header from './layout/Header'
import TryIt from './components/TryIt'


function App() {
  
  return (
    <>
      <Header />
      <Hero/>
      <WhatAbout />
      <TryIt />
      <Card />
      <Footer/>
    </>
  )
}

export default App
