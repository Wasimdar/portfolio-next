"use client";
import React from "react";
import Image from "next/image";

const Skill = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          <div className="md:w-1/2 flex-shrink-0">
            <Image
              src="https://ca.slack-edge.com/T065K99BM-U06GF04PYLF-a227f0f83335-512" // Replace with your own photo
              alt="Personal Photo"
              className="w-64 h-64 rounded-full shadow-lg animate-float"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-4 animate-bounce">
              Hi, I&apos;m Wasim Ahmad
            </h1>
            <p className="text-lg text-white mb-6 animate-pulse">
              Full Stack Web Developer
            </p>
            <p className="text-lg text-white animate-pulse">
              Welcome to my portfolio! I specialize in building modern and
              responsive Full Stack web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
