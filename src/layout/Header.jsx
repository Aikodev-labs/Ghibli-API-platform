import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from '../components/Button';


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
        location.pathname === "/" ? "text-[#fafafa]" : "text-cyan700"
        
      }`}>
      
      
      <div className="max-w-[1366px] mx-auto">
        <nav className="flex justify-center items-center w-full h-full">
          <h1 className="font-bold text-[30px] ">
            <Link to="/">AIKODEV</Link>
          </h1>
            <ul className="flex gap-12 mr-60 px-24 fS relative font-neue-ltcd">
              {pages.map((page, index) => (
                <li className="group font-medium text-[25px]  " key={index}>
                  <NavLink
                    to={page.path} 
                    className={({isActive}) => isActive && location.pathname === "/" ? ("bg-purple-900 rounded-md p-1") 
                    : isActive && location.pathname === "/docs" ? ("bg-cyan950 rounded-md  p-1 text-neutral50")
                    : isActive && location.pathname === "/about" ? ("bg-cyan950 rounded-md  p-1 text-neutral50")
                    : isActive && location.pathname === "/team" ? ("bg-cyan950 rounded-md  p-1 text-neutral50") : ""}
                    > {page.name}

                  {/* En caso de agregarse mas rutas con distintos estilos de navbar, es acá donde hay que trabajar*/}
                  </NavLink>
                </li>
              
                ))}
            </ul>
            <Button text="SUPPORT US" type={location.pathname==='/'? 'outline': 'outline_blue'} size='l'></Button>
        </nav>
      </div>
    </header>

  );
};

export default Header;
