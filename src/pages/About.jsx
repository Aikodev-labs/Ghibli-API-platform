import mobile from "/src/assets/images/mobile.png";
//import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import "../assets/animations/animations.css";
import HighlighterComponent from "../components/HighlighterComponent/HighlighterComponent";

const About = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <main className="bg-sky-100 text-white  min-h-screen items-center flex flex-col mt-[113px]">
      <div className="relative">
        <article
          className="w-[1238px] bg-[#0E7490] bg-opacity-[0.34] rounded-[39px] flex pt-28 pl-10 relative
          transition-all duration-700 ease-in-out"
          style={{
            clipPath: show
              ? "polygon(0 0, 101.35% 0, 74% 88%, 0% 100%)  "
              : "polygon(0 0, 101.35% 0, 86% 81%, 0 100%) ",
            height: show ? "1087px" : "620px",
          }}
        >
          <div>
            <p className="w-[711px] min-h-[119px] mb-8 font-[800] text-[30px] leading-[46px] text-white">
              <span className="text-[#083344]">
                Welcome to Giblhi API, your bridge to
              </span>
              <span className="text-[#0E7490]">
                Studio Ghibli s movie world
              </span>
              <span className="text-[#083344]">
                ! Seamlessly connect your website with various technologies,
                including
              </span>
              <span className="text-[#0E7490]"> REST and JavaScript.</span>
            </p>
            <div className="border-t-[4px] border-[#083344] w-[109px] h-[1px] pb-7"></div>
            <div className="flex gap-4 font-[800]">
              <div className="rounded-lg bg-white text-[#F7DF1E] w-[45px] h-[45px] flex items-center justify-center text-[16px] font-bold">
                JS
              </div>
              <div className="rounded-lg bg-white text-[#61DAFB] w-[45px] h-[45px] flex items-center justify-center text-[16px] font-bold">
                {"{R}"}
              </div>
            </div>
          </div>
          {!show && (
            <button
              className="rounded-3xl w-[40px] h-[56px] text-black bg-white flex items-center
    justify-center absolute top-[508px] left-[480px]"
              onClick={toggleShow}
            >
              <IoMdArrowDown className="text-[25px]" />
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
            <div className="flex absolute top-[654px] items-center left-[50px] gap-x-9 fade-in opacity-0">
              <div className="bg-cyan950 rounded-md w-[280px] h-[192px]">
                <HighlighterComponent
                  code={`const response = await fetch("https://ghibliapi.vercel.app/films");
const data = await response.json();
console.log(data);`}
                  wrapLines={true}
                />
              </div>
              <div className="w-[597px] h-[189px]">
                <p className="text-[#083344] text-[20px]">
                  The Ghibli API gives you instant access to the magical worlds
                  of Studio Ghibli — from legendary characters to iconic
                  locations and movies. Whether you&apos;re building a blog, a
                  learning app, or just playing with data, this API is free,
                  easy to use, and full of charm. Explore film data, fetch your
                  favorite characters, or build dashboards with RESTful
                  endpoints — all with just a few lines of JavaScript.
                </p>
              </div>
            </div>
          )}
          {show && (
            <div className="absolute bottom-[464px] items-center fade-in opacity-0">
              <div className="w-[597px] h-[189px]">
                <p className="text-[#083344] text-[20px]">
                  This project was built by fans, for fans — and developers like
                  you. Our goal is to provide a smooth, open-source API
                  experience that helps you learn, build, and have fun. Want to
                  contribute? Check out the GitHub repo or join the team behind
                  Aikodev and help this magical world grow.
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
