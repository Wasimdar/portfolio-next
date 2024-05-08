"use client";
import React, { useState, useEffect } from "react";

const imageUrls = [
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
  "https://t3.ftcdn.net/jpg/02/56/22/94/240_F_256229414_60bVi1yHUvD1lYuCu5avf1QhgeAIelFa.jpg",
  "https://t4.ftcdn.net/jpg/03/08/69/75/240_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div className="max-w-7xl rounded-md mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <div className="relative rounded-md overflow-hidden">
        
        <img
          className="h-64 sm:h-80 w-full rounded-md transition duration-500 ease-in-out hover:shadow-lg"
          src={imageUrls[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute rounded-md flex justify-between w-full bottom-40 pb-2">
        <button
          className="bg-gray-00 hover:bg-gray-400 p-2 sm:p-3 rounded-full"
          onClick={handlePrev}
        >
        </button>
        <button
          className="bg-gray-0 hover:bg-gray-400 p-1 sm:p-12 rounded-full"
          onClick={handleNext}
        >
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
