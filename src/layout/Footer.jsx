import { BsGithub,BsTwitter,BsFillHeartFill,BsFillCircleFill } from "react-icons/bs";
import ccby from '../assets/images/ccby.png';
import vercel from '../assets/images/vercel.png';
import azure from '../assets/images/azure.png';

const Footer = () => {
  return (

    <section className='max-w-[1366px] border-t-[1px] border-gray-400 px-[72px]
     mx-auto text-gray-800 h-48 pt-[6px] flex justify-between'>
        
        <article className='text-[16px] font-normal text-center leading-6 flex'>
            <ul>
                <li>NAVIGATION</li>
                <li>HOME</li>
                <li>DOCS</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>SUPPORT US</li>
            </ul>
        </article>

        <article>
            <h3 className='text-[18px] font-medium flex gap-1 justify-center'>
            STATUS SERVER
                <span className='text-green-500 text-[7px] pt-[4px]'>
                <BsFillCircleFill/>
                </span>
            </h3>
            <div className="grid grid-cols-3 text-[18px] font-medium pt-9 gap-16">
                <h3>
                CHARACTERS: 110
                </h3>
                <h3>
                LOCATIONS: 123
                </h3>
                <h3>
                MOVIES: 20
                </h3>
            </div>
            <div className="flex justify-center gap-3">
            <img className="object-contain pt-8" src={ccby} alt="image footer" />
            <div>
            <p className='text-[10px] font-semibold mt-[54px]'>
                Ghibli Api by Aiko is licensed under a <span className='border-b-[1px] border-gray-800'>
                    Creative Commons</span>
            </p>
            <p className='text-[10px] font-semibold pb-2'>
                <span className='border-b-[1px] border-gray-800'>Reconocimiento 4.0 Internacional License.</span>
            </p>
            </div>
            </div>
        </article>

        <article>
        <div className='flex justify-end gap-4'>
                    <div className='h-[67px] w-[67px] overflow-hidden'>
                        <img className='w-full h-full object-contain' src={vercel} alt="vercel image" />
                    </div>
                    <div className='h-[59px] w-[59px] overflow-hidden mt-2'>
                        <img className='w-full h-full object-contain'src={azure} alt="azure image" />
                    </div>
                </div>
                <div className='flex justify-end gap-4 items-end pt-[58px] pr-3'>
                    <BsGithub className="text-[25px]" />
                    <BsTwitter className="text-[28px]" />
                    <BsFillHeartFill  className="text-[24px]"/>
                </div>
        </article>

    </section>    
      
  )
}

export default Footer