import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Detail = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        ".title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,

          scrollTrigger: {
            trigger: ".title",
            start: "top 80%",
            scrub: 2,
          },
        }
      );

      // Paragraph Animation
      gsap.fromTo(
        ".description",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".description",
            start: "top 80%",
            scrub: 2,
          },
        }
      );

      gsap.to(".image", {
        scale: 1.25,
        duration: 1,
        scrollTrigger: {
          trigger: ".image",
          start: "top 80%",
          scrub: 2,
          ease: "power2.inOut",
        },
      });

      // Boxes Animation
      gsap.fromTo(
        ".box ",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".box-container",
            start: "top bottom",
            scrub: 2,
            end: "center bottom",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full sm:min-h-screen bg-black flex flex-col items-center font-sans sm:gap-20 gap-10 sm:pb-[10vw] sm:mb-0 mb-[30vw] pt-[2vw]"
      ref={containerRef}
    >
      <div className="flex flex-col justify-center items-center border-b border-zinc-400 sm:pb-11 pb-7">
        <h2 className="text-sm opacity-80 title">
          Unlocking Your Full Potential
        </h2>
        <h1 className="text-white sm:text-6xl text-4xl font-semibold sm:w-[500px] w-[300px] text-center font-['Merienda'] leading sm:pb-11 pb-7 pt-2 title">
          Where Learning Comes Alive
        </h1>
        <p className="text-white sm:text-sm text-xs sm:w-[400px] w-[250px] text-center description">
          We blend expert mentorship with innovative methods to create a unique
          learning experience.
        </p>
      </div>

      <div className="w-full sm:h-[30vw] h-[50vw] flex justify-center items-end gap-[2vw] sm:px-[10vw] px-[5vw] box-container">
        <div className="w-full h-full flex flex-col gap-[1vw]">
          <div className="w-full sm:h-[20vw] h-[30vw] bg-[#F0BB78] box overflow-hidden rounded-[2vw] border-[#ffffff48] border">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/736x/7c/2b/ac/7c2bacf83a09e8390eb6802a57d22c88.jpg"
              alt=""
            />
          </div>
          <div className="w-full sm:h-[15vw] h-[20vw] bg-white box overflow-hidden rounded-[2vw] border-[#ffffff48] border">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/736x/79/51/ed/7951ed6e9d1117efecda846b6640f72d.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-full sm:h-[20vw] h-[30vw] flex flex-col box bg-zinc-300 rounded-t-[2vw]">
          <div className="w-full h-[200%] absolute bottom-0 left-0 overflow-hidden border-[#ffffff48] border-b">
            <img
              className="h-full w-full object-cover image"
              src="/assets/images/CseStudent.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col-reverse gap-[1vw]">
          <div className="w-full sm:h-[20vw] h-[30vw] bg-zinc-500 box overflow-hidden rounded-[2vw] border-[#ffffff48] border">
            <img
              className="w-full h-full object-cover object-top"
              src="https://i.pinimg.com/736x/92/43/4e/92434ebfb9fbcf049ccd547e60ee96a8.jpg"
              alt=""
            />
          </div>
          <div className="w-full sm:h-[15vw] h-[20vw] border-[#ffffff48] border bg-[#ffffff49] box rounded-[2vw] overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/736x/82/09/32/82093246416732131abebcefeb36c3d2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
