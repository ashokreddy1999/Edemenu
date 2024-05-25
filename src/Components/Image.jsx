import React from 'react';
import Phone from '../assets/Phone.jpg';

const Image = () => {
  return (
    <div className="flex justify-center items-center h-full pt-10">
      <img src={Phone} alt="Phone displaying menu" className="max-h-[100%] max-w-[100%]" />
    </div>
  );
};

export default Image;
