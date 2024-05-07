"use client";
import React from "react";

const Skill = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          <div className="md:w-1/2 flex-shrink-0">
            <img
              src="https://ca.slack-edge.com/T065K99BM-U06GF04PYLF-a227f0f83335-512"
              alt="Personal Photo"
              className="w-64 h-64 rounded-full shadow-lg animate-float"
            />
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
