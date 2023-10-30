import { BsGithub,BsTwitter,BsFillHeartFill,BsFillCircleFill } from "react-icons/bs";
import ccby from '../assets/images/ccby.png';
import vercel from '../assets/images/vercel.png';
import azure from '../assets/images/azure.png';





const Footer = () => {
  return (

    <section className='border-t-[1px] border-gray-400 xl:px-[72px] font-neue-ltcd '>

        <div className="w-full xl:max-w-[1260px] mx-auto text-gray-800 h-[225px] pt-[6px] xl:flex xl:justify-between">
            <article className='hidden text-[16px] font-light text-center leading-7 xl:flex pt-1 text-gray font-neue-lt'>
                <ul>
                    <li>NAVIGATION</li>
                    <li>HOME</li>
                    <li>DOCS</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>SUPPORT US</li>
                </ul>
            </article>

            <article className="pt-1  font-medium flex flex-col xl:pl-6">
                <h3 className='text-[18px] flex gap-1 justify-center  '>
                STATUS SERVER
                    <span className='text-green-500 text-[8px] pt-2'>
                        <BsFillCircleFill/>
                    </span>
                </h3>
                <div className=" grid grid-cols-3 text-[14px] md:text-[16px] xl:text-[18px] max-w-md m-auto xl:max-w-none pt-2 xl:pt-8  gap-4 xl:gap-24 pl-3">
                    <h3 >
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
                    <div className="hidden xl:block pl-1 pt-14">
                        <p className='text-[12px] font-mediummt-[48px]'>
                            <p>&copy; 2023 AikoDev. All rights reserved.</p>
                        </p>
                    </div>
                </div>
            </article>
            
            <article>
                <div className='flex justify-center xl:justify-end mt-6 xl:mt-0 gap-8 xl:gap-4'>
                    <div className='h-[100px] w-[100px] xl:h-[70px] xl:w-[70px] overflow-hidden'>
                        <img className='w-full h-full object-contain' src={vercel} alt="vercel image" />
                    </div>
                    <div className='h-[92px] w-[92px] xl:h-[62px] xl:w-[62px] overflow-hidden mt-[10px] '>
                        <img className='w-full h-full object-contain'src={azure} alt="azure image" />
                    </div>
                </div>


                <div className="w-full h-10 flex pl-4 mt-4 items-center justify-center xl:hidden" >
                    <BsGithub className="text-[25px]" />
                    <BsTwitter className="text-[28px] mx-6" />
                    <BsFillHeartFill  className="text-[24px]"/>
                </div>

                <p className='xl:hidden text-[14px] font-medium mt-8 pb-16 text-center'>
                    <p>&copy; 2023 AikoDev. All rights reserved.</p>
                </p>

                <div className='hidden xl:flex justify-center xl:justify-end gap-4 items-end pt-[65px] pr-4'>
                    <BsGithub className="text-[25px]" />
                    <BsTwitter className="text-[28px] " />
                    <BsFillHeartFill  className="text-[24px]"/>
                </div>

            </article>
        
        </div>
     
    </section>    
  
  )
}

export default Footer