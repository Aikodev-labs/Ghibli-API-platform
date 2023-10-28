import { Link, NavLink, useLocation } from "react-router-dom";
import Button from '../components/Button/Button';
import { useState } from "react"
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai"



const Header = () => {
  const pages = [
    { name: "HOME", path: "/" },
    { name: "DOCS", path: "/docs" },
    { name: "ABOUT", path: "/about" },
    { name: "TEAM", path: "/team" },
  ];

  const pagesMobile = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "TEAM", path: "/team" },
    { name: "SUPPORT US", path: "/support" },
  ];


  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {

		setIsOpen(!isOpen);
	}

  

  return (

    <header className= {`flex flex-col xl:flex-row xl:items-center relative xl:absolute z-10
    xl:top-0 xl:left-0 w-full xl:h-[113px]
      ${ 
        /* Estilos dinamicos del Navbar */
        location.pathname === "/" ? "text-[#fafafa]" : "text-cyan700"
        
      }`}>
      
      
      <div className="max-w-[1366px] xl:mx-auto">
        <nav className=" w-full h-full xl:relative xl:flex xl:flex-row">

   
          <div className="flex items-center px-3 justify-between">
          <h1 className="font-bold text-[30px] ">
            <Link to="/" className="cursor-default">AIKODEV</Link>
          </h1>

          <button className="xl:hidden flex" onClick={toggleOpen}> 
          { !isOpen && <AiOutlineMenu className="w-6 h-6 text-white"/>
          }
          </button>
         </div>

         <div className="absolute right-[10px] top-3">
        <button className="xl:hidden flex" onClick={toggleOpen}>
           {isOpen &&  <AiOutlineClose className="w-6 h-6 text-white"/>
           }
           </button>
           </div>
          
            <ul className="xl:flex hidden gap-12 mr-60 px-24 fS relative font-neue-ltcd">
              {pages.map((page, index) => (
                <li className="group font-medium text-[25px] hover:scale-105  " key={index}>
                  <NavLink
                    to={page.path}
                    className={({isActive}) => isActive && location.pathname === "/" ? ("bg-purple-900 px-2 rounded-md cursor-default")
                    : isActive && location.pathname === "/docs" ? ("bg-cyan950 px-2 rounded-md text-neutral50 cursor-default")
                    : isActive && location.pathname === "/about" ? ("bg-cyan950 px-2 rounded-md text-neutral50 cursor-default")
                    : isActive && location.pathname === "/team" ? ("bg-cyan950 px-2 rounded-md text-neutral50 cursor-default") : "cursor-default px-2"}
                    > {page.name}

                  {/* En caso de agregarse mas rutas con distintos estilos de navbar, es acá donde hay que trabajar*/}
                  </NavLink>
                </li>
              
                ))}
            </ul>
            <div className="xl:flex hidden">
            <Button text="SUPPORT US" type={location.pathname==='/'? 'outline': 'outline_blue'} size='l'></Button>
            </div>
        </nav>
    

      </div>
      <div className="xl:hidden flex justify-center flex-col">
					{isOpen &&
            <ul className="xl:hidden gap-12 mt-11 fs px-10 font-neue-ltcd
             text-center leading-10 animate-fade-down" onClick={toggleOpen}>
            {pagesMobile.map((page, index) => (
              <li className="group font-medium text-[25px] hover:scale-105  " key={index}>
                <NavLink
                  to={page.path}
                  className={({isActive}) => isActive && location.pathname === "/" ? ("bg-purple-900 px-2 rounded-md cursor-default")
                  : isActive && location.pathname === "/about" ? ("bg-cyan950 px-2 rounded-md text-neutral50 cursor-default")
                  : isActive && location.pathname === "/team" ? ("bg-cyan950 px-2 rounded-md text-neutral50 cursor-default")
                  : isActive && location.pathname === "/support" ? ("bg-cyan950 px-2 rounded-md text-neutral50 cursor-default") : "cursor-default px-2"}
                  > {page.name}
                </NavLink>
              </li>
            
              ))}
          </ul>
           }		
					</div>
    </header>

  );
};

export default Header;
