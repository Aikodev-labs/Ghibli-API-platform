import Card  from '../Card/Card'
import AosProvider from "../AosProvider";
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import TotoroLoader from '../TotoroLoader'
import HighlighterComponent from '../HighlighterComponent/HighlighterComponent';


const TryIt = () => {

  const randomMovie = 'https://ghibli-api-v1.azurewebsites.net/api/v1/movies/randomMovie'

  const [movieData, setMovieData] = useState(null)
  const [loading, setLoading] = useState(false)

  const getRandomMovie = async () => {
    try {
        setLoading(true)
        const response = await fetch(randomMovie);
        const data = await response.json();
        setMovieData(data.data)
        setLoading(false)
        return data;
    } catch (error) {
        console.error(error);
        setLoading(false)
    }
  }

  const handleClick = () => {
    getRandomMovie()
  }

  useEffect(() => {
    getRandomMovie()
  }, [])  

  

  return (
    <AosProvider fade="fade-up" duration={1000} >
      <section className=' max-w-[1366px] h-auto m-auto py-20' >
        <h1 className='xl:text-[50px] text-[16px] text-center font-extrabold md:text-[22px]
         text-purple-700 xl:text-cyan950 font-neue-ltcd' >TRY IT</h1>
        <p className='xl:text-[32px] text-[22px] md:text-[32px] text-center font-medium xl:text-cyan700
         text-cyan950 font-neue-ltcd md:leading-normal' >
          Run this code to get
        <br className='xl:hidden' />
         a random card.
         </p>


        {/* Contenedor de scripts y card */}
        <div className='flex justify-center xl:justify-around
         flex-col xl:flex-row mt-5 ' >

          {/* Contenedor de scripts */}
          <div className='xl:w-[717px] w-[419px] h-[auto] xl:relative xl:pt-14 my-10 
          flex justify-center xl:block gap-3 xl:mr-[78px]' >
            <div className='xl:w-full xl:h-[130px] w-[262px] h-[40px] md:w-[427px]
              bg-cyan950 xl:rounded-md rounded-[33px] flex items-center xl:items-start pt-5 xl:pt-0' >
              <HighlighterComponent language="jsx"
               code={"fetch('https://ghibli-api-v1.azurewebsites.net/api/v1/movies/randomMovie')"}/> 
          
            </div>

            <div className='xl:hidden'>
            <Button text='RUN' type='secondary' size='s' onClick={handleClick}></Button>
            </div>

            <div className='sm: hidden xl:block xl:absolute xl:right-0 xl:mt-3'>
            <Button text='RUN SCRIPT' type='secondary' size='m' onClick={handleClick}></Button>
            </div>

           
           
           
            <div className='xl:flex sm:hidden md: hidden w-full min-h-[130px] max-h-[172px]
             bg-cyan950 mt-28 rounded-md overflow-hidden overflow-y-scroll'>
              <HighlighterComponent wrapLines={true} language="json" code={JSON.stringify(movieData, null, 2)} />
            </div>
          </div>
          

          {/* Contenedor de card. */}

          <div className='flex justify-center xl:w-[394px] xl:h-[477px] h-[350px]' >
            { loading ? ( <TotoroLoader /> ) : ( <Card movieData = {movieData} /> ) }
          </div>
          

        </div>

        <div className='flex xl:justify-end justify-center w-full h-20 mt-[202px] mb-8 xl:mt-14 xl:mb-0'>
          <div className='w-[394px] text-center' >
            <p className='font-medium xl:text-2xl text-[20px] text-cyan950 font-neue-ltcd md:text-[30px]' > 
              <span className='text-cyan700 ' >EXPLORE</span> DOCUMENTATION <span className='text-cyan700' >NOW!</span>
            </p>

          <div className='xl:hidden mt-4 '>
            <Button text='GET STARTED'size="m" type="primary"></Button>
          </div> 
          <div className='sm: hidden xl:block'>
            <Button text='GET STARTED'size="l" type="primary"></Button>
          </div> 
        
          </div>
          
        </div>


      </section>
    </AosProvider>

  )
}

export default TryIt