import { Card } from './Card'

import AosProvider from "../components/AosProvider";
import { useEffect, useState } from 'react';

const TryIt = () => {

  const randomMovie = 'https://ghibli-api-v1.azurewebsites.net/api/v1/movies/randomMovie'

  const [movieData, setMovieData] = useState(null)

  const getRandomMovie = async () => {
    try {
        const response = await fetch(randomMovie);
        const data = await response.json();
        setMovieData(data.data)
        return data;
    } catch (error) {
        console.error(error);
    }
  }

  const handleClick = () => {
    getRandomMovie()
  }

  useEffect(() => {
    //De esta manera logramos que se ejecute la consulta a la API por primera vez, luego se ejecutará cuando toquemos Run
    if (movieData === null){
      getRandomMovie()
    }
  }, [movieData])
  

  

  return (
    <AosProvider fade="fade-up" duration={1000} >
      <section className=' max-w-[1366px] h-auto m-auto py-20' >
        <h1 className='text-[50px] text-center font-extrabold tracking-tighter text-[#083344]' >TRY IT</h1>
        <p className='text-[30px] text-center font-semibold tracking-tighter text-[#0E7490] ' >Run this code to get a random card.</p>


        {/* Contenedor de scripts y card */}
        <div className='flex justify-around mt-5 ' >

          {/* Contenedor de scripts */}
          <div className='w-[717px] h-[auto] relative pt-14 ' >
            <div className='w-full h-[130px] bg-[#083344] rounded-md ' >
              <p className='text-[#FFFFFF] w-[659px] h-full m-auto py-4 font-mono text-xl ' >
              fetch('https://ghibli.vercel.app/api/random')
              .then(response =&gt; response.json()) <br />
              .then(card =&gt; console.log(card))
              </p>
            </div>

            {/* Nota: La logica de este button debe ser trasladado al boton inteligente que hizo Desi. */}
            <button className='w-[137px] h-[39px] bg-[#0D9488] hover:bg-[#096b63] transition-all duration-150 text-[#FFFFFF] rounded-full mt-5 absolute right-0 '
                    onClick={handleClick} >
              RUN SCRIPT
            </button>

            <div className='w-full h-[130px] bg-[#083344] mt-28' >
              <p className='text-[#FFFFFF] w-[659px] h-full m-auto py-4 font-mono text-xl '>
                null
              </p>
            </div>
          </div>

          {/* Contenedor de card. */}
          <div className='w-[394px] h-[477px] ' >
              <Card movieData = {movieData} />
          </div>
          

        </div>

        <div className='flex justify-end w-full h-20 mt-16'>
          <div className='w-[394px] mr-16 text-center' >
            <p className='font-semibold text-lg text-[#083344] ' > 
              <span className='text-[#0E7490] ' >EXPLORE</span> DOCUMENTATION <span className='text-[#0E7490]' >NOW!</span>
            </p>


            <button className='w-[180px] h-[43px] bg-[#7E22CE] hover:bg-[#54178a] transition-all duration-150 rounded-full text-center text-[#FFFFFF] text-lg mt-2 ' >
               GET STARTED
            </button>
          </div>
        </div>


      </section>
    </AosProvider>

  )
}

export default TryIt