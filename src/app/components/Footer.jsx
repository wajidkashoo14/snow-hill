import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaMobile } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center">
      <div class="bg-white min-h-80 mt-12 flex justify-evenly mx-5 items-center border-b-[1px] border-gray-400 max-[600px]:block max-[600px]:p-4">
      <div>
        <h2 class="text-lg font-medium mb-5 text-[#063c49]">Who we are?</h2>
        <p class="text-sm text-left text-[#063c49] w-56 max-[600px]:w-full max-[600px]:mb-5">
          SnowHill Travels Tour and Travels in Kashmir offers an enchanting
          exploration, embracing the serene landscapes of Sonmarg and Pahalgam.
          Traverse through the captivating meadows of Pahalgam, where the Lidder
          River gracefully flows, and experience the ethereal beauty of Betaab
          Valley.
        </p>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-[#063c49] uppercase">
          Help center
        </h2>
        <ul class="text-[#063c49] font-medium">
          <li class="mb-4">
            <Link href="https://x.com/snowhilltravels?t=D2oUqMGqgbX1IkWYsX_QQA&s=09" class="hover:underline">
              Twitter
            </Link>
          </li>
          <li class="mb-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61551063103159&mibextid=ZbWKwL"
              class="hover:underline"
            >
              Facebook
            </Link>
          </li>
          <li class="mb-4">
            <Link
              href="https://www.instagram.com/snowhill_travels?igsh=MTFxNmRsdjRldHR0eg=="
              class="hover:underline"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-[#063c49] uppercase">
          Quick Links
        </h2>
        <ul class="text-[#063c49] font-medium">
          <li class="mb-4">
            <Link href="/#tours" class="hover:underline">
              Tours
            </Link>
          </li>
          <li class="mb-4">
            <Link href="/#hotels" class="hover:underline">
              Hotels
            </Link>
          </li>
          <li class="mb-4">
            <Link href="/aboutus" class="hover:underline">
              About us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-[#063c49] uppercase">Contact</h2>
        <ul class="text-[#063c49] font-medium">
          <li class="mb-4">
            <Link
              href="#"
              class="hover:underline flex justify-start items-center gap-2"
            >
              <IoMdMail />
              snowhilltravelskashmir@gmail.com
            </Link>
          </li>
          <li class="mb-4">
            <Link
              href="#"
              class="hover:underline flex justify-start items-center gap-2"
            >
              <FaMobile />
              +91 9055661150
            </Link>
          </li>
          <li class="mb-4">
            <a
              href="#"
              class="hover:underline flex justify-start items-center gap-2"
            >
              <FaMobile />
              +91 6006188634
            </a>
          </li>
        </ul>
      </div>
      </div>
      <p className="text-[#063c49] py-3 text-sm">2024 SnowHills Kashmir | A product of <Link className="underline" href="https://aqion.in/">Aqion</Link> | All rights reserved</p>
    </footer>
  );
}
