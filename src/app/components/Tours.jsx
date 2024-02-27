import React from "react";
import packages from "./Data/tourCardData";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Tours() {
  const router = useRouter();


  return (
    <div class="text-center z-10 mt-20 mb-28" id="tours">
      <h1 class="text-4xl text-[#063c49] font-bold mb-20 max-[600px]:mt-20">Kashmir Packages </h1>
      <div class="flex justify-evenly gap-10 max-[600px]:block max-[600px]:px-4">
        {/* {tour.map((item) => (
          <div
            class="w-80 text-left border-solid border-2 border-[#F4F4F4] cursor-pointer shadow-xl transition-all ease-linear duration-200 hover:-translate-y-3 z-1 max-[600px]:w-full max-[600px]:mb-5 lg:w-72"
            onClick={() => router.push(`/tour/${item?.tourHeading}`)}
          >
            <Image
              src={item?.image}
              sizes="100vw"
              width={320}
              height={230}
              alt="dallake Image"
              loading="lazy"
              class="w-80 h-52 max-[600px]:w-full lg"
            />
            <div class="p-4">
              <h2 class="text-xl mb-5 font-medium">{item?.title}</h2>
              <p class="text-left text-thin mb-5 leading-7 font-light">
                {item.description}
              </p>
              <button class="bg-[#01B3A7] px-6 py-2 text-white text-md hover:bg-[#018078] ease-linear duration-200">
                Read More
              </button>
            </div>
          </div>
        ))} */}

        {/* <Image src='/card-one.jpg' alt="tour-card" height={300} width={200} loading="lazy" style={{
            width:'400px',
            height:'550px',
            objectFit:"cover"
          }} className="rounded-2xl" /> */}
        {packages?.map((item) => (
          <div
            key={item.id}
            className="bg-cover h-[28rem] w-[19rem] bg-center rounded-2xl p-2 z-0 shadow-2xl max-[600px]:mb-6 max-[600px]:w-full"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div>
              <div className="z-[1000]">
                <h1 className="font-extrabold text-right text-2xl mt-20 text-white">
                  {item.title[0]}
                </h1>
                <h2 className="font-medium text-left text-xl italic text-white">
                  {item.hotelCategory}
                </h2>
                <h2 className=" text-left text-xl text-white">
                  {`Seasonal Rate ${item.seasonalRate[0]}`}
                </h2>
                <h2
                  className="text-left text-xl text-white"
                  s
                >
                  {`Off Seasonal Rate ${item.seasonalRate[1]}`}
                </h2>
                <h1 className="font-extrabold text-left text-2xl mt-12 text-white">
                  {item.title[1]}
                </h1>
                <h2 className="font-medium text-right text-xl italic text-white">
                  {item.hotelCategory}
                </h2>
                <h2 className=" text-right text-xl text-white">
                  {`Seasonal Rate ${item.seasonalRate[2]}`}
                </h2>
                <h2
                  className="text-right text-xl text-white"
                  s
                >
                  {`Off Seasonal Rate ${item.seasonalRate[3]}`}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
