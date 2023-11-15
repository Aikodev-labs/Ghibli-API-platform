import Hero from "../components/Hero";
import TryIt from "../components/TryIt";
import WhatAbout from "../components/WhatAbout/WhatAbout";
import background from "../assets/images/clouds2.svg";

const Home = () => {
  return (
    <main className="bg-background_Blue">
      <img className="absolute top-0" src={background}></img>
      <div className="h-96 w-full absolute bg-gradient-to-b from-purple-800 top-0"></div>
      <div className="relative">

        <Hero />
        <WhatAbout />
        <div className=" bg-gradient-to-b from-transparent to-white">
        <TryIt /> 
        </div>

      </div>

      
    </main>
  );
};

export default Home;
