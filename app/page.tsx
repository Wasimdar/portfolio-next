import Header from "@/components/Header./Header";
import Image from "next/image";
import "./globals.css";
import Main from "@/components/Main/Main";
import SlideShow from "@/components/Main/SlideShow";
import Footer from "@/components/Footer/Footer";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <Header />

      <Skill />
      <Main />
      <Footer />
    </>
  );
}
