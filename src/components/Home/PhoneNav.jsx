import React, { useState } from 'react'
import { Link } from "react-router-dom";

const PhoneNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="sm:hidden">
            <button className="text-[5vw] -rotate-90 font-['Merienda'] w-fit h-fit leading-0 border-b text-zinc-400"
            onClick={toggleNav}>
        Browse.
      </button>
      {isOpen && (
        <div className="w-full h-screen bg-[#000000bc] fixed top-0 left-0 z-50 backdrop-blur-lg flex flex-col gap-7 justify-center items-center text-zinc-300">
        <Link to="/">
          <h1 className="text-xl text-zinc-400">Home</h1>
        </Link>
        <Link to="/connect-us">
          <h1 className="text-xl">Connect</h1>
        </Link>
        <a href="https://woc.learnersarc.com/">
          <h1 className="text-xl">WOC</h1>
        </a>
        <Link to="/login">
          <h1 className="text-xl">More</h1>
        </Link>

        <button className='font-sans font-light text-2xl absolute top-5 right-7 rounded-full border border-zinc-300 px-3 pb-2 pt-1 leading-none' onClick={toggleNav}>x</button>
      </div>
      )}
    </nav>
  );
};

export default PhoneNav