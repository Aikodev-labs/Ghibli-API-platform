import gatobus from "../assets/images/gatobus.png";
import Button from './Button/Button';


const Hero = () => {
  return (

    <main
      className=" pt-10 min-w-screen min-h-[500px] xl:flex xl:items-center  xl:min-h-screen 
    justify-center font-sans xl:px-[72px] mx-auto "
    >
      
      <div className="xl:flex xl:flex-col xl:absolute xl:top-67 leading-[78px] xl:pr-[718px]">
        <h1 className=" text-[56px] text-center md:text-[60px] xl:text-[80px] font-semibold tracking-wide text-white">
          GHIBLI API
        </h1>
        <h2 className="text-[34px] text-center leading-relaxed md:text-[37px] xl:text-[45px] font-medium xl:pl-6 text-white opacity-70">
          スタジオジブリ API
        </h2>
        <div className="flex justify-center pt-6 z-10">
          <Button text="GET STARTED" size="l" type="primary"></Button>
        </div>  
      </div>

      <div
        className="hidden xl:block h-[773px] w-[1249px] pb-11 overflow-hidden relative pl-[450px]"
      >
        <img
          className="xl:h-full xl:w-full xl:object-contain"
          src={gatobus}
          alt="hero image"
        />

      </div>
    
    </main>
  );
};

export default Hero;
