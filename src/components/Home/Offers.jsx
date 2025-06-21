import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Offers = () => {
  useGSAP(() => {
    if (window.innerWidth > 640) { // sm breakpoint in Tailwind
      gsap.to(".offers-cards", {
        x: "-52%",
        scrollTrigger: {
          trigger: ".offers",
          start: "top top", 
          end: "bottom top",
          scrub: true,
          pin: true,
          ease: "power4.inOut",
        },
      });

      gsap.to(".offers-image", {
        x: "25%",
        scrollTrigger: {
          trigger: ".offers",
          start: "top top",
          end: "bottom top", 
          scrub: 1,
          ease: "power4.inOut",
        },
      });
    }
  });

  const offerData = [
    {
      text: "Expert Mentorship",
      image:
        "/assets/images/hackathon-image.jpg",
    },
    {
      text: "Project-Based Learning",
      image: "https://i.pinimg.com/736x/17/ad/2c/17ad2c06296f4f4b92869278d0405d4f.jpg",
    },
    {
      text: "Interactive Courses",
      image:
        "/assets/images/mentorship.jpg",
    },
    {
      text: "Career Guidance",
      image:
        "/assets/images/career.jpg",
    },
  ];

  return (
    <div className="w-full py-[10vw] offers px-[2vw] sm:bg-gradient-to-b from-[#0C0C0C] via-[#17012f] to-[#05000a]">
      <div className="w-full flex flex-col sm:gap-[2.5vw] gap-[7vw] sm:px-[2vw] sm:py-[3vw] py-[10vw] bg-[#ffffff13] border border-[#ffffff13] rounded-[2vw]">
        <div className="w-full flex justify-between items-center px-[2vw]">
          <div className="flex sm:gap-[1vw] gap-[3vw] items-center">
            <Link to="/login">
              <h1 className="text-zinc-300 sm:text-[1vw] text-[3.2vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] rounded-full border sm:w-[5vw] text-center hover:border-zinc-500 border-zinc-300">
                Mentors
              </h1>
            </Link>

            <a href="https://woc.learnersarc.com/">
              <h1 className="text-zinc-300 sm:text-[1vw] text-[3.2vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] rounded-full border sm:w-[5vw] text-center hover:border-zinc-500 border-zinc-300">
                Courses
              </h1>
            </a>

            <a href="https://woc.learnersarc.com/">
              <h1 className="bg-zinc-300 hover:bg-zinc-200 text-zinc-900 sm:text-[1vw] text-[3.2vw] sm:px-[0.5vw] px-2 sm:py-[0.2vw] py-[0.5vw] rounded-full border sm:w-[5vw] text-center">
                Explore
              </h1>
            </a>
          </div>
          <h1 className="sm:text-[2.5vw] text-[5vw] text-zinc-300 font-sans font-medium">What we offer</h1>
        </div>

        <div className="w-full flex sm:overflow-hidden overflow-x-scroll">
          <div className="w-fit sm:h-[30vw] h-[72vw] flex sm:gap-[2vw] gap-[5vw] offers-cards pl-[10%] pb-[2vw]">
            {offerData.map((_, index) => (
              <div className="sm:w-[33vw] w-[80vw] h-full bg-zinc-900 rounded-[2vw] relative flex justify-center items-center overflow-hidden border border-indigo-900 shadow-indigo-900 shadow-sm hover:shadow-indigo-800 hover:shadow-md transition-all">
                <div className="h-full sm:w-[50vw] w-[125vw] absolute top-0 right-0 offers-image">
                  <img src={offerData[index].image} alt={offerData[index].text} className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/20 flex flex-col justify-between p-[1vw]">
                  <h1 className="text-zinc-100 sm:text-[2vw] text-[4vw]">
                    {offerData[index].text}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
