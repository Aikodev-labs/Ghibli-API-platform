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
        <div className='h-96 w-full absolute bg-gradient-to-b from-purple-800 top-0 '>
          <Header/>
        <div className='overflow-hidden'>
          <Hero/>
          <WhatAbout/>
        </div>
        </div>
        <div className=' bg-gradient-to-b from-transparent to-white'> 
        <TryIt/>
          <Footer/>
        </div>
        
    </div>
  )
}

export default App
 