import React from 'react';
import Iphone from '../assets/Iphone.png';

const HeroSection = () => {
  return (
    <div id="contact">

    <div className="bg-black py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-20 max-w-screen-xl"> {/* Adjusted padding for mobile */}
        {/* Hero Section */}
        <div className="bg-[#EEB045] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-center pt-8 md:pt-10 h-auto md:h-[400px]">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 p-4 md:p-8"> {/* Adjusted padding for mobile */}
            <h2 className="text-white text-3xl md:text-4xl font-semibold">
              Technology does not <br className="block md:hidden" /> differentiate, so do we!
            </h2>
            <br />
            <p className="text-white font-medium text-lg mb-6">
              ITSOURMENU is for everyone who feels the need for it. We can fit you in. You are important!
            </p>
            <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300">
              Let's Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={Iphone} alt="App Preview" className="w-3/4 md:w-2/3 max-w-xs md:max-w-sm" />
          </div>
        </div>
        {/* Footer Section */}
        <div className="mt-8 text-center text-gray-400">
          <div className='flex flex-wrap justify-center'>
            <h3 className='text-white'>
              Email: <a href="mailto:www.itOnMenu@gmail.com" className="text-gray-400 underline">www.itOnMenu@gmail.com</a>
              <span className='md:mx-2 hidden md:flex'></span>
              Phone: <span>+91 123456789</span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition duration-300">Terms of Use</a>
            <a href="#" className="hover:text-white transition duration-300">Features</a>
            <a href="#" className="hover:text-white transition duration-300">Templates</a>
            <a href="#" className="hover:text-white transition duration-300">Pricing</a>
            <a href="#" className="hover:text-white transition duration-300">Blog</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
