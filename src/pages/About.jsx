import mobile from "/src/assets/images/mobile.png";
//import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";


import { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <main className="bg-sky-100 text-white  min-h-screen justify-center items-center flex flex-col py-[400px] ">
      <div className="relative">
        <article
          className="w-[1238px] bg-[#0E7490] bg-opacity-[0.34] rounded-[39px] flex pt-28 pl-10 relative
          transition-all duration-700 ease-in-out"
          style={{
            clipPath: show
              ? "polygon(0 0, 100% 0, 74% 88%, 0% 100%)  "
              : "polygon(0 0, 100% 0, 86% 81%, 0 100%) ",
            height: show ? "1087px" : "620px",
          }}
        >
          <div>
            <p className="w-[711px] h-[119px] font-[800] text-[20px] leading-9">
              <span className="text-[#083344]">
                Welcome to Giblhi API, your bridge to
              </span>{" "}
              <span className="text-[#0E7490]">
                Studio Ghibli s
                <br />
                movie world
              </span>
              <span className="text-[#083344]">
                ! Seamlessly connect your website with
                <br />
                various technologies, including
              </span>
              <span className="text-[#0E7490]"> REST and JavaScript.</span>
            </p>
            <div className="border-t-[4px] border-[#083344] w-[109px] h-[1px] pb-7"></div>
            <div className="flex gap-4 font-[800]">
              <div className="rounded-lg bg-white text-[#93C6D2] w-[45px] h-[45px]  flex items-center justify-center">
                M
              </div>
              <div className="rounded-lg bg-white text-[#93C6D2] w-[45px] h-[45px] flex items-center justify-center">
                E
              </div>
              <div className="rounded-lg bg-white text-[#93C6D2] w-[45px] h-[45px] flex items-center justify-center">
                R
              </div>
              <div className="rounded-lg bg-white text-[#93C6D2] w-[45px] h-[45px] flex items-center justify-center">
                N
              </div>
            </div>
          </div>
          {!show && (
            <button
              className="rounded-3xl w-[40px] h-[56px] text-black bg-white flex items-center
    justify-center absolute top-[508px] left-[480px]"
              onClick={toggleShow}
            >
             <IoMdArrowDown className="text-[25px]"  />
            </button>
          )}
          {show && (
            <button
              className="rounded-3xl w-[40px] h-[56px] text-black bg-white flex items-center
    justify-center absolute top-[957px] left-[480px] "
              onClick={toggleShow}
            >
            <IoMdArrowUp className="text-[25px]" />  
            </button>
          )}

          {show && (
            <div className="flex absolute top-[654px] items-center left-[50px] gap-x-9">
              <div className="w-[249px] h-[245px] bg-gray-400"></div>
              <div className="w-[597px] h-[189px]">
                <p className="text-[#083344] text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  iaculis dapibus ligula, finibus iaculis libero dapibus
                  rhoncus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Vivamus scelerisque
                  ante nibh, in condimentum massa luctus ut. Etiam varius
                  posuere nunc efficitur laoreet. Nunc gravida auctor mauris,
                  non pharetra ex aliquet a.
                </p>
              </div>
            </div>
          )}
          {show && (
            <div className="absolute bottom-[514px] items-center righ-[120px]">
              <div className="w-[597px] h-[189px]">
                <p className="text-[#083344] text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  iaculis dapibus ligula, finibus iaculis libero dapibus
                  rhoncus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Vivamus scelerisque
                  ante nibh, in condimentum massa luctus ut. Etiam varius
                  posuere nunc efficitur laoreet. Nunc gravida auctor mauris,
                  non pharetra ex aliquet a.
                </p>
              </div>
            </div>
          )}
        </article>
        <div
          className="pl-5 absolute top-9 right-[127px]
         w-[275px] h-[532]"
        >
          <img
            src={mobile}
            alt="mobile img"
            className="w-full h-full bg-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
