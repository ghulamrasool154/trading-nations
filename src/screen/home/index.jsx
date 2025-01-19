"use client";
import MainHeading from "@/components/abs-headings/main-heading";
import HomeCards from "@/components/home-cards/home-cards";
import HomeCardsTwo from "@/components/home-cards/home-cards-two";
import HomeHero from "@/components/home-hero";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import Image from "next/image";
import React from "react";

const HomePageScreen = ({ content, lang }) => {
  return (
    <div className="home-page-screen">
      <HomeHero content={content.HeroSection} />
      <div className="trusted-by-wrapper mw-10:pt-10 pt-20 ">
        <div className="max-w-maxWidth mx-auto  px-5">
          <div className="about-section">
            <div className="top-about-section">
              <div className="w-full flex flex-row items-center mb-4">
                <MainHeading color="text-primary dark:text-darkBlue">
                  {content.OurPurpose.Title}
                </MainHeading>
              </div>
              <p className="font-rubik mb-5 text-[16px] font-normal text-secondary">
                {content.OurPurpose.Content}
              </p>

              <p className="font-rubik mb-5 text-[16px] font-normal text-secondary">
                {content.OurPurpose.CallToAction}
              </p>

              <DarkHoverBtn btnLink={content.OurPurpose.buttonLink}>
                {content.OurPurpose.buttonText}
              </DarkHoverBtn>
            </div>
          </div>

          <div className="text-start mw-10:mt-10 mt-20 cards-wrapper">
            <MainHeading color="text-primary dark:text-darkBlue">
              {content.ParticipantCategories.Title}
            </MainHeading>
            <p className="font-rubik text-[16px] mt-5  mb-6  font-normal text-secondary">
              {content.ParticipantCategories.Content}
            </p>
            <p className="font-rubik text-[16px] mt-5  mb-6  font-normal text-secondary">
              {content.ParticipantCategories.Interactive}
            </p>
            <DarkHoverBtn btnLink={content.ParticipantCategories.buttonLink}>
              {content.ParticipantCategories.buttonText}
            </DarkHoverBtn>
            <div className="grid grid-cols-1 gap-4 mw-10:mb-10 mb-20 sm:grid-cols-2 mt-[20px]">
              {content.ParticipantCategories.Categories.map((e, idx) => {
                const isLastOdd =
                  idx % 2 === 0 &&
                  idx === content.ParticipantCategories.Categories - 1;

                return (
                  <div
                    key={idx}
                    className={`col-span-1 ${
                      isLastOdd ? "sm:col-span-2" : "sm:col-span-1"
                    }`}
                  >
                    <HomeCards
                      cardName={e.Type}
                      paragraph={e.Description}
                      icon={e.icon}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*images card sections started here  */}
        <section className="bg-darkBlue dark:bg-primary  w-full flex justify-center  py-20  mw-10:py-10   px-5 mw-10:mb-10 mb-20">
          <div className="images-card-wrapper max-w-maxWidth mx-auto ">
            <MainHeading color="text-white">
              {content.CoreServicesHighlights.Title}
            </MainHeading>
            <p className="font-rubik text-[16px] mt-5  mb-6  font-normal text-white ">
              {content.CoreServicesHighlights.Interactive}
            </p>
            <DarkHoverBtn btnLink={content.CoreServicesHighlights.buttonLink}>
              {content.CoreServicesHighlights.buttonText}
            </DarkHoverBtn>
            <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4 ">
              {content.CoreServicesHighlights.Services.map((e, idx) => {
                return (
                  <div
                    className="border border-accent p-3 rounded-md"
                    key={idx}
                  >
                    <Image
                      src={e.icon}
                      alt="Icon"
                      width={32}
                      height={32}
                      className={`w-8 h-8 rounded-full mx-auto`}
                    />
                    <div className={`text-center  text-white`}>
                      <h2 className="font-semibold my-2.5"> {e.Title}</h2>
                      <p className="text-white/60">{e.Description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="font-rubik text-[16px] mt-[30px]  mb-6  font-normal text-white ">
              {content.CoreServicesHighlights.CallToAction}
            </p>
            <DarkHoverBtn btnLink={content.CoreServicesHighlights.buttonLink1}>
              {content.CoreServicesHighlights.buttonText1}
            </DarkHoverBtn>
          </div>
        </section>
        {/*images card ended here  */}
        <section className="  w-full flex justify-center ">
          <div className="images-card-wrapper max-w-maxWidth mx-auto ">
            <div className="text-start mw-10:mt-10 mt-10 cards-wrapper">
              <MainHeading color="text-primary dark:text-darkBlue">
                {content.GlobalImpactStats.Title}
              </MainHeading>
              <p className="font-rubik mb-5 text-[16px] font-normal text-secondary">
                {content.GlobalImpactStats.CallToAction}
              </p>
              <div className="grid mt-[20px] grid-cols-1 gap-4 mw-10:mb-10 mb-20 sm:grid-cols-2 ">
                {content.GlobalImpactStats.Stats.map((e, idx) => {
                  const isLastOdd =
                    idx % 2 === 0 &&
                    idx === content.GlobalImpactStats.Stats - 1;

                  return (
                    <div
                      key={idx}
                      className={`col-span-1 ${
                        isLastOdd ? "sm:col-span-2" : "sm:col-span-1"
                      }`}
                    >
                      <HomeCardsTwo
                        cardName={e.Metric}
                        value={e.Value}
                        paragraph={e.Description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageScreen;
