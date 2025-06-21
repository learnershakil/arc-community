import React from "react";

const Footer = () => {
  const navigation = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "WOC", link: "/" },
    { name: "Mentors", link: "/" },
  ];

  const socials = [
    { name: "Instagram", link: "/" },
    { name: "LinkedIn", link: "/" },
    { name: "Twitter", link: "/" },
    { name: "Youtube", link: "/" },
  ];

  const resources = [
    { name: "Blog", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Terms of Service", link: "/" },
    { name: "Privacy Policy", link: "/" },
  ];

  return (
    <div className="w-full sm:h-[35vw] h-[60vw] bg-zinc-950  flex flex-col sm:gap-[2vw] gap-[5vw] items-center py-[2vw] font-sans mt-[10vh] sm:pt-[10vh] pt-[5vh] sm:pb-[10vh] pb-[2vw]">
      <div className="w-full relative bottom-[15vh] bg-zinc-950 pt-[5vw]" data-scroll data-scroll-speed="0.2">
      <div className="w-full leading-none flex flex-col items-center pb-[5vw]">
        <p className="sm:text-[1.2vw] text-[2vw] text-zinc-400 gap-0">
          We're here to help with any questions or concerns.
        </p>
        <h1 className="sm:text-[7vw] text-[12vw] font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200  via-indigo-400 to-zinc-300 font-sans">
          Discover <span className="">More</span>
        </h1>
      </div>

      <div className="w-full flex sm:flex-row flex-col-reverse justify-between gap-[2vw] px-[7vw]">
        <div className="w-full flex flex-col gap-[1vw]">
          <h1 className="sm:text-[2vw] text-[3.5vw] font-medium text-zinc-400 w-full border-b border-zinc-500">
            Navigation
          </h1>
          <div className="flex sm:flex-col flex-row sm:justify-normal justify-between gap-[1vw]">
          {navigation.map((item) => (
            <p className="sm:text-[1.2vw] text-[2vw] text-zinc-400 hover:text-zinc-400/80">
              {item.name}
            </p>
          ))}
          </div>
        </div>

        <div className="w-full flex gap-[2vw]">
          <div className="w-full flex flex-col gap-[1vw]">
            <h1 className="sm:text-[2vw] text-[3.5vw] font-medium text-zinc-400 border-b border-zinc-500">
              Socials
            </h1>
            {socials.map((item) => (
              <p className="sm:text-[1.2vw] text-[2vw] text-zinc-400 hover:text-zinc-400/80">
                {item.name}
              </p>
            ))}
          </div>

          <div className="w-full flex flex-col gap-[1vw]">
            <h1 className="sm:text-[2vw] text-[3.5vw] font-medium text-zinc-400 border-b border-zinc-500">
              Resources
            </h1>
            {resources.map((item) => (
              <p className="sm:text-[1.2vw] text-[2vw] text-zinc-400 hover:text-zinc-400/80">
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
