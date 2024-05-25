import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import Vector from '../assets/Vector.svg';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setMobileDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileDrawerOpen]);

  return (
    <nav className="sticky bg-white top-0 z-50 py- backdrop-blur-lg border-b border-neutral-700/80 rounded-none md:rounded-[50px] md:mt-4 md:mx-20 px-1 py-3">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex item-center flex-shrink-0">
            <img className="h-14 w-19 mr-2" src={Vector} alt="" />
          </div>
          <ul className="hidden lg:flex ml-auto mr-9 space-x-12 text-black cursor-pointer">
            <li className="hover:text-blue-800 transition duration-300"><Link smooth to="#how">How</Link></li>
            <li className="hover:text-blue-800 transition duration-300"><Link smooth to="#features">Features</Link></li>
            <li className="hover:text-blue-800 transition duration-300"><Link smooth to="#benefits">Benefits</Link></li>
            <li className="hover:text-blue-800 transition duration-300"><Link smooth to="#contact">Contact</Link></li>
          </ul>
          <div className="hidden lg:flex justify-center">
            <a href="#" className="flex bg-[#EEB045] py-3 px-3 rounded-[50px] hover:bg-black">
              Get Started
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X color="black" /> : <Menu color="black" />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div ref={drawerRef} className="fixed right-0 z-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center gap-6 lg:hidden rounded-lg">
            <ul className="grid gap-6 justify-center">
              <li className="cursor-pointer text-center"><Link smooth to="#how">How</Link></li>
              <li className="cursor-pointer text-center"><Link smooth to="#features">Features</Link></li>
              <li className="cursor-pointer text-center"><Link smooth to="#benefits">Benefits</Link></li>
              <li className="cursor-pointer text-center"><Link smooth to="#contact">Contact</Link></li>
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 rounded-[50px] bg-[#EEB045] hover:bg-black">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
