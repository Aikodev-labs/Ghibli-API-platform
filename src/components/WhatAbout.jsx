import { useEffect } from 'react';
import mockup from '../assets/images/mockup.png';

import AosProvider from "../components/AosProvider";




const WhatAbout = () => {


  return (
    <AosProvider fade="fade-up" duration={1000}>
      <section className="flex-col item-center justify-center h-auto mt-4 m-auto  ">
        <h1 className="font-neue-ltcd text-center xl:font-black xl:text-5xl xl:text-cyan950 sm:text-base text-purple700  ">
          WHAT IT IS ABOUT?
        </h1>

        <p className='xl:invisible text-lg flex justify-center font-neue-ltcd  text-center'>Unleash the magic of Ghibli <br/> Studio with our free API</p>
        <div className="pt-20 item-center justify-center xl:flex sm:flex-colum sm:pt-5 ">
          <div className='text-cyan700 xl:text-3xl  sm:text-base sm:mx-20 font-medium font-neue-ltcd xl:max-w-xl sm:max-w-lg '>
            <p>
              Dive into the incredible <span className='text-cyan950'>universe of Studio Ghibli</span> through our
              fantastic <span className='text-cyan950'>free API</span>. Explore information about movies, characters,
              and settings in <span className='text-cyan950'>three languages</span>: English, Spanish, and Japanese.
              Infuse your website with the magical essence of Ghibli.
            </p>
            <br></br>
            <p>
              Plunge into our <span className='text-cyan950'>extensive database</span> with all Ghibli films. Easily
              add synopses, directors, release dates, and more to your website.
            </p>
            <br></br>

            <p>Soar with Ghibli's imagination!</p>
          </div>
          
            <img src={mockup} className='relative object-contain right-2 xl:bottom-10 sm:right-20  '></img>
          
        </div>
      </section>
    </AosProvider>
  );
}

export default WhatAbout