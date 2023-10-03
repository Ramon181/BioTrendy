import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Car, Hamburger } from "../../../utils/svg/Svg";

Modal.setAppElement("#root");

const NavBar = () => {
  const [hamburg, setHamburg] = useState(false);

  return (
    <nav className="flex items-center w-full flex-wrap justify-between bg-[#1f1f1f] py-4">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2  border-gray-300  lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-[#fefefe] text-3xl tracking-tight">
            Logo
          </span>
        </div>
        <div className="flex flex-row space-x-4 items-center lg:hidden ">
          <div className="ml-2 lg:ml-4 relative">
            <a
              className="flex items-center text-white hover:text-gray-200"
              href="#"
            >
              <div className="absolute text-[10px] -top-2 -right-2 z-10 bg-yellow-400 text-xs font-bold px-[2px] py-[0px] rounded-sm">
                0
              </div>
              <Car />
            </a>
          </div>
          <button
            onClick={() => {
              if (hamburg === false) {
                setHamburg(true);
              } else {
                setHamburg(false);
              }
            }}
            id="nav"
            className="flex items-center rounded text-white hover:text-gray-200"
          >
            <Hamburger/>
          </button>
        </div>
      </div>

      <div className="flex flex-row space-x-6 items-center px-8">
        <div className="lg:block text-white hidden space-x-6">
          
          <Link
            to="/products"
            href="#responsive-header"
            className="font-semibold font-heading space-x-12 hover:text-gray-200"
          >
            Articles
          </Link>
        </div>
        <div className="ml-2 hidden lg:flex lg:ml-4 relative">
          <a
            className="flex items-center text-white hover:text-gray-200"
            href="#"
          >
            <div className="absolute text-[10px] -top-2 -right-2 z-10 bg-yellow-400 text-xs font-bold px-[2px] py-[0px] rounded-sm">
              0
            </div>
            <Car />
          </a>
        </div>
        <div className="lg:flex hidden mt-auto space-x-1">
          <button
            onClick={() => setLoginModal(true)}
            className="block px-4 py-1 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-sm"
          >
            Sign in
          </button>

          <button
            onClick={() => setRegisterModal(true)}
            className="block px-4 py-1 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-sm"
          >
            Sign up
          </button>
        </div>
      </div>

      {hamburg === true ? (
        <div className="menu lg:hidden w-full flex flex-col mx-auto">
          <div className="text-md font-bold flex flex-col justify-center items-center text-white">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white px-4 py-2 rounded hover:bg-gray-500 mr-2"
            >
              Menu 1
            </a>
            <a
              href="#responsive-header"
              className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-gray-500 mr-2"
            >
              Menu 2
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-gray-500 mr-2"
            >
              Menu 3
            </a>
          </div>
          <div className="flex text-white justify-end">
            <a
              href="#!"
              className="block text-md px-4 py-2 rounded ml-2 font-bold hover:text-white mt-4 hover:bg-gray-500 lg:mt-0"
            >
              Sign in
            </a>

            <a
              href="#!"
              className=" block text-md px-4 mr-2 py-2 rounded font-bold hover:text-white mt-4 hover:bg-gray-500 lg:mt-0"
            >
              login
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
