import { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

export default function AppTheme() {

    const savedDarkMode = localStorage.getItem('darkmode') === 'true';

    const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

    useEffect(() => {
      const body = document.body;
      body.classList.add('transition-colors', 'duration-300', 'ease-in-out');
      if (isDarkMode) {
        body.classList.add('dark', 'bg-gray-900');
        body.classList.remove('bg-white');
        body.setAttribute('data-theme', 'dark');
      } else {
        body.classList.remove('dark', 'bg-gray-900');
        body.classList.add('bg-white');
        body.setAttribute('data-theme', 'light');
      }
      localStorage.setItem('darkmode', isDarkMode);
    }, [isDarkMode]);


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className='dark_mode'>

             <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="focus:outline-none bg-transparent text-white p-3 transition"
      >
        {isDarkMode ? (
          <BsFillSunFill className="w-5 h-5 dark:text-yellow-400 dark:hover:text-yellow-200 cursor-pointer duration-200" />
        ) : (
          <FaMoon className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer duration-200" />
        )}
      </button>
        </div>
    )
}
