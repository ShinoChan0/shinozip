import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <div>
      <input type="checkbox" className="hidden peer" id="darkmode" checked={darkMode} onChange={toggleDarkMode} />
      <label htmlFor="darkmode" className="w-22 max-sm:w-18 h-12 max-sm:h-10 relative block bg-white opacity-60 shadow-black shadow-md rounded-full cursor-pointer after:w-10 after:h-10 after:max-sm:w-8 after:max-sm:h-8 after:absolute after:top-1 after:left-1 after:bg-orange-300 after:rounded-full peer-checked:after:dark:translate-x-full peer-checked:after:dark:bg-cyan-400 after:duration-500">
        <svg className="h-8 max-sm:h-7 w-8 max-sm:w-7 absolute z-10 top-2 max-sm:top-1.5 left-2 max-sm:left-1.5 stroke-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg className="h-8 max-sm:h-7 w-8 max-sm:w-7 absolute z-10 top-2 max-sm:top-1.5 right-2 max-sm:right-1.5 stroke-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </label>
    </div>
  );
};

export default ThemeSwitcher;