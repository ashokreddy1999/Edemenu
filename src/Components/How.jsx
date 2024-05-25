import React from 'react';
import { ArrowRight, FileText, QrCode } from 'lucide-react';

const ThreeStepProcess = () => {
  return (
    <div id="how">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[hsla(38,83%,60%,1)] flex flex-col justify-center items-center lg:items-center md:justify-center md:items-start p-5 md:p-10">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-4">How ?</h2> <br/>
        <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center md:text-center">Simple quick 3 step process</h1>
      </div>
      <div className="relative flex flex-col justify-center items-center p-8 md:pl-32 bg-white">
        <div className="flex items-center mb-5 w-full relative">
          <div className="bg-[#FAF3E6] w-10 h-10 flex items-center justify-center rounded-full text-black mr-4">1</div>
          <div className="bg-[#FAF3E6] flex items-center p-4 md:p-12 rounded-[30px] shadow-md w-full md:w-80 border-2 border-[#F0D5A8]">
            <ArrowRight className="text-[#D9A769] mr-2" />
            <span className="text-black text-lg md:text-xl">Sign up</span>
          </div>
          {/* Timeline between steps 1 to 2 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:left-5 top-20 -bottom-20 w-0.5 bg-[#F8D9DA]"></div>
        </div>
        <div className="flex items-center mb-4 w-full relative">
          <div className="bg-[#FFEDED] w-10 h-10 flex items-center justify-center rounded-full text-black mr-4">2</div>
          <div className="bg-[#FFEDED] flex items-center p-4 md:p-12 rounded-[30px] shadow-md w-full md:w-80 border-2 border-[#FFA1A1]">
            <FileText className="text-[#FF6B6B] mr-2" />
            <span className="text-black text-lg md:text-xl">Create Menu</span>
          </div>
          {/* Timeline between steps 2 to 3 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:left-5 top-20 -bottom-20 w-0.5 bg-[#F8D9DA]"></div>
        </div>
        <div className="flex items-center w-full relative">
          <div className="bg-[#FFEDED] w-10 h-10 flex items-center justify-center rounded-full text-black mr-4">3</div>
          <div className="bg-[#E6F7F0] flex items-center p-4 md:p-12 rounded-[30px] shadow-md w-full md:w-80 border-2 border-[#B2E3D1]">
            <QrCode className="text-[#33A69C] mr-2" />
            <span className="text-black text-lg md:text-xl">Generate QR code</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ThreeStepProcess;
