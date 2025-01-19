"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import Image from "next/image";
import React from "react";

const AboutUsPageScreen = ({ content }) => {
  return (
    <div className="about-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col justify-center items-center">
          <div className="mx-auto my-20 mw-10:my-5">
            {/* hero section start */}
            <div className="section-hero mw-10:mb-10 mb-20">
              <HeroHeading>{content.content[0].header}</HeroHeading>

              <SubHeading color="text-primary dark:text-darkBlue">
                {content.content[0].subHeader}
              </SubHeading>
              <p className="text-secondary mb-6 w-full">
                {content.content[0].content}
              </p>
              <DarkHoverBtn btnLink={content.content[0].buttonLink}>
                {content.content[0].buttonText}
              </DarkHoverBtn>
            </div>
            {/* hero section end */}

            {/* mission section start */}
            <div className="section-hero mw-10:mb-10  mb-20">
              <MainHeading color="text-primary dark:text-darkBlue">
                {content.content[1].header}
              </MainHeading>
              <div className="mt-2.5">
                <SubHeading color="text-primary dark:text-darkBlue">
                  {content.content[1].Subtitle}
                </SubHeading>
              </div>
              <p className="text-secondary mt-3 mb-6 w-full">
                {content.content[1].content}
              </p>
              <DarkHoverBtn btnLink={content.content[1].links[0].prompt}>
                {content.content[1].links[0].text}
              </DarkHoverBtn>
            </div>
            {/* mission section end */}

            {/* basic section start */}
            <div className="section-hero mw-10:mb-10  mb-20">
              <MainHeading color="text-primary dark:text-darkBlue">
                {content.content[2].header}
              </MainHeading>
              <p className="text-secondary mt-3 mb-6 w-full">
                {content.content[2].content}
              </p>
              <DarkHoverBtn btnLink={content.content[2].links[0].prompt}>
                {content.content[2].links[0].text}
              </DarkHoverBtn>
            </div>
            {/* basic section end */}

            <div className="section-hero mw-10:mb-10  mb-20">
              <MainHeading color="text-primary dark:text-darkBlue">
                {content.content[3].header}
              </MainHeading>
              <div className="mt-2.5">
                <SubHeading color="text-primary dark:text-darkBlue">
                  {content.content[3].Subtitle}
                </SubHeading>
              </div>
              <p className="text-secondary mt-3 mb-6 w-full">
                {content.content[3].content}
              </p>
              <DarkHoverBtn btnLink={content.content[3].links[0].prompt}>
                {content.content[3].links[0].text}
              </DarkHoverBtn>
              <div className="grid  sm:grid-cols-2 gap-5 mt-[40px] mw-10:mt-5 ">
                {content.content[3].Leaders.map((leader, index) => {
                  return (
                    <div
                      key={index}
                      className={`border  border-secondary/30 dark:bg-primary py-5 rounded-xl px-5 mb-5 bg-darkBlue  p-2   text-center `}
                    >
                      <Image
                        src="/assets/gics/gics_energy.jpg"
                        width={100}
                        height={100}
                        className="mx-auto rounded-full mb-4"
                        alt="hello"
                      />

                      <SubHeading color="text-white">{leader.Name}</SubHeading>

                      <SubHeading color="text-white">{leader.Title}</SubHeading>

                      <p className="text-white/70 mt-3 mb-6 w-full">
                        {leader.Description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="section-hero">
              <MainHeading color="text-primary dark:text-darkBlue">
                {content.content[4].header}
              </MainHeading>
              <div className="mt-2.5">
                <SubHeading color="text-primary dark:text-darkBlue">
                  {content.content[4].Subtitle}
                </SubHeading>
              </div>
              <p className="text-secondary mt-3 mb-6 w-full">
                {content.content[4].content}
              </p>
              <DarkHoverBtn btnLink={content.content[4].buttonLink}>
                {content.content[4].buttonText}
              </DarkHoverBtn>
            </div>
            {/* Contact Information Section End */}
          </div>
          {/* Join the Quantum Data Section Start  */}
          <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-20 border relative border-black/10 dark:bg-primary rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue overflow-hidden">
            <div className="z-10 flex flex-col justify-center items-center">
              <MainHeading color="text-white">
                {content.content[5].header}
                <p className="h-4" />
              </MainHeading>
              <p className="text-white text-center mb-8">
                {content.content[5].content}
              </p>

              <LightBtn btnLink={content.content[5].buttonLink}>
                {content.content[5].buttonText}
              </LightBtn>
            </div>
            <ul className="grid col-span-3 gap-5 w-full mt-5">
              {Object.entries(content.content[5].Sections).map(
                (section, index) => {
                  let firstElement = index === 0 ? "col-span-2	" : "col-span-1";
                  return (
                    <li
                      className={
                        " border border-secondary dark:border-darkBlue/70 w-full p-5 rounded-md " +
                        firstElement
                      }
                      key={index}
                    >
                      {/* icon */}
                      <SubHeading color="text-white">
                        {section[1].Title}
                      </SubHeading>
                      <p className="text-white text-left mb-8">
                        {section[1].Content}
                      </p>
                      <DarkHoverBtn btnLink={section[1].buttonLink}>
                        {section[1].buttonText}
                      </DarkHoverBtn>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          {/* Join the Quantum Data Section End  */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageScreen;
