import React from "react";
import SlideShow from "./SlideShow";
import Projects from "../Projects/Projects";
import ProjectsPage from "../Projects/ProjectsPage";

export default function Main() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-purple-600">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-700">
              Welcome to my world! I&apos;m Wasim, a multifaceted Software
              Engineer with a zest for innovation and a penchant for
              problem-solving. Crafting digital wonders is not just my job,
              It&apos;s my passion. From elegant designs to seamless user
              experiences, I thrive on turning ideas into reality. Join me on
              this exhilarating journey where creativity knows no bounds and
              possibilities are endless. Together, let&apos;s shape the future,
              one pixel at a time!
            </p>
          </div>
          <Projects id={0} name={""} html_url={""} fork={false} archived={false} />
          <ProjectsPage/>
        </div>
      </main>
      <SlideShow />
    </section>
  );
}
