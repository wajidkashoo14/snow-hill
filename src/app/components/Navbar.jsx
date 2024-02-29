"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState("0");
  const [bg, setBg] = useState("bg-transparent");

  const changeBackground = () => {
    if (window.scrollY > 50) {
      setShadow("shadow-2xl");
      setBg("bg-white");
    } else {
      setShadow("shadow-0");
      setBg("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <nav
      class={` border-gray-200 bg-transparent w-full ${shadow} montserrat fixed top-0 z-50 ${bg}`}
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5 max-[600px]:hidden">
        <Link
          href="/"
          class={`text-[#063c49] font-bold text-xl flex justify-center items-center gap-2 -z-1 [600px]:hidden`}
        >
          <Image
            src="/logo.jpg"
            alt="logo"
            loading="lazy"
            width={60}
            height={60}
            class="rounded-full"
          />
          SnowHill Travels  Kashmir
        </Link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="https://wa.me/919055661150"
            type="button"
            class="text-white bg-[#25D366]  font-medium text-sm px-6 py-3 text-center flex items-center justify-center gap-1"
          >
            <FaWhatsapp color="#fff" fontSize={20} /> WhatsApp
          </Link>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 montserrat z-50"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-transparent border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 montserrat">
            <li>
              <Link
                href="/"
                class={`text-[#063c49] block py-2 px-3 md:p-0 rounded md:bg-transparent montserrat`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#tours"
                class={`text-[#063c49] block py-2 px-3 md:p-0 rounded md:bg-transparent montserrat`}
              >
                Tour
              </Link>
            </li>
            <li>
              <Link
                href="/#hotels"
                class={` text-[#063c49] block py-2 px-3 md:p-0 rounded md:bg-transparent montserrat`}
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                href="/transport"
                class={` text-[#063c49] lock py-2 px-3 md:p-0 rounded md:bg-transparent montserrat`}
              >
                Transport
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                class={`text-[#063c49]  block py-2 px-3 md:p-0 rounded md:bg-transparent montserrat`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                class={` text-[#063c49] block py-2 px-3 md:p-0 rounded md:bg-transparent montserrat`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class={`${bg} max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-4 max-[600px]:flex max-[600px]:justify-between min-[768px]:hidden`}>
        <Link
          href="/"
          class="text-white font-semibold text-xl flex justify-center items-center gap-2 -z-1"
        >
          <Image
            src="/logo.jpg"
            alt="logo"
            loading="lazy"
            width={60}
            height={60}
            class="rounded-full"
          />
        </Link>
        <span className={`text-[#063c49] text-lg  w-36 font-bold`}>
          SnowHill Travels  Kashmir
        </span>
        <div class="flex">
          <div onClick={() => setNav(!nav)}>
            {nav ? (
              <IoMdClose size={30} color="#B8BDC6" />
            ) : (
              <RxHamburgerMenu size={30} color="#B8BDC6" />
            )}
          </div>

          <Link
            href="https://wa.me/919055661150"
            type="button"
            className="text-white bg-transparent  font-medium text-sm px-6 py-3 text-center flex items-center justify-center gap-1 max-[600px]:absolute max-[600px]:-bottom-[80vh] max-[600px]:right-0 max-[600px]:z-50"
          >
            <Image
              src="/whatsapp.png"
              width={50}
              height={50}
              alt="whatsApp-Icon"
              loading="lazy"
            />
          </Link>
          {nav ? (
            <ul class="flex flex-col gap-3 font-medium text-center pt-20 bg-[#024F74] h-screen w-full mt-10 absolute top-10 left-0 text-lg">
              <li>
                <Link
                  href="/"
                  class="block py-2 px-3 md:p-0 text-white bg-transparent"
                  aria-current="page"
                  onClick={() => setNav(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#tours"
                  class="block py-2 px-3 md:p-0 text-white bg-transparent"
                  onClick={() => setNav(false)}
                >
                  Tour
                </Link>
              </li>
              <li>
                <Link
                  href="/#hotels"
                  class="block py-2 px-3 md:p-0 text-white bg-transparent"
                  onClick={() => setNav(false)}
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  href="/transport"
                  class="block py-2 px-3 md:p-0 text-white bg-transparent"
                  onClick={() => setNav(false)}
                >
                  Transport
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  class="block py-2 px-3 md:p-0 text-white rounded bg-transparent"
                  onClick={() => setNav(false)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  class="block py-2 px-3 md:p-0 text-white rounded bg-transparent"
                  onClick={() => setNav(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
