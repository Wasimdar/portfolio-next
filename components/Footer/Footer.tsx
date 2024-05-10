"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
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

          <Link href="https://twitter.com/darwaseem12">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-300 hover:text-white"
            />
          </Link>

          <Link href="https://www.facebook.com/dar.waseem.1272?mibextid=ZbWKwL">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-gray-300 hover:text-white"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/wasim-ahmad-dar-90aa63120?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-300 hover:text-white"
            />
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/dar_aaman?igsh=MTd0Mmdta2V6ZjUwMg=="
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-300 hover:text-white"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
