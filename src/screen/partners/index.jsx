"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import Image from "next/image";
import React from "react";

const PartnersScreen = ({ content }) => {
  const { Overview, Services, Conclusion, ApplyCTA } = content;
  return (
    <div className="about-page-screen flex items-center justify-center ">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col justify-center items-center">
          <div className="mx-auto my-20 mw-10:my-5">
            {/* hero section start */}
            <section className="section-hero mw-10:mb-10 mb-20">
              <HeroHeading>{Overview.Title}</HeroHeading>

              <SubHeading color="text-primary dark:text-darkBlue">
                {Overview.Subtitle}
              </SubHeading>
              <p className="text-secondary mb-6 w-full">{Overview.Content}</p>
              <DarkHoverBtn btnLink={Overview.buttonLink}>
                {Overview.buttonText}
              </DarkHoverBtn>
            </section>

            {Object.entries(Services).map(([key, value], index) => {
              return (
                <section className="section-hero mw-10:mb-10 mb-20" key={index}>
                  <div className="text-primary dark:text-darkBlue mb-2.5">
                    <MainHeading>{value.Title}</MainHeading>
                  </div>
                  <SubHeading color="text-primary dark:text-darkBlue">
                    {value.Subtitle}
                  </SubHeading>
                  <DarkHoverBtn btnLink={value.buttonLink}>
                    {value.buttonText}
                  </DarkHoverBtn>
                  {value.Content && (
                    <ul className="grid grid-cols-2		mt-10 ">
                      {value.Content.map((item, index) => {
                        const isLastOdd =
                          index === value.Content.length - 1 &&
                          value.Content.length % 2 !== 0;

                        return (
                          <li
                            key={index}
                            className={`border bg-darkBlue dark:bg-primary p-5 text-center ${
                              isLastOdd
                                ? "col-span-2 "
                                : "col-span-2 md:col-span-1"
                            } gap-5`}
                          >
                            <Image
                              src="/assets/gics/gics_energy.jpg"
                              alt="demo"
                              width={300}
                              height={300}
                              className="h-40 min-h-40 w-40 min-w-40 mx-auto"
                            />
                            <h2 className="text-white text-2xl font-semibold my-4">
                              {item.Section}
                            </h2>
                            <p className="text-gray-400">{item.Description}</p>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </section>
              );
            })}
            {/* hero section end */}

            <section className="max-w-[800px] mx-auto">
              <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-20 border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-white dark:bg-primary overflow-hidden">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                  <Image
                    src="/assets/gics.svg"
                    width={100}
                    height={100}
                    alt="gics"
                    className="mx-auto dark:brightness-[5]"
                  />

                  <div className="text-primary dark:text-white my-2.5">
                    <SubHeading>{Conclusion.CallToAction}</SubHeading>
                  </div>
                  <p className="text-secondary/70 dark:text-white/70 text-center mb-8">
                    {Conclusion.Summary}
                  </p>
                </div>
              </div>
            </section>
            <section className="w-full mx-auto">
              <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-20 border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue dark:bg-primary overflow-hidden">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                  <MainHeading color="text-white ">{ApplyCTA.Title}</MainHeading>
                  <div className="text-white/60 my-2.5">
                    <SubHeading>{ApplyCTA.Subtitle}</SubHeading>
                  </div>
                  <p className="text-gray-400 text-center mb-8">
                    {ApplyCTA.Content}
                  </p>
                </div>
                <LightBtn btnLink={ApplyCTA.buttonLink}>
                  {ApplyCTA.buttonText}
                </LightBtn>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersScreen;
