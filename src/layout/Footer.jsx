import React from 'react'
import { BsGithub,BsTwitter,BsFillHeartFill,BsFillCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    
    <section className='grid grid-cols-6 border-t-[1px] border-gray-400 px-[72px] m-auto text-gray-800 h-48'>

        <article className='text-xs text-center leading-6 pt-1'>
            <ul>
                <li>NAVIGATION</li>
                <li>HOME</li>
                <li>DOCS</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>SUPPORT US</li>
            </ul>
        </article>

        <article className='font-semibold text-xs flex items-center flex-col mt-[57px]'>
            <p className='pb-14 ml-[90px]'>
                CHARACTERS: 110
            </p>
            <div className='ml-[250px] w-16 h-4'>
                <img src="src/assets/images/ccby.png" alt="image footer" />
            </div>    
        </article>

        <article className='pt-2 col-span-2'>
            <p className='text-xs font-semibold flex gap-1 pl-[130px]'>
                STATUS SERVER
                <span className='text-green-500 text-[7px] pt-[4px]'>
                <BsFillCircleFill/>
                </span>
            </p>  
            <p className='text-xs font-semibold mt-8 pl-[130px]'>
                LOCATIONS: 123
            </p>
            <p className='text-[8px] font-semibold mt-[54px] ml-[95px]'>
                Ghibli Api by Aiko is licensed under a <span className='border-b-[1px] border-gray-800'>
                    Creative Commons</span>
            </p>
            <p className='text-[8px] font-semibold ml-[95px]'>
               <span className='border-b-[1px] border-gray-800'>Reconocimiento 4.0 Internacional License.</span>
            </p>
            </article>
            <article className='flex items-center pb-[66px]'>
                <p className='text-xs font-semibold'>
                    MOVIES: 20
                </p>
            </article>

            <article>
                <div className='flex justify-end gap-4'>
                    <div className='h-[62px] w-[62px] overflow-hidden'>
                        <img className='w-full h-full' src="src/assets/images/vercel.png" alt="vercel image" />
                    </div>
                    <div className='h-[54px] w-[54px] overflow-hidden mt-2'>
                        <img className='w-full h-full'src="src/assets/images/azure.png" alt="azure image" />
                    </div>
                </div>
                <div className='flex justify-end gap-4 items-end pt-[62px] text-lg pr-4'>
                    <BsGithub/>
                    <BsTwitter/>
                    <BsFillHeartFill/>
                </div>
            </article>

    </section>    
        
    
    
  )
}

export default Footer