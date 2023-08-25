import { useEffect } from 'react';


export const Card = ({movieData}) => {

  if (movieData === null ){
    return "Loading"
  }
  

  
  const { title, director, producer, image, running_time } = movieData
  
  return (
    <>
      <div className=' w-[394px] h-[477px] rounded shadow-lg bg-white'>
          <div className='w-full h-50 '> <img className='rounded-t' src={image}  /></div>
            <div className='m-5'>
                <span className='text-lg font-medium'> {title.es} | {title.jp} </span>
                <div className='text-base font-light py-4'>
                    <p><span className='font-normal'> Running time: </span> {running_time} min </p>
                    <p><span className='font-normal'>Directed by: </span> {director} </p>
                    <p><span className='font-normal'>Produced by: </span> {producer} </p>
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
