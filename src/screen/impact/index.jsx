"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import Image from "next/image";
import React from "react";

const ImpactPageScreen = ({ content }) => {
  const { Overview, Services, Conclusion } = content;
  return (
    <div className="about-page-screen flex items-center justify-center">
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
            {/* hero section end */}

            {Object.entries(Services).map((data) => {
              const [_, value] = data;
              return (
                <section
                  className="section mw-10:mb-10  mb-20"
                  key={value.Title}
                >
                  <MainHeading color="text-primary dark:text-darkBlue">
                    {value.Title}
                  </MainHeading>
                  <p className="text-secondary w-full my-6">{value.Subtitle}</p>
                  <DarkHoverBtn btnLink={value.buttonLink}>
                    {value.buttonText}
                  </DarkHoverBtn>
                  {value.Content && (
                    <ul className="mt-10 grid sm:grid-cols-2 gap-5">
                      {value.Content.map((content, index) => {
                        return (
                          <li
                            key={index}
                            className="group text-center border border-secondary hover:bg-darkBlue dark:hover:bg-white rounded-lg p-5"
                          >
                            <Image
                              src="/assets/gics.svg"
                              width={100}
                              height={100}
                              alt="gics"
                              className="mx-auto "
                            />
                            <div className="my-4 text-primary group-hover:text-white dark:group-hover:text-darkBlue">
                              <SubHeading>{content.Section}</SubHeading>
                            </div>

                            <p className="text-secondary group-hover:text-white dark:group-hover:text-darkBlue/70 w-full">
                              {content.Description}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </section>
              );
            })}
            <section className="max-w-[800px] mx-auto">
              <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-20 border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue dark:bg-primary overflow-hidden">
                <div className="z-10 flex flex-col justify-center items-center ">
                  <Image
                    src="/assets/gics.svg"
                    width={100}
                    height={100}
                    alt="gics"
                    className="mx-auto dark:invert"
                  />

                  <div className="text-white">
                    <SubHeading>{Conclusion.CallToAction}</SubHeading>
                  </div>

                  <p className="text-white/70  mb-8">{Conclusion.Summary}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPageScreen;
