"use client";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import HeroSection from "@/components/hero-section/hero-section";
import SectionContent from "@/components/section-content/section-content";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import Image from "next/image";
import React from "react";

const GicsSectorsPage = ({ content }) => {
  const { Overview, Services, Conclusion } = content;
  return (
    <div className="about-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col justify-center items-center">
          <div className="mx-auto my-20 mw-10:my-5">
            <HeroSection
              button={{ text: Overview.buttonText, link: Overview.buttonLink }}
              content={Overview.Content}
              subtitle={Overview.Subtitle}
              title={Overview.Title}
            />
            <section className="section-gics-sectors">
              <div className="grid md:grid-cols-2  gap-5">
                {Object.entries(Services).map(([key, value], index, arr) => {
                  let cls =
                    index === arr.length - 1 && arr.length % 2 !== 0
                      ? "sm:col-span-2"
                      : "";
                  return (
                    <div
                      className={` border border-darkBlue/20 dark:border-primary/20  rounded-lg  p-5  ${cls}`}
                    >
                      <MainHeading color="text-primary dark:text-darkBlue !text-lg md:!text-2xl">
                        {value.Title}
                      </MainHeading>
                      <SubHeading color="text-primary dark:text-darkBlue !text-base">
                        {value.Subtitle}
                      </SubHeading>
                      {value.Content && (
                        <ul className="text-secondary w-full pt-2.5">
                          {value.Content.map((content) => {
                            return (
                              <li
                                className="flex gap-5 flex-col sm:flex-row items-start"
                                key={index}
                              >
                                <Image
                                  src="https://www.infrabondassets.com/assets/images/about/drive_global_collaboration.png"
                                  className="h-16 w-auto"
                                  alt="drive_global_collaboration"
                                  width={100}
                                  height={100}
                                />
                                <div>
                                  <SubHeading color="text-primary dark:text-darkBlue">
                                    {content.Section}
                                  </SubHeading>
                                  <p className="font-rubik text-base font-normal text-secondary">
                                    {content.Description}
                                  </p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="conclusion mt-7">
              <MainHeading color="text-primary dark:text-darkBlue">
                {Conclusion.title}
              </MainHeading>
              <p className="font-rubik my-5 text-[16px] font-normal text-secondary">
                {Conclusion.Summary}
              </p>
              <p className="font-rubik  text-[16px] font-normal text-secondary">
                {Conclusion.CallToAction}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GicsSectorsPage;
