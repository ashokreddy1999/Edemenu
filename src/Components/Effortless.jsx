import React from 'react';
import Mobile from '../assets/Mobile.png';

const EffortlessMenuCreation = () => {
  return (
    <div id="features">
    <div className="bg-black flex flex-col md:flex-row items-center justify-center h-screen p-4">
      {/* Container for both sections */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-center text-center md:text-left lg:items-center text-white space-y-4 md:space-y-6 p-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">Effortless Menu Creation</h2>
          <div className="flex flex-col items-center md:space-y-8 space-y-4 w-full">
            <Button text="100% Web based" />
            <Button text="Set up in 5 mins" />
            <Button text="No Technical skills Required" />
            <Button text="24 / 7 Support Team" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <img
            src={Mobile}
            alt="Effortless Menu Creation"
            className="rounded-lg shadow-lg max-w-xs md:max-w-md lg:max-w-lg h-64 lg:h-[500px]"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

const Button = ({ text }) => {
  return (
    <div className="w-full max-w-xs px-4 py-2 text-center text-white bg-gray-800 border border-yellow-500 rounded-full cursor-pointer md:text-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 ">
      {text}
    </div>
  
  );
};

export default EffortlessMenuCreation;
