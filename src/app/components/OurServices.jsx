import React from "react";
import OurServicesCard from "./OurServicesCard";
import { GiSettingsKnobs, GiTripleScratches  } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { LiaHotelSolid } from "react-icons/lia";
import { IoWallet } from "react-icons/io5";

export default function OurServices() {
  return (
    <div class="px-20 min-h-screen bg-[#063c49] text-center max-[600px]:px-4 max-[600px]:mt-44">
      <h1 class="font-bold py-12 text-5xl text-[#dfe4e6] opacity-55 mb-20">Our Services</h1>
      <div class="flex justify-around items-center gap-4 pt-10 max-[600px]:block">
        <OurServicesCard
          image="/24-hours.png"
          heading="Superior Service"
          
        />
        <OurServicesCard
          image="/guidance.png"
          heading="Expert Guidance"
          
        />
        <OurServicesCard
          image="/user-location.png"
          heading="
          Personalized Experience"
          
        />
        <OurServicesCard
         image="/earth.png"
          heading="Sustainable Tourism"
        />
      </div>
    </div>
  );
}
