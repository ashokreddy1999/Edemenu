import React from 'react';
import NailSalon from '../assets/NailSalon.jpg';
import Beach from '../assets/Beach.jpg';
import Cosmetic from '../assets/Cosmetic.jpg';
import Spa from '../assets/Spa.jpg';
import Salon from '../assets/Salon.jpg';
import Food from '../assets/Food.jpg';
import Car from '../assets/Car.jpg';
import Tailerning from '../assets/Tailerning.jpg';
import Mech from '../assets/Mech.jpg';
import Background from '../assets/Background.png';

const MenuDigitalisation = () => {
  const services = [
    { name: "Nail Salon", img: NailSalon },
    { name: "Resort", img: Beach },
    { name: "Cosmetic Clinic", img: Cosmetic },
    { name: "Spa", img: Spa },
    { name: "Hair Salon", img: Salon },
    { name: "Eateries", img: Food },
    { name: "Car Mechanic", img: Car },
    { name: "Tailoring Boutique", img: Tailerning },
    { name: "Car Dealer", img: Mech },
  ];

  return (
    <div className="bg-white p-4">
      <div className="container mx-auto text-center">
        <br /> <br />
        <div
          className="mb-6 lg:bg-cover bg-center justify-center bg-contain"
          style={{
            backgroundImage: `url(${Background})`,
            padding: '20px 10px',
          }}
        >
          <h1 className="text-2xl md:text-5xl font-bold text-black">Every Menu deserves to be digitalized</h1>
          <p className="text-gray-700 font-semibold text-lg md:text-xl mt-4">
            We cater to every business, small / medium / big, dealing with products/
            <br className="hidden md:block" />
            services, present in single or multiple locations.
          </p>
        </div>
        <br /> <br /> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div key={service.name} className="text-center text-black text-xl md:text-2xl">
              <img 
                src={service.img} 
                alt={service.name} 
                className="mx-auto rounded-md h-[250px] md:h-[320px] w-full lg:w-[400px] px-1 py-1 md:w-44"
              />
              <p className="mt-2 p-2 md:p-4">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuDigitalisation;
