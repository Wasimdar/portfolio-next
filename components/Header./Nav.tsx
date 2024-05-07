import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-200 to-purple-600">
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
            <button className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
              Menu
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
