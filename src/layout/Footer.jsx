import { BsGithub,BsTwitter,BsFillHeartFill,BsFillCircleFill } from "react-icons/bs";
import ccby from '../assets/images/ccby.png';
import vercel from '../assets/images/vercel.png';
import azure from '../assets/images/azure.png';




const Footer = () => {
  return (

    <section className='border-t-[1px] border-gray-400 px-[72px] font-neue-ltcd'>

     <div className="max-w-[1260px] mx-auto text-gray-800 h-[225px] pt-[6px] flex justify-between">
        <article className='text-[16px] font-light text-center leading-7 flex pt-1 text-gray font-neue-lt'>
            <ul>
                <li>NAVIGATION</li>
                <li>HOME</li>
                <li>DOCS</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>SUPPORT US</li>
            </ul>
        </article>

        <article className="pt-1  font-medium flex flex-col pl-6">
            <h3 className='text-[18px] flex gap-1 justify-center  '>
            STATUS SERVER
                <span className='text-green-500 text-[8px] pt-2'>
                    <BsFillCircleFill/>
                </span>
            </h3>
            <div className="grid grid-cols-3 text-[18px]  pt-8 gap-24 pr-4">
                <h3>
                    CHARACTERS: 110
                </h3>
                <h3 className="pl-[10px]">
                    LOCATIONS: 123
                </h3>
                <h3 className="pl-3">
                    MOVIES: 20
                </h3>
            </div>
            <div className="flex justify-center gap-3">
                <div className="pl-1 pt-14">
                    <p className='text-[12px] font-mediummt-[48px]'>
                    <p>&copy; 2023 AikoDev. All rights reserved.</p>
                    </p>
                </div>
            </div>
        </article>
        
        <article>
        <div className='flex justify-end gap-4'>
                    <div className='h-[70px] w-[70px] overflow-hidden'>
                        <img className='w-full h-full object-contain' src={vercel} alt="vercel image" />
                    </div>
                    <div className='h-[62px] w-[62px] overflow-hidden mt-2'>
                        <img className='w-full h-full object-contain'src={azure} alt="azure image" />
                    </div>
                </div>
                <div className='flex justify-end gap-4 items-end pt-[65px] pr-4'>
                    <BsGithub className="text-[25px]" />
                    <BsTwitter className="text-[28px]" />
                    <BsFillHeartFill  className="text-[24px]"/>
                </div>
        </article>
        
       </div>
    </section>    
  
  )
}

export default Footer