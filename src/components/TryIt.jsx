import React from 'react'

const TryIt = () => {
  return (
    <section className=' max-w-[1366px] h-auto m-auto mt-28' >
      <h1 className='text-[50px] text-center font-extrabold tracking-tighter text-[#083344] ' >TRY IT</h1>
      <p className='text-[30px] text-center font-semibold tracking-tighter text-[#0E7490] ' >Run this code to get a random card.</p>

      {/* Contenedor de scripts y card */}
      <div className='flex justify-around mt-5 ' >

        {/* Contenedor de scripts */}
        <div className='w-[717px] h-[auto] relative pt-14 ' >
          <div className='w-full h-[130px] bg-[#083344] ' >
            <p className='text-[#FFFFFF] w-[659px] h-full m-auto py-4 font-mono text-xl ' >
            fetch('https://ghibli.vercel.app/api/random')
            .then(response => response.json()) <br />
            .then(card => console.log(card))
            </p>
          </div>

          <button className='w-[137px] h-[39px] bg-[#0D9488] hover:bg-[#096b63] transition-all duration-150 text-[#FFFFFF] rounded-full mt-5 absolute right-0 ' >RUN SCRIPT</button>

          <div className='w-full h-[130px] bg-[#083344] mt-28' >
            <p className='text-[#FFFFFF] w-[659px] h-full m-auto py-4 font-mono text-xl '>
              null
            </p>
          </div>
        </div>

        {/* Contenedor de card.
        NOTA: Este DIV debería ser reemplazado o bien adentro poner la card que haga desi. */}
        <div className='w-[394px] h-[477px] border border-cyan-400 ' >

        </div>

      </div>







    </section>
  )
}

export default TryIt