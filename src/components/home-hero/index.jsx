import useSwitchTheme from "@/hooks/use-switch-theme";
import Header from "@/layout/header";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import HeaderImgs from "../header/images/header-imgs";
const HomeHero = ({ content }) => {
  const { theme } = useSwitchTheme();

  const sendChatBotMessage = (message) => {
    const iframe = document.getElementById("deep-thought-iframe");
    if (iframe) {
      iframe?.contentWindow?.postMessage(
        { type: "deep-thought-send-message", value: message },
        "*"
      );
    }
  };

  return (
    <>
      <section className="hero-section relative w-full overflow-hidden h-[790px] transition-all duration-500">
        {theme === "light" ? (
          <video
            controls={false}
            muted
            autoPlay={true}
            loop={true}
            playsInline
         
             src="/videos/trading_nations_green.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/trading_nations_green.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <video
            controls={false}
            muted
            autoPlay={true}
            loop={true}
            playsInline
           
               src="/videos/trading_nations_white.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/trading_nations_white.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-primary/40 z-5"></div> */}
        <div className="absolute top-0 left-0 w-full h-full dark:bg-primary/40 bg-darkBlue/40 z-5"></div>
        <div className="relative z-10 flex flex-col  h-[700px]  px-5">
          <div className="max-w-maxWidth m-auto">
            <div className="flex items-center gap-2.5">
              <HeaderImgs />
              <h1 className="text-4xl sm:text-5xl  !mb-2 mw-5:text-[28px] mw-5:leading-normal text-white  mt-2  font-medium !mw-5:m-0">
                {content.Title}
              </h1>
            </div>
            <h2 className="text-3xl sm:text-3xl  mw-5:!mx-0 mw-5:!my-4 mw-5:text-2xl !mb-2 text-white  mt-2  font-medium">
              {content.Tagline}
            </h2>
            <button
              onClick={() => sendChatBotMessage(content.buttonLink)}
              className="cursor-pointer bg-backgroundClr mt-6 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-primary h-10 px-4 py-2"
            >
              {content.buttonText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
