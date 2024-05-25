import React from 'react';
import Background from '../assets/Background.png';

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-cent bg-contain"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <br />
      <h1 className="text-2xl font-semibold sm:text-3xl lg:text-5xl text-center tracking-wide text-white mt-6 lg:mt-12">
        Make your menu <br /> interactive, easy, empowering!
      </h1>
      <br />
      <p className="mt-6 md:text-xl text-center text-white max-w-4xl">
        With your digital menu, connect with your customers directly,<br /> one to one.  Even on a mobile phone.
      </p>
      <br /> <br />
      <div className="mt-4 lg:mt-6">
        <button className="rounded-full text-lg lg:text-xl bg-orange-300 text-black py-3 lg:py-4 px-6 lg:px-8 cursor-pointer hover:bg-black hover:text-white">
          Get Smart! Get Handy! Get ITSONMENU
        </button>
      </div>
    </div>
  );
};

export default Hero;