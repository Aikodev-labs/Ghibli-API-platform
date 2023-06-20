import React from 'react';
import mockup from '../assets/img/rectangle.png';



const WhatAbout = () => {
  return (
    
    <div className='flex-col item-center justify-center  h-screen md:px-20 xl:px-auto py-24'>
    
        <h1 className='text-cyan-950 text-center font-black text-5xl'>What it is about?</h1>
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
    
  )
}

export default WhatAbout