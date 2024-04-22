import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex items-center justify-between px-4 lg:px-24 py-4 md:py-6 bg-[#0D0D0D] w-full relative">
      <div className="flex">
        <button className="menu md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        <Link
          to={"/"}
          className="inline-block relative top-2 lg:top-1 mr-16 ml-4 h-12"
        >
          <img src="./images/fleamint-logo.png" alt="fleamint logo" className="h-8 md:h-auto" />
        </Link>
      </div>

      <div
        className={`md:flex justify-between items-center w-full absolute top-full left-0 md:relative transition-all ${
          menuOpen ? "max-h-[800px]" : "max-h-0"
        } md:max-h-none overflow-hidden bg-[#000000] md:bg-[initial] shadow-lg md:shadow-none z-10`}
      >
        <div className="navigation flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-0">
          <Link to={"/"}>Home</Link>
          <Link to={"#"}>NFT Pass</Link>
          <Link to={"#"}>Marketplace</Link>
          <Link to={"#"}>DEX</Link>
          <Link to={"#"}>Community</Link>
          <Link to={"#"}>Venture</Link>
        </div>
        <div className="user-auth space-y-8 md:space-y-0 md:space-x-8 space-x-0 md:mt-0 p-4 md:p-0 hidden md:block">
          <button className="block md:inline-block">Log In</button>
          <button className="bg-emerald-400 px-8 py-2 rounded-md text-black font-semibold block md:inline-block w-full md:w-auto">
            Sign up
          </button>
        </div>
      </div>
      <div className="user-auth grid grid-cols-2 items-center">
          <button className="block md:inline-block">Log In</button>
          <button className="bg-emerald-400 px-4 py-2 rounded-md text-black font-semibold block md:inline-block w-full md:w-auto">
            Sign up
          </button>
        </div>
    </div>
  );
};
