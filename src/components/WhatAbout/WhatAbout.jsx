import { useEffect } from "react";
import mockup from "../../assets/images/mockup.png";

import AosProvider from "../AosProvider";

const WhatAbout = () => {
  return (
    <AosProvider fade="fade-up" duration={1000}>
      <section className="flex-col item-center justify-center h-auto mt-4 m-auto ">
        <h1 className="font-neue-ltcd text-center xl:font-black xl:text-5xl xl:text-cyan950 sm:text-base text-purple700  ">
          WHAT IT IS ABOUT?
        </h1>

        <p className="xl:invisible text-lg flex justify-center font-neue-ltcd  text-center">
          Unleash the magic of Ghibli <br /> Studio with our free API
        </p>
        <div className="item-center justify-center xl:flex pt-4 ">
          <div className="text-cyan700 xl:w-1/2 xl:text-3xl md:text-xl sm:text-base sm:mx-20 font-medium font-neue-ltcd xl:max-w-xl sm:max-w-lg mb-4">
            <p>
              Dive into the incredible{" "}
              <span className="text-cyan950">universe of Studio Ghibli</span>{" "}
              through our fantastic{" "}
              <span className="text-cyan950">free API</span>. Explore
              information about movies, characters, and settings in{" "}
              <span className="text-cyan950">three languages</span>: English,
              Spanish, and Japanese. Infuse your website with the magical
              essence of Ghibli.
            </p>
            <br></br>
            <p>
              Plunge into our{" "}
              <span className="text-cyan950">extensive database</span> with all
              Ghibli films. Easily add synopses, directors, release dates, and
              more to your website.
            </p>
            <br></br>

            <p>Soar with Ghibli's imagination!</p>
          </div>
          <div className="right-6 relative xl:right-18 xl:bottom-2 w-100">

          <img src={mockup}></img>
          </div>
          
        </div>
      </section>
    </AosProvider>
  );
};

export default WhatAbout;
