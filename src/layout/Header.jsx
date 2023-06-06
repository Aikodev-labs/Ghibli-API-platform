
const Header = () => {

  const pages = [
    {name: 'HOME', path: '/'},
    {name: 'DOCS', path: '/docs'},
    {name: 'ABOUT', path: '/about'},
    {name: 'TEAM', path: '/team'}
  ]

  return (
    <header className="max-w-[1366px] h-16 border bg-black m-auto text-[#fafafa]" >
      <nav className="flex justify-center items-center w-full h-full" >

        <h1 className="font-bold text-[30px] " >AIKODEV</h1>
        <ul className="flex gap-10 mr-60 px-24 font-helvetica" >
          {pages.map( (page, index) =>(
            <li className="font-medium text-[22px] " key={index} >
              <a href={page.path} > {page.name} </a>
            </li>
          ) )}
        </ul>


        <button className="font-helvetica font-semibold text-[20px] border-2 rounded-full p-2 px-6 " >SUPPORT US</button>
      </nav>
    </header>

  )
}

export default Header