import Header from "@/components/Header./Header";
import React from "react";
import image from "@/public/me.jpeg";
import Footer from "../Footer/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen text-white bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:order-2 w-full lg:w-1/2 p-2 lg:max-w-none m-10 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3  ">
            Wasim Ahmad dar
          </h1>
          <p className="text-lg mb-2 font-bold">Jammu And kashmir</p>
          <p className="text-lg mb-2 font-bold ">Software Developer</p>
          <p className="text-lg mb-3 ">
            Hey , I'm Wasim , and my journey into the world of software
            development has been nothing short of an adventure. It all started
            with a spark of curiosity and a love for problem-solving. Growing
            up, I was always the kid who loved tinkering with gadgets, figuring
            out how things worked, and diving into the world of computers. What
            began as a hobby soon turned into a passion as I delved deeper into
            the fascinating realm of coding and software development. I remember
            the thrill of writing my first lines of code, the satisfaction of
            seeing a project come to life, piece by piece. It was like unlocking
            a whole new world of possibilities, where the only limit was my
            imagination. What inspires me most is the power of technology to
            transform lives and make a positive impact on the world. Whether
            it's creating innovative solutions to real-world problems or simply
            making someone's life a little easier, the potential of software
            development never fails to amaze me. Now, as I continue on this
            journey, I'm driven by a desire to learn, grow, and make a
            difference. Every day brings new challenges and opportunities to
            push the boundaries of what's possible, and I couldn't be more
            excited to see where this path leads. So, that's a little glimpse
            into my story – a journey fueled by curiosity, passion, and a belief
            in the transformative power of technology. I'm grateful for every
            step of the adventure so far, and I can't wait to see what's next!
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 max-w-sm mb-5 lg:mb-0 mx-auto mt-14">
          <img
            src={image.src}
            alt="Your Photo"
            className="w-full filter grayscale hover:grayscale-0 transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
          />
          <div className=" absolute top-3 left-2 w-full h-full bg-gradient-to-b from-transparent via-black to-transparent opacity-50"></div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutPage;
