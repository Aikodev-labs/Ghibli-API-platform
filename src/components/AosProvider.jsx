import React from 'react'

import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

const AosProvider = ( {children, fade, duration} ) => {
    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div data-aos={fade} data-aos-duration={duration} >
            {children}
        </div>
  )
}

export default AosProvider