import React from 'react'
import image from '../assets/images/howl.jpg'

export const Card = () => {
  return (
    <div className=' flex justify-center items-center w-screen h-screen'>
        <div className=' flex-col w-3/12 h-100  rounded shadow-lg '>
            <div className='w-full h-50 '> <img src={image} className='rounded-t' /></div>
            <div className='m-6'>
                <span className='text-lg'>El castillo ambulante | ハウルの動く城</span>
                <div>
                    <p><span className='text-base'> Running time: </span> 119 min</p>
                    <p><span className='text-base'>Directed by:</span>Hayao Miyazaki</p>
                    <p><span className='text-base'>Produced by:</span>  Toshio Suzuki | Hayao Miyazaki | Tomohiko Ishii</p>
                </div>
                <div className='flex gap-3 text-xs'>
                <div>#gibliStudio</div>
                <div>#Miyazaki</div>
                <div>#anime</div>
            </div>
            </div>
        </div>
    </div>
  )
}
