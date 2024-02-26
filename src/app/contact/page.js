import React from "react";
import Image from "next/image";
import coverImage from "../../../public/contactcover.jpg";
import { IoLocationOutline, IoLogoInstagram } from "react-icons/io5";
import { CiMobile3, CiMail, CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function page() {
  return (
    <div class="mt-32 max-[600px]:mt-52">
      <h1 className="-mt-20 text-5xl text-[#063c49] text-center font-medium max-[600px]:mb-5">
        Contact Us
      </h1>
      <div class="w-full min-h-screen flex justify-center items-center max-[600px]:block max-[600px]:p-4 ">
        <div class="flex shadow-xl h-4/5 w-8/12 max-[600px]:block max-[600px]:w-full">
          <div class="flex flex-col bg-slate-100 w-8/12 max-[600px]:w-full max-[600px]:hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.9402180876286!2d74.8069797748008!3d34.07104671673869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f93fc6e2d33%3A0xcae0793c5438507c!2sYatri%20Niwas!5e0!3m2!1sen!2sin!4v1708941894965!5m2!1sen!2sin"allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ width: "100%", height: "100%" }}></iframe>
          </div>
          <div class="flex flex-col justify-start items-start gap-12 bg-[#063c49] text-white p-6 m max-[600px]:gap-8">
            <h2 class="text-3xl font-medium">Contact Information</h2>
            <span class="flex justify-center items-center gap-2 text-lg">
              <IoLocationOutline size={25} />
              <text>
                Yatri Bhawan Durganag Near Krishna Dhaba Srinagar 190001 J&K
              </text>{" "}
            </span>
            <span class="flex justify-center items-center gap-2 text-lg">
              <CiMobile3 size={25} />
              <text>916006188634</text>
            </span>
            <span class="flex justify-center items-center gap-2 text-lg">
              <CiMail size={25} /> <text>snowhilltravelskashmir@gmail.com</text>
            </span>
            <h2 class="text-2xl font-medium">Follow Us</h2>
            <div class="flex items-start justify-start gap-5 -mt-5 cursor-pointer max-[600px]:-mt-2">
              <Link href="https://www.facebook.com/profile.php?id=61551063103159&mibextid=ZbWKwL">
                <SlSocialFacebook size={30} />
              </Link>
              <Link href="https://www.instagram.com/snowhill_travels?igsh=MTFxNmRsdjRldHR0eg==">
                <IoLogoInstagram size={30} />
              </Link>
              <Link href="https://x.com/snowhilltravels?t=D2oUqMGqgbX1IkWYsX_QQA&s=09">
                <CiTwitter size={30} />
              </Link>
            </div>
            <div className="flex justify-start items-center gap-3 -mt-4 max-[600px]:block max-[600px]:-mt-2">
              <h2 className="text-2xl font-normal max-[600px]:mb-5">
                For Immediate Queries
              </h2>
              <Link
                href="https://wa.me/919055661150"
                type="button"
                class="text-white bg-[#25D366]  font-medium text-sm px-6 py-3 text-center flex items-center justify-center gap-1"
              >
                <FaWhatsapp color="#fff" fontSize={20} /> WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
