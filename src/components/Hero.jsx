import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el archivo CSS de AOS
import gatobus from '../assets/images/gatobus.png';



const Hero = () => {
  
  useEffect(() => {
    AOS.init();
  }, []); 

  return (
    
    <main className='min-h-screen flex items-center
      justify-center font-sans px-[72px]
      mx-auto'>

      <div className='px-8 flex flex-col absolute left-24 top-67 leading-[78px]'>
        <h1 className='text-[80px] font-semibold tracking-wide text-white'>
          GHIBLI API
        </h1>
        <h2 className='text-[45px] font-medium pl-6 text-white opacity-70'>
          スタジオジブリ API
        </h2>
        <div className='flex justify-center pt-4'>
          <button className='bg-purple-700 rounded-2xl text-sm text-white px-[17px] py-[6px]'>
            GET STARTED
          </button>
        </div>
      </div>

      <div className='h-[773px] w-[1249px] pb-11 overflow-hidden relative pl-[450px]' data-aos="fade-down-left" data-aos-duration="3000"  >
        <img className='h-full w-full object-contain' src={gatobus} alt="hero image" />
      </div>
    </main>
  )
}

export default Hero