import gatobus from "../assets/images/gatobus.png";
import Button from './Button/Button';


const Hero = () => {
  return (

    <main
      className="min-h-[500px]  xl:min-h-screen flex items-center
    justify-center font-sans px-[72px] mx-auto "
    >
      
      <div className="xl:flex xl:flex-col xl:absolute xl:top-67 leading-[78px] xl:pr-[718px]">
        <h1 className=" text-[45px] text-center xl:text-[80px] font-semibold tracking-wide text-white">
          GHIBLI API
        </h1>
        <h2 className="text-[25px] text-center xl:text-[45px] font-medium xl:pl-6 text-white opacity-70">
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
