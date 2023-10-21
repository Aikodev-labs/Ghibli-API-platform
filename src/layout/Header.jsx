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
    { name: "SUPPORT", path: "/support" },
  ];


  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {

		setIsOpen(!isOpen);
	}

  

  return (

    <header className= {`flex items-center absolute z-10 top-0 left-0 w-full  h-[113px]
      ${ 
        /* Estilos dinamicos del Navbar */
        location.pathname === "/" ? "text-[#fafafa]" : "text-cyan700"
        
      }`}>
      
      
      <div className="max-w-[1366px] mx-auto">
        <nav className="flex justify-center items-center w-full h-full relative">
          <h1 className="font-bold text-[30px] ">
            <Link to="/" className="cursor-default">AIKODEV</Link>
          </h1>

          <button className="xl:hidden flex pl-[220px] mb-[5px]" onClick={toggleOpen}>
          { !isOpen && <AiOutlineMenu className="w-6 h-6"/>
          }
          </button>
          
          {isOpen &&
          <button onClick={toggleOpen}>
            <AiOutlineClose className="w-6 h-6"/>
          </button>
           }
           
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
      <div className="xl:hidden absolute top-24 left-[65px]">
					{isOpen &&
            <ul className="xl:hidden gap-12 mr-60 px-24 fS relative font-neue-ltcd text-center leading-10" onClick={toggleOpen}>
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
