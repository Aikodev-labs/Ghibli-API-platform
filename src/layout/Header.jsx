import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const pages = [
    { name: "HOME", path: "/" },
    { name: "DOCS", path: "/docs" },
    { name: "ABOUT", path: "/about" },
    { name: "TEAM", path: "/team" },
  ];


  const location = useLocation()
  

  return (

    <header className= {`flex items-center absolute z-10 top-0 left-0 w-full  h-[113px]
      ${ 
        /* Estilos dinamicos del Navbar */
        location.pathname === "/" ? "text-[#fafafa]" : "text-black"
        
      }`}>
      
      
      <div className="max-w-[1366px] mx-auto">
        <nav className="flex justify-center items-center w-full h-full">
          <h1 className="font-bold text-[30px] ">
            <Link to="/">AIKODEV</Link>
          </h1>
          <ul className="flex gap-10 mr-60 px-24 font-helvetica relative">
            {pages.map((page, index) => (
              <li className="group font-medium text-[22px]  " key={index}>
                <NavLink
                  to={page.path} 
                  className={({isActive}) => isActive && location.pathname === "/" ? ("bg-purple-900 rounded-md p-1") 
                  : isActive && location.pathname === "/docs" ? ("bg-[#083344] rounded-md p-1 text-white")
                  : isActive && location.pathname === "/about" ? ("bg-[#083344] rounded-md p-1 text-white")
                  : isActive && location.pathname === "/team" ? ("bg-[#083344] rounded-md p-1 text-white") : ""}
                  > {page.name}

                  {/* En caso de agregarse mas rutas con distintos estilos de navbar, es acá donde hay que trabajar*/}
                </NavLink>
                <div
                  className={`
                ${
                  index === 0
                    ? "w-[65px] h-1 bg-purple-900 rounded absolute top-7 left-22 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"
                    : index === 1
                    ? "w-[63px] h-1 bg-purple-900 rounded absolute top-7 left-50 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"
                    : index === 2
                    ? "w-[73px] h-1 bg-purple-900 rounded absolute top-7 right-50 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"
                    : index === 3
                    ? "w-[65px] h-1 bg-purple-900 rounded absolute top-7 right-34 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"
                    : ""
                }    `}
                ></div>
              </li>
              
            ))}
          </ul>

          <button className="font-helvetica font-normal text-[18px] border rounded-full p-2 px-6 ">
            SUPPORT US
          </button>
        </nav>
      </div>
    </header>

  );
};

export default Header;
