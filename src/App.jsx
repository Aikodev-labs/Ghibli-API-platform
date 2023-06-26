import Hero from './components/Hero'
import Footer from './layout/Footer'
import WhatAbout from './components/WhatAbout'
import Header from './layout/Header'
import TryIt from './components/TryIt'
import background from './assets/images/clouds2.svg'



function App() {
  
  return (
    <div className='bg-background_Blue'>
      <img src={background}></img>
        <div className='h-56 w-full absolute bg-gradient-to-b from-purple-800 top-0'>
          <Header/>
          <Hero/>
          <WhatAbout />
        </div>
      
        <TryIt />
        <div className='bg-gradient-to-t from-white from-10%'> 
          <Footer/>
        </div>
        
    </div>
  )
}

export default App
