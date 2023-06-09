import gatobus from "../assets/images/gatobus.png";


const Hero = () => {
  return (

    <main
      className="min-h-screen flex items-center
    justify-center font-sans px-[72px] mx-auto"
    >
      <div className="flex flex-col absolute top-67 leading-[78px] pr-[680px]">
        <h1 className="text-[80px] font-semibold tracking-wide text-white">

          GHIBLI API
        </h1>
        <h2 className="text-[45px] font-medium pl-6 text-white opacity-70">
          スタジオジブリ API
        </h2>
        <div className="flex justify-center pt-4">
          <button className="bg-purple-700 rounded-2xl text-sm text-white px-[17px] py-[6px]">
            GET STARTED
          </button>
        </div>
      </div>


      <div
        className="h-[773px] w-[1249px] pb-11 overflow-hidden relative pl-[450px]"
      >
        <img
          className="h-full w-full object-contain"
          src={gatobus}
          alt="hero image"
        />

      </div>
    
    </main>
  );
};

export default Hero;
