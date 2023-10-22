import Card  from './Card/Card'
import AosProvider from "../components/AosProvider";
import { useEffect, useState } from 'react';
import Button from './Button/Button';
import TotoroLoader from './TotoroLoader'
import HighlighterComponent from './HighlighterComponent/HighlighterComponent';


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
        <h1 className='text-[50px] text-center font-extrabold text-cyan950 font-neue-ltcd' >TRY IT</h1>
        <p className='text-[30px] text-center font-medium text-cyan700 font-neue-ltcd' >Run this code to get a random card.</p>


        {/* Contenedor de scripts y card */}
        <div className='flex justify-around mt-5 ' >

          {/* Contenedor de scripts */}
          <div className='w-[717px] h-[auto] relative pt-14 ' >
            <div className='w-full h-[130px] bg-cyan950 rounded-md ' >
              <p className='text-neutral50 w-[659px] h-full m-auto py-4 font-mono text-xl ' >
              fetch('https://ghibli.vercel.app/api/random')
              .then(response =&gt; response.json()) <br />
              .then(card =&gt; console.log(card))
              </p>
            </div>

            <div className='absolute right-0 mt-3'>
            <Button text='RUN SCRIPT' type='secondary' size='m' onClick={handleClick}></Button>
            </div>

            <div className='w-full min-h-[130px] max-h-[172px] bg-cyan950 mt-28 rounded-md overflow-hidden overflow-y-scroll'>
              <HighlighterComponent wrapLines={true} language="json" code={JSON.stringify(movieData, null, 2)} />
            </div>
          </div>

          {/* Contenedor de card. */}

          <div className='w-[394px] h-[477px] ' >
            { loading ? ( <TotoroLoader /> ) : ( <Card movieData = {movieData} /> ) }
          </div>
          

        </div>

        <div className='flex justify-end w-full h-20 mt-16'>
          <div className='w-[394px] mr-16 text-center' >
            <p className='font-medium text-2xl text-cyan950 font-neue-ltcd' > 
              <span className='text-cyan700 ' >EXPLORE</span> DOCUMENTATION <span className='text-cyan700' >NOW!</span>
            </p>

            <Button text='GET STARTED'size="l" type="primary"></Button>
        
          </div>
          
        </div>


      </section>
    </AosProvider>

  )
}

export default TryIt