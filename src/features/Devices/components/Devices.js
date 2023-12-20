import React, { useEffect, useState } from 'react';
import GadgetsData from '../json/Gadgets.json';
import UsesHeader from './DevicesHeader';

const Devices = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    setGadgets(GadgetsData);
  }, []);
  return (
    <>
      <UsesHeader />
      <div className="flex flex-wrap justify-evenly mt-10 mx-48 max-2xl:mx-48 max-xl:mx-32 max-lg:mx-8 max-md:mx-0">
        <head>
          <title>Shino's Devices</title>
        </head>
        {gadgets.map((gadget, index) => (
          <a href={gadget.url} key={index} className="w-80 my-5 hover:opacity-70 mx-4">
            <img src={gadget.image1} alt={gadget.name} className="rounded-3xl border-white dark:border-teal-700 border-2" loading="lazy"></img>
            <div className="mt-3 ml-2 text-black dark:text-dark duration-500">
              <span className="block text-2xl font-bold">{gadget.name}</span>
              <span className="block text-xl ml-2">{gadget.mini_description}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Devices;