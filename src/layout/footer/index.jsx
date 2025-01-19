"use client";
import HeaderImgs from "@/components/header/images/header-imgs";
import NavLink from "@/components/nav-link/nav-link";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ footer }) => {
  const { Overview, Sections } = footer;
  let links = [
    {
      href: "https://x.com/rakniuae",
      src: "/x.svg",
      name: "x",
    },
    {
      href: "https://www.linkedin.com/company/rakni-investment-development/",
      src: "/linkedin.svg",
      name: "linkedin",
    },
    {
      href: "https://www.instagram.com/rakni.ae",
      src: "/instagram.svg",
      name: "instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61564635794140&amp;mibextid=LQQJ4d",
      src: "/facebook.svg",
      name: "facebook",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("is working...");
  };
  return (
    <footer className="bg-darkBlue dark:bg-primary  border-t border-primary/10 py-10 px-3  ">
      <div className="max-w-maxWidth mx-auto ">
        <div className="text-center max-w-screen-sm w-full mx-auto">
          <h2 className="text-white text-4xl font-semibold   mb-5">
            {Sections.NewsletterSignup.Title}
          </h2>
          <p className="text-lg text-white/80 text-center ">
            {Sections.NewsletterSignup.Subtitle}
          </p>
          <p className="text-sm text-white/70 text-center mt-5 ">
            {Sections.NewsletterSignup.Content}
          </p>
          <form onSubmit={handleSubmit} className="my-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black py-[11px] focus-visible:outline-none px-4 max-w-80 w-full"
            />
            <button
              type="submit"
              className="bg-transparent text-white px-5 py-2.5 text-base font-semibold border border-white hover:bg-white hover:text-darkBlue transition-all duration-300 hover:border-l-darkBlue rtl:hover:border-l-transparent rtl:hover:border-r-darkBlue"
            >
              {Sections.NewsletterSignup.button}
            </button>
          </form>
        </div>
        <section className="mt-10 flex justify-between flex-col md:flex-row  items-start">
          <div className="footer-left w-full text-center md:text-left rtl:md:text-right">
            {/* <h2 className="font-rubik text-white font-bold text-[22px] mb-5">
              Trading Nations
            </h2> */}
            <div className="flex items-center gap-2.5">
              <HeaderImgs />
              <h2 className="font-rubik text-white font-bold text-[22px] mb-0">
                {Overview.Title}
              </h2>{" "}
            </div>
            <p className="text-sm text-white/70 mt-2.5 ">{Overview.Content}</p>
          </div>
          <div className="footer-right w-full mt-6 text-center md:text-right rtl:md:text-left ">
            <h6 className="text-white text-lg font-semibold    mb-5">
              {Sections.SocialMedia.Title}
            </h6>

            <div className="flex gap-2 justify-center md:justify-end">
              {links.map((link, index) => {
                return (
                  <Link target="_blank" href={link.href} key={index}>
                    <Image
                      width={50}
                      height={50}
                      src={`/assets/social${link.src}`}
                      title={link.name}
                      className="h-5 w-auto brightness-[10]"
                      alt="social-links"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row justify-between items-center mt-6">
          <p className="text-sm text-gray-400 ">{Overview.Copyright}</p>
          <ul className="flex justify-center flex-wrap gap-2.5">
            {Overview.Links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    href={link.link}
                    className="text-gray-500 dark:text-white/80 dark:hover:text-darkBlue text-sm hover:text-white !opacity-100"
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
