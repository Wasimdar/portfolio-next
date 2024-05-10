import Link from "next/link";
import React from "react";

export default function MenuBtn() {
  return (
    <div className="absolute top-4 left-0  w-full bg-gradient-to-r from-slate-900 to-slate-700 mt-12 py-2 rounded-md shadow-lg">
      <ul className="flex  flex-col space-y-3  items-center  ">
        <li>
          <Link
            className="group text-pink-600  transition-all duration-300 ease-in-out"
            href="/"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="group text-pink-600  transition-all duration-300 ease-in-out"
            href="/about"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="group text-pink-600  transition-all duration-300 ease-in-out"
            href="/Contact"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
