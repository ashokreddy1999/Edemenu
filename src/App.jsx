import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import How from './Components/How';
import Effortless from './Components/Effortless';
import Menu from './Components/Menu';
import Benefits from './Components/Benefits';
import Footer from './Components/Footer';
import Image from './Components/Image';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Hero />
            <Image />
            <How />
            <Effortless />
            <Menu />
            <Benefits />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
