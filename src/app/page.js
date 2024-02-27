"use client";
import Aboutus from "./components/Aboutus";
import DisplayCards from "./components/DisplayCards";
import Hero from "./components/Hero";
import Hotels from "./components/Hotels";
import OurServices from "./components/OurServices";
import Tours from "./components/Tours";
import Carousel from "./components/Slider";
import images from "./components/Data/images";
import Strip from "./components/Strip";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <DisplayCards /> */}
      <Strip />
      <Aboutus />
      <OurServices />
      <Tours />
      <Carousel />
      <Hotels />
    </main>
  );
}
