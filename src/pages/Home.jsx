import { useEffect, useState } from "react"; // Import React hooks
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Using react-router for navigation
import LocomotiveScroll from "locomotive-scroll";
import Hero from "../components/Home/Hero";
import Offers from "../components/Home/Offers";
import Cards from "../components/Home/Cards";
import Footer from "../components/footer/Footer";
import Detail from "../components/Home/Detail";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const inlineStyle = {
    backgroundColor: "#281938", // Solid black background
    opacity: 1, // Fully opaque
    backgroundImage: `
      repeating-radial-gradient(circle at 0 0, transparent 0%, #1A1A1D 40px),
      repeating-linear-gradient(#000000, #864AF9, #000000)
    `,
    backgroundBlendMode: "multiply",
  };

  return (
    <main
      className={`min-h-screen font-['Satoshi-Medium'] text-zinc-100 transition-all relative ${
        isLoading && "overflow-hidden h-screen"
      }`}
    >
      <div
        className="fixed top-0 left-0 w-full h-screen bg-zinc-900 z-[-1]"
        style={inlineStyle}
      ></div>
      <Hero />

      <Offers />

      <Detail />

      <Cards />



      <Footer />
    </main>
  );
}
