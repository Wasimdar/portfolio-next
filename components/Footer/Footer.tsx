import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Projects
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </nav>
        <div className="mt-6 text-center text-gray-300">
          © {new Date().getFullYear()} Wasim . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
