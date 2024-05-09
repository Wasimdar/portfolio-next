import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-700  flex items-center justify-center">
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
        <div className="mt-2 flex p-10 justify-center space-x-12">
          <FontAwesomeIcon icon={faTwitter} className="text-gray-300 hover:text-white" />
          <FontAwesomeIcon icon={faFacebook} className="text-gray-300 hover:text-white" />
          <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 hover:text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
