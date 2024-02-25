import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/about.jpg";
import AboutImage2 from "../../../public/aboutus2.jpg"
import { useRouter } from "next/navigation";

export default function Aboutus() {
  const router = useRouter()
  return (
    <div class="flex justify-around items-center bg-[#063c49] h-screen max-[600px]:block max-[600px]: max-[600px]:text-left max-[600px]:p-1">
      <div className="relative">
      <Image
        src={AboutImage}
        alt="kashmir-pic"
        width={500}
        height={400}
        loading="lazy"
        className="max-[600px]:w-full rounded-xl z-0"
      />
      <Image
        src={AboutImage2}
        alt="kashmir-pic"
        width={250}
        height={250}
        loading="lazy"
        className="max-[600px]:w-full rounded-xl absolute top-[300px] right-0 z-10"
      />
      </div>
      <div class="w-1/2 flex flex-col items-start gap-10 max-[600px]:w-full max-[600px]:block max-[600px]:p-4 lg:gap-8 lg:p-2">
        <h1 class="text-5xl text-[#dfe4e6] opacity-55 font-bold max-[600px]:text-2xl max-[600px]:my-4">About Us</h1>
        <p class="text-xl text-[#dfe4e6] font-light montserrat max-[600px]:text-sm max-[600px]:leading-6 lg:leading-normal ">
        Welcome to Snowhill Travels Kashmir, where we transform your travel aspirations into extraordinary adventures. Situated amidst the captivating landscapes of the Kashmir Valley, our mission is to curate unforgettable experiences that capture the essence of this majestic destination. With a wealth of experience and a dedication to personalized service, we craft tailor-made itineraries designed to immerse you in the beauty, culture, and hospitality of Kashmir. From adrenaline-fueled escapades in the snow-covered peaks to serene moments by pristine lakes, every aspect of your journey is meticulously planned by our team of passionate professionals. Join us and embark on a voyage of discovery through the enchanting realm of Kashmir's wonders.
        </p>
        {/* <div class="flex justify-start gap-10 max-[600px]:mt-5">
          <button class="bg-[#01B3A7] px-10 py-4 text-white text-md hover:bg-[#018078] ease-linear duration-200 max-[600px]:px-3 max-[600px]:py-2 max-[600px]:text-sm" onClick={() => router.push('/contact')}>Get in Touch</button>
          <button class="px-10 py-4 bg-transparent text-black border-solid border-2 border-black text-md ease-linear duration-200 hover:shadow-2xl scale-115 max-[600px]:px-3 max-[600px]:py-2 max-[600px]:text-sm  "onClick={() => router.push('/aboutus')}>Read More</button>
        </div> */}
      </div>
    </div>
  );
}
