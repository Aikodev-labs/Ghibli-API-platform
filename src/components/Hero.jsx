import { useEffect } from 'react'
import AosProvider from './AosProvider'


const Hero = () => {

  return (
    <AosProvider >
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

        <div className='h-[617px] w-[617px] pt-4 overflow-hidden' data-aos="fade-down-left" data-aos-duration="1000"  >
          <img className='h-full w-full' src="src/assets/images/gatobus.png" alt="hero image"/>
        </div>
      </main>
    </AosProvider>

  )
}

export default Hero