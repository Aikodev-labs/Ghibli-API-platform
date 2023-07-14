import { useEffect } from 'react';
import mockup from '../assets/img/rectangle.png';

import AosProvider from "../components/AosProvider";


const WhatAbout = () => {


  return (
    <AosProvider fade="fade-up" duration={1000} >
      <div className='flex-col item-center justify-center m-auto h-auto mt-2'>
      
        <h1 className='font-neue-ltcd text-cyan-950 text-center font-black text-5xl' >WHAT IT IS ABOUT?</h1>
        <div className='flex gap-20 py-12 item-center justify-center'>
            <div className='text-cyan-700 text-3xl font-medium font-sans max-w-2xl '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel <span className='text-cyan-900'>pretium felis</span>. Morbi ac felis blandit, tristique erat vel, tristique quam.</p><br></br>
                <p>Lorem <span className='text-cyan-900'>ipsum dolor sit amet</span>, consectetur adipiscing elit. Donec vel pretium felis. Morbi ac felis blandit, tristique erat vel, tristique quam.</p>
                <br></br>
                <p>Lorem <span className='text-cyan-900'> ipsum dolor sit amet</span>, consectetur adipiscing elit. Donec vel pretium felis. Morbi ac felis blandit, tristique erat vel, tristique quam.</p>
            </div>
            <img src={mockup}></img>
          
        </div>

      </div>      
    </AosProvider>

    
  )
}

export default WhatAbout