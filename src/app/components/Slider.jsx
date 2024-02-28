"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/slider5.jpg",
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[100vw] h-[100vh] flex justify-center items-center">
      {images.map((img, index) => {
        return (
          <Image
            src={img}
            height={200}
            width={1000}
            style={{
              width: "80vw",
              height: "500px",
              objectFit: "cover",
            }}
            alt="kaaz"
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            } `}
          />
        );
      })}
      {/* {images.map((image, index) => (
        <Image
          width={600}
          height={300}
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))} */}
    </div>
  );
}

export default Carousel;
