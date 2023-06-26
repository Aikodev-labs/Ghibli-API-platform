import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el archivo CSS de AOS

const Hero = () => {
  
  useEffect(() => {
    AOS.init();
  }, []); 

  return (
    
    <main className='min-h-screen flex items-center
      justify-center relative font-sans'>

      <div className='pt-6'>
        <h1 className='text-6xl font-semibold tracking-wide'>
          GHIBLI API
        </h1>
        <h2 className='text-[32px] font-medium pl-6'>
          スタジオジブリ API
        </h2>
        <div className='flex justify-center pt-2'>
          <button className='bg-purple-700 rounded-2xl text-sm text-white px-[17px] py-[6px]'>
            GET STARTED
          </button>
        </div>
      </div>

      <div className='h-[617px] w-[617px] pt-4 overflow-hidden' data-aos="fade-down-left" data-aos-duration="3000"  >
        <img className='h-full w-full' src="src/assets/images/gatobus.png" alt="hero image"/>
      </div>
    </main>
  )
}

export default Hero