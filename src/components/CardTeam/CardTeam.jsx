import React from 'react'

const CardTeam = () => {
  return (
    <>
    <div className='w-60 h-[300px] flex flex-col  bg-white rounded-[10px] items-center shadow-lg'>
            <div className='w-[200px] h-[200px] bg-[url(https://res.cloudinary.com/ddbxllg9q/image/upload/v1701905622/hiixf5tfawyzvcmfd0fr.png)] bg-cover rounded-full bg-cyan700 relative bottom-[30px]'></div>
            <div className='flex flex-col relative bottom-[15px]'>
                <h1 className='font-black text-cyan950 text-xl'>Josué Oroya</h1>
                <ul>
                    <li className='text-cyan700 font-bold'>#Project Manager</li>
                    <li className='text-cyan700 font-bold'>#FullStack</li>
                </ul>
        </div>

    </div>
        
    </>
  )
}

export default CardTeam;