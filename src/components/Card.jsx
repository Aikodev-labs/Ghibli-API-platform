import React from 'react'
import image from '../assets/images/howl.jpg'

export const Card = () => {
  return (
    <>
      <div className=' w-[394px] h-[477px] rounded shadow-lg '>
          <div className='w-full h-50 '> <img src={image} className='rounded-t' /></div>
            <div className='m-5'>
                <span className='text-lg font-medium'>El castillo ambulante | ハウルの動く城</span>
                <div className='text-base font-light py-4'>
                    <p><span className='font-normal'> Running time: </span> 119 min</p>
                    <p><span className='font-normal'>Directed by: </span>Hayao Miyazaki</p>
                    <p><span className='font-normal'>Produced by: </span>  Toshio Suzuki | Hayao Miyazaki | Tomohiko Ishii</p>
                </div>
                <div className='flex gap-3 text-xs my-8'>
                <div className='cursor-pointer bg-gray-300 text-gray-700 px-4 py-1 rounded-full'>#gibliStudio</div>
                <div className='cursor-pointer bg-gray-300 text-gray-700 px-4 py-1 rounded-full'>#Miyazaki</div>
                <div className='cursor-pointer bg-gray-300 text-gray-700 px-4 py-1 rounded-full'>#anime</div>
            </div>
          </div>
      </div>
    </>
  )
}
