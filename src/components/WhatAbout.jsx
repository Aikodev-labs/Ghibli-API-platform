import { useEffect } from 'react';
import mockup from '../assets/images/mockup.png';

import AosProvider from "../components/AosProvider";




const WhatAbout = () => {


  return (
    <AosProvider fade="fade-up" duration={1000}>
      <section className="flex-col item-center justify-center h-auto mt-4 m-auto ">
        <h1 className="font-neue-ltcd text-cyan950 text-center font-black text-5xl">
          WHAT IT IS ABOUT?
        </h1>
        <div className="flex pt-20 item-center justify-center">
          <div className='text-cyan700 text-3xl font-medium font-neue-ltcd max-w-xl '>
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
          
            <img src={mockup} className='relative bottom-10 right-2 object-contain'></img>
          
        </div>
      </section>
    </AosProvider>
  );
}

export default WhatAbout