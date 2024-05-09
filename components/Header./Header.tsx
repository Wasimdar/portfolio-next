import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="max-w-15xl mx-auto px-4 sm:px-6 lg:px-8">
        <Nav />
      </div>
    </header>
  );
}
