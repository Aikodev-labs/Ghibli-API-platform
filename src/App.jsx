import Hero from './components/Hero'
import Footer from './layout/Footer'
import WhatAbout from './components/WhatAbout'
import Header from './layout/Header'
import TryIt from './components/TryIt'


function App() {
  
  return (
    <div className='bg-background_Blue'>
      <div className='bg-[url("./assets/images/clouds.svg")]'>
        <div className='h-56 w-screen absolute bg-gradient-to-b from-purple-800'>
          <Header/>
        </div>
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
