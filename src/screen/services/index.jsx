"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import HeroSection from "@/components/hero-section/hero-section";
import SectionContent from "@/components/section-content/section-content";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import Image from "next/image";
import React from "react";

const ServicePageScreen = ({ content }) => {
  const { Overview, Conclusion, Services } = content;
  return (
    <div className="about-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col justify-center items-center">
          <div className="mx-auto my-20 mw-10:my-5">
            {/* hero section start */}
            <HeroSection
              button={{ text: Overview.buttonText, link: Overview.buttonLink }}
              content={Overview.Content}
              subtitle={Overview.Subtitle}
              title={Overview.Title}
            />
            {/* hero section end */}

            {/* SERVICES */}
            {Object.entries(Services).map(([key, value], index) => {
              return (
                <SectionContent
                  button={{
                    text: value.buttonText,
                    link: value.buttonLink,
                  }}
                  content={value.Content}
                  subtitle={value.Subtitle}
                  title={value.Title}
                  key={index}
                />
              );
            })}

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

export default ServicePageScreen;
