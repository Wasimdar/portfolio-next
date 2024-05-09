import React from "react";
import SlideShow from "./SlideShow";
import Projects from "../Projects/Projects";
import Skills from "./MySkills";



export default function Main() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 ">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-md p-4 md:p-6 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl hover:bg-opacity-0 transition duration-300"></div>
            <div className="transform hover:-translate-x-1 hover:-translate-y-1 transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                About Me
              </h2>
              <p className="">
                Welcome to my world! I&apos;m Wasim, a multifaceted Software
                Engineer with a zest for innovation and a penchant for
                problem-solving. Crafting digital wonders is not just my job,
                It&apos;s my passion. From elegant designs to seamless user
                experiences, I thrive on turning ideas into reality. Join me on
                this exhilarating journey where creativity knows no bounds and
                possibilities are endless. Together, let&apos;s shape the
                future, one pixel at a time!
              </p>
            </div>
          </div>

        <Skills/>

          <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 p-4 md:p-6 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl hover:bg-opacity-0 transition duration-300"></div>
            <div className="transform hover:-translate-x-1 hover:-translate-y-1 transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Education
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Bachelor's Degree in Computer Science
                </h3>
                <p className="text-white">Chandigrah Group of Colleges Landran, 2021 - 2024</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Web Dev Course 
                </h3>
                <p className="text-white"> NEXTJS & NESTJS , ongoing</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Certifications  Reactjs & Redux Toolkit , Nextjs
                </h3>
                <p className="text-white">
                   Source : Udemy.com
                </p>
              </div>
            </div>
          </div>

          <Projects
            id={0}
            name={""}
            html_url={""}
            fork={false}
            archived={false}
          />
     
        </div>
      </main>
      <SlideShow />
    </section>
  );
}
