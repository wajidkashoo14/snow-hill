import Image from "next/image";
import React from "react";

export default function OurServicesCard({ image, heading, description }) {
  return (
    <div class="w-[300px] h-48 border-solid p-4 flex flex-col items-center gap-6 border border-teal-100 rounded-xl shadow-xl justify-center ease-linear duration-200 hover:shadow-2xl max-[600px]:w-full max-[600px]:mb-3 lg:gap-2">
      <h3 class="text-3xl font-semibold text-[#dfe4e6] text-left mb-4 max-[600px]:text-lg lg:text-sm  lg:mb-2">
        {heading}
      </h3>
      <Image src={image} alt={heading} width={100} height={100} loading="lazy" />
    </div>
  );
}
