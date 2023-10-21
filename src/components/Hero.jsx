import gatobus from "../assets/images/gatobus.png";
import Button from './Button/Button';


const Hero = () => {
  return (

    <main
      className=" pt-24 min-w-screen min-h-[500px] xl:flex xl:items-center  xl:min-h-screen 
    justify-center font-sans px-[72px] mx-auto "
    >
      
      <div className="xl:flex xl:flex-col xl:absolute xl:top-67 leading-[78px] xl:pr-[718px]">
        <h1 className=" text-[35px] text-center sm:text-[45px] md:text-[60px] xl:text-[80px] font-semibold tracking-wide text-white">
          GHIBLI API
        </h1>
        <h2 className="text-[22px] text-center leading-3 sm:leading-relaxed sm:text-[27px] md:text-[40px] xl:text-[45px] font-medium xl:pl-6 text-white opacity-70">
          スタジオジブリ API
        </h2>
        <div className="flex justify-center pt-4 z-10">
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
