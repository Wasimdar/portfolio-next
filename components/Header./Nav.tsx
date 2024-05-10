"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuBtn from "./MenuBtn";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);

  function menuHandler() {
    setIsMenu(!isMenu);
  }

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-white text-2xl font-bold flex items-center"
            >
              <h1 className="flex-none cursor-pointer text-2xl text-white mr-1">
                <span className="text-yellow-300">Wa</span>sim
              </h1>
              <span className="text-white">Ah</span>
              <span className="text-yellow-300">mad</span>
            </Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={menuHandler}
              className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md focus:outline-none  focus:ring-offset-1 focus:ring-"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {isMenu && <MenuBtn />}

          <div className="hidden md:block">
            <div className="ml-10 flex  items-baseline space-x-4">
              <Link
                href="/"
                className="relative after:bg-pink-500 text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-pink-500"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="relative after:bg-pink-500 text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-pink-500"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="relative after:bg-pink-500 text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-pink-500"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
