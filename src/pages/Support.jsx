import React from 'react'
import coffee from '../assets/images/coffee.png'
import vectorCoffee from '../assets/images/vectorCoffee.png'
import  Button  from '../components/Button/Button'

const Support = () => {
  return (
    <main className="flex m-auto items-center pt-[113px] max-w-[1366px] h-min-witout-footer font-neue-ltc">


        <section className='w-2/3 h-auto flex justify-around pb-56'>

          <div>
            <div className='' >
              <h2 className='text-3xl font-bold text-cyan950 text-center' >Let's share a friendly coffee!</h2>
            </div>

            <div className='flex justify-center gap-8 mt-20'>
              <button onClick={() => window.open('https://google.com', '_blank') } className='border-2 border-cyan700 rounded-full  py-2 w-32 text-2xl text-cyan700 hover:bg-cyan950 hover:text-white transition-all' > 1$ </button>
              <button onClick={() => window.open('https://google.com', '_blank') } className='border-2 border-cyan700 rounded-full  py-2 w-32 text-2xl text-cyan700 hover:bg-cyan950 hover:text-white transition-all' > 5$ </button>
              <button onClick={() => window.open('https://google.com', '_blank') } className='border-2 border-cyan700 rounded-full  py-2 w-32 text-2xl text-cyan700 hover:bg-cyan950 hover:text-white transition-all' > 10$ </button>
            </div>   
          </div>
          

        </section>


        <div className='top-24 z-10 right-96 absolute w-72 h-20'>
              <img className='animate-pulse' src={vectorCoffee} alt="VectorCoffee" />
        </div>
          
         <div className='top-24 z-10 right-96 absolute w-56 h-20'>
            <img className='animate-pulse' src={vectorCoffee} alt="VectorCoffee" />
        </div>

        <section className='flex relative items-center justify-start w-1/3'>
          <img src={coffee}></img>
        </section>


    </main>
  )
}

export default Support