import React from "react";
import { useState,useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import loadmatchLogo from '../../assets/Frame.png'
const Header = () => {
  const [active, setActive] = useState(true);
  const [mobileView, setMobileView] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState("top")

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  const controlNavbar = () => {
    // console.log({lastScrollY,scrollY:window.scrollY});
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY && !mobileView) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);



  return (
    <header className={` header fixed z-[10]  top-0 h-[66px] left-0 right-0 transition-all duration-200 ease-in-out ${show}`}>
      <div className="flex justify-between px-4 md:px-8 items-center max-w-full w-full h-full">
        {/* <img
          alt="FR8"
          src="https://www.fr8.in/_next/image?url=%2Fimages%2Ffr8-white.png&w=256&q=75"
          width="200"
          height="200"
          decoding="async"
          data-nimg="1"
          className="w-12 md:w-14 mx-4"
          loading="lazy"
          style={{ color: "transparent" }}
        /> */}
        <div className="flex items-center">
        <img
          alt="FR8"
          src={loadmatchLogo}
          width="200"
          height="200"
          decoding="async"
          data-nimg="1"
          className="w-8 md:w-10 ml-4 mr-2"
          loading="lazy"
          style={{ color: "transparent" }}
        />
        <span className="md:text-xl font-bold text-white">LOADMATCH</span>
        </div>


        <nav className="flex gap-6 md:mx-6 items-center">
          <ul
            className={`navLinks flex md:gap-6 max-lg:absolute max-lg:flex-col max-lg:bg-blue-800 max-lg:w-64 max-lg:top-0 max-lg:h-screen transition-all ${
              mobileView ? "max-lg:translate-x-0 " : "max-lg:translate-x-full "
            }`}
          >
            <div className="relative w-full mb-4 max-md:-translate-x-10 -translate-y-2 lg:hidden ">
              <button
                onClick={() => {
                  console.log("clciked close")
                  setMobileView(false);
                }}
                className="absolute right-0 m-4 rounded-full bg-black bg-opacity-10"
              >
                
                <IoClose className="text-white text-3xl" />
              </button>
            </div>
            <li class="nav-item font-semibold  lg:px-1 inline-block w-full lg:w-auto lg:border-0 border-b border-blue-900 lg:rounded-md relative ">
              <span
                target="_self"
                className={`text-white inline-block w-full px-6 lg:px-2 py-3 lg:py-2 cursor-pointer md:${
                  active
                    ? "after:content-[''] after:bg-[#34CCFF] after:w-11/12 after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-0 after:h-1 after:rounded-md after:invisible hover:after:visible after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:ease-in-out before:content-[''] before:bg-[#34CCFF] before:w-full before:absolute before:left-0 before:right-0 before:mx-auto before:bottom-0 before:h-1 before:rounded-md before:scale-100"
                    : ""
                }`}
                href="/"
              >
                Home
              </span>
            </li>

            <li class="nav-item font-semibold  lg:px-1 inline-block w-full lg:w-auto lg:border-0 border-b border-blue-900 lg:rounded-md relative ">
              <span class=" text-white inline-block w-full px-6 lg:px-2 py-3 lg:py-2 cursor-pointer after:content-[''] after:bg-[#34CCFF] after:w-11/12 after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-0 after:h-1 after:rounded-md after:invisible hover:after:visible after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:ease-in-out  max-lg:after:origin-left ">
                Benefits
              </span>
            </li>
            <li class="nav-item font-semibold  lg:px-1 inline-block w-full lg:w-auto lg:border-0 border-b border-blue-900 lg:rounded-md relative ">
              <span class=" text-white inline-block w-full px-6 lg:px-2 py-3 lg:py-2 cursor-pointer after:content-[''] after:bg-[#34CCFF] after:w-11/12 after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-0 after:h-1 after:rounded-md after:invisible hover:after:visible after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:ease-in-out  max-lg:after:origin-left">
                Services
              </span>
            </li>
            <li class="nav-item font-semibold  lg:px-1 inline-block w-full lg:w-auto lg:border-0 border-b border-blue-900 lg:rounded-md relative ">
              <span class=" text-white inline-block w-full px-6 lg:px-2 py-3 lg:py-2 cursor-pointer after:content-[''] after:bg-[#34CCFF] after:w-11/12 after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-0 after:h-1 after:rounded-md after:invisible hover:after:visible after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:ease-in-out  max-lg:after:origin-left">
                About
              </span>
            </li>
          </ul>

          <button className="bg-white mx-3 px-4 py-2 text-sm font-semibold  rounded-full hover:bg-blue-600 hover:text-white transition-all text-blue-600">
            TRUCK RATES
          </button>
          <button
            onClick={() => {
              setMobileView(true);
            }}
            className={`cursor-pointer hidden max-lg:block ${
              !mobileView ? "hidden" : "block"
            }`}
          >
            {" "}
            <IoMenu className="text-white text-3xl" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
