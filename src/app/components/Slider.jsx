"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
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
      ))}
    </div>
  );
}

export default Carousel;
