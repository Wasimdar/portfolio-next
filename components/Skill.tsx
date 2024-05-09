"use client";
import React from "react";

const Skill = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-fuchsia-600 to-neutral-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          <div className="md:w-1/2 flex-shrink-0">
            <div className="h-40 w-40 relative cursor-pointer mb-5">
              <div className="absolute inset-1 bg-white opacity-35 rounded-lg shadow-8xl"></div>
              <div className="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
                <img
                  src="https://ca.slack-edge.com/T065K99BM-U06GF04PYLF-a227f0f83335-512"
                  alt="Personal Photo"
                  className="w-full h-full rounded-2 animate-float absolute inset-0 transform hover:rotate-45 hover:shadow-lg transition duration-300"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-4 animate-bounce">
              Hi, <span className="text-green-400">I&rsquo;m</span>{" "}
              <span className="text-white">
                Wa
                <span className="text-yellow-300">si</span>m
              </span>{" "}
              <span className="text-yellow-300">Ahmad</span>
            </h1>
            <p className="text-lg text-white mb-6 animate-pulse ">
              <span className="text-yellow-300">Full</span> Stack{" "}
              <span className="text-yellow-300">Web</span> Developer
            </p>
            <p className="text-lg text-white animate-pulse">
              <span className="text-yellow-300">Wel</span>come to{" "}
              <span className="text-yellow-300">my</span>{" "}
              <span className="text-white">portfolio!</span>
              {"  "}
              <span className="text-yellow-300">I specialize</span> in building{" "}
              <span className="text-yellow-300">modern</span> and{" "}
              <span className="text-white">responsive</span>{" "}
              <span className="text-yellow-300">Full Stack </span> web{" "}
              <span className="text-yellow-300">applications</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
