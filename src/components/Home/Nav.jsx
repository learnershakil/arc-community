import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Nav = () => {
    const [navMenu, setNavMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState(""); // To track which form to show

  const openModal = (type) => {
    setFormType(type); // Set form type to either "login" or "signup"
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };
  return (
    <nav className="sm:flex hidden w-full justify-between items-center h-fit">
          <div className={`flex gap-[1vw] items-start h-fit relative z-40`}>
            <button
              className={`hover:text-zinc-300 h-fit ${
                navMenu ? "text-zinc-900" : ""
              }`}
              onClick={toggleNavMenu}
            >
              {navMenu ? (
                <XMarkIcon className="sm:w-[2vw] w-[5vw] text-zinc-900" />
              ) : (
                <Bars3Icon className="sm:w-[2vw] w-[5vw] text-zinc-100" />
              )}
            </button>
            {navMenu && (
              <div className="flex flex-col gap-[0.5vw] absolute left-[5vw]">
                <Link to="/">
                  <h1 className="text-zinc-900 hover:text-zinc-600 sm:text-[1.5vw] text-[2.25vw] hover:scale-105 relative sm:left-0 left-[1.5vw] rotate-[18deg]">
                    Home
                  </h1>
                </Link>
                <Link to="/connect-us">
                  <h1 className="text-zinc-900 hover:text-zinc-600 sm:text-[1.5vw] text-[2.25vw] hover:scale-105 relative sm:right-[1.4vw] rotate-[35deg]">
                    Connect
                  </h1>
                </Link>
                <a href="https://woc.learnersarc.com/">
                  <h1 className="text-zinc-900 hover:text-zinc-600 sm:text-[1.5vw] text-[2.25vw] hover:scale-105 relative sm:right-[3.5vw] right-[2.1vw] bottom-[0.5vw] rotate-[52deg]">
                    WOC
                  </h1>
                </a>
                <Link to="/login">
                  <h1 className="text-zinc-900 hover:text-zinc-600 sm:text-[1.5vw] text-[2.25vw] hover:scale-105 relative sm:right-[6vw] right-[6vw] sm:bottom-[1.8vw] bottom-[2vw] rotate-[69deg]">
                    More
                  </h1>
                </Link>
              </div>
            )}
          </div>

          <motion.div
            animate={{ scale: navMenu ? 1 : 0 }}
            className="absolute top-[-7vw] left-[-7vw] bg-zinc-100 sm:w-[20vw] w-[25vw] sm:h-[20vw] h-[25vw] rounded-full"
          ></motion.div>

          <div className="flex sm:gap-[1vw] gap-[2vw]">
            {/* <Link to="/login">
              <h1 className="text-zinc-100 hover:text-zinc-300 sm:text-[1vw] text-[3vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] rounded-full border sm:w-[4.5vw] text-center hover:border-zinc-300">
                LogIn
              </h1>
            </Link> */}

            {/* <Link onClick={() => openModal("login")}>
              <h1 className="text-zinc-100 hover:text-zinc-300 sm:text-[1vw] text-[3vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] rounded-full border sm:w-[4.5vw] text-center hover:border-zinc-300">
                LogIn
              </h1>
            </Link> */}

            {/* 
            <Link onClick={() => openModal("signup")}>
              <h1 className="text-zinc-900 hover:text-zinc-950 hover:bg-zinc-300 sm:text-[1vw] text-[3vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] bg-zinc-100 rounded-full border sm:w-[4.5vw] text-center">
                SignIn
              </h1>
            </Link> */}
          </div>
        </nav>
  )
}

export default Nav