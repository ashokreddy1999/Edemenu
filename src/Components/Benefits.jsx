import React, { useState } from 'react';
import Businesss from "../assets/Businesss.png";
import Customer from "../assets/Customer.png";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Business');

  return (
    <div id="benefits">
    <div className="bg-black min-h-screen text-white p-6">
      <div className="container mx-auto">
        <br />
        <br />
        <br />
        <div className="flex justify-center mb-8">
          <button
            className={`lg:px-20 px-4 py-4 ${
              selectedTab === 'Business' ? 'bg-yellow-600' : 'bg-white text-black text-lg'
            }`}
            onClick={() => setSelectedTab('Business')}
          >
            Business
          </button>
          <button
            className={`lg:px-20 px-4 py-4 ${
              selectedTab === 'Customer' ? 'bg-yellow-600' : 'bg-white text-black text-lg'
            }`}
            onClick={() => setSelectedTab('Customer')}
          >
            Customer
          </button>
        </div>

        {selectedTab === 'Business' && (
          <div>
            <h2 className="text-center text-xl mb-4">
              The partner dashboard is your command centre.It is here the <br /> business operates and monitors customer interaction.
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-6">
              <div className="order-1 md:order-2 flex flex-col items-start md:items-start text-lg">
                <p className="mb-2">
                  <span className="font-bold text-yellow-500">A. Menu Management:</span> <br />
                  Create, manage, and customize your menu with just a few clicks. No tech expertise required. Stay current with instant updates.
                </p>
                <p className="mb-2">
                  <span className="font-bold text-yellow-500">B. Cross-selling, Up-selling = revenue:</span> <br />
                  Recommend items seamlessly, make it convenient to choose, optimize visibility, and see your sales rise.
                </p>
                <p className="mb-2">
                  <span className="font-bold text-yellow-500">C. Promotions and loyalty programs:</span> <br />
                  Introducing specials, deals, and offers can be done in minutes and have a greater reach with literally no additional cost.
                </p>
                <p className="mb-2">
                  <span className="font-bold text-yellow-500">D. Customer Data:</span> <br />
                  Your store, your menu, your customers. You own your customer data 100%. It’s not in our radar, but we give your data full security.
                </p>
                <p className="mb-2">
                  <span className="font-bold text-yellow-500">E. Actionable Analytics:</span> <br />
                  Gain valuable insights from customer data. Drive data-backed decisions and strategies for business growth. Explore hidden opportunities.
                </p>
              </div>
              <div className="order-2 md:order-1 flex justify-center items-center">
                <img src={Businesss} alt="Dashboard on Desktop" className="rounded-md h-[450px] md:w-[500px] w-full" />
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'Customer' && (
          <div>
            <h2 className="text-center text-xl mb-4">Digital menu - customer interaction point.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-6 text-lg">
              <div className="order-1 md:order-2 flex flex-col items-start md:items-start">
                <p className="mb-2">
                  <span className="font-bold text-yellow-500">A. User friendly Menu:</span>
                  Super easy to navigate through the menu with categories and visual appeal. Also, with the intuitive search and filter feature, browsing through the menu is convenient.
                </p>
                <p className="mb-2">
                  <span className="font-bold text-yellow-500">B. Real time menu:</span> <br />
                  View only the updated menu regarding availability, price, promotions, etc. No more outdated menu.
                </p>
                <p className="mb-2">
                  <span className="font-bold text-yellow-500">C. Reach out:</span> <br />
                  Call or message the business directly with just a click. Appointments, reservations, and even concerns made easy.
                </p>
                <p className="mb-2">
                  <span className="font-bold text-yellow-500">D. Seamless ordering and payments:</span> <br />
                  Hassle-free ordering and contactless payments from the comfort of their devices.
                </p>
              </div>
              <div className="order-2 md:order-1 flex justify-center items-center">
                <img src={Customer} alt="Digital Menu on Mobile" className="rounded-md h-[450px] md:w-[200px]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
