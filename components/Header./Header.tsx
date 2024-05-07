import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Nav />
      </div>
    </header>
  );
}
