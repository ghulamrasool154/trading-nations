"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import ConclusionSection from "@/components/conclusion/conclusion";
import MapScreen from "@/components/contact/map";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import Image from "next/image";
import React from "react";

const ContactUsPageScreen = ({ content }) => {
  const { Overview, Sections, Conclusion } = content;

  const { BlogAndInsights, PressReleases, InquiriesAndSupport } = Sections;
  return (
    <div className="contact-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col justify-center items-center">
          <div className="mx-auto  my-20 mw-10:my-10">
            {/* hero section start */}
            <section className="section-hero mw-10:mb-10 mb-20">
              <HeroHeading>{Overview.Title}</HeroHeading>
              <SubHeading color="text-primary dark:text-darkblue">
                {Overview.Subtitle}
              </SubHeading>
              <p className="text-secondary mb-6 w-full">{Overview.Content}</p>
              <DarkHoverBtn btnLink={Overview.buttonLink}>
                {Overview.buttonText}
              </DarkHoverBtn>
            </section>
            {/* hero section end */}
            {/* pressreleases */}
            <section className="section-hero mw-10:mb-10 mb-20">
              <div className="text-primary dark:text-darkBlue mb-2.5">
                <MainHeading>{PressReleases.Title}</MainHeading>
              </div>
              <SubHeading color="text-primary dark:text-darkBlue">
                {PressReleases.Subtitle}
              </SubHeading>
              <p className="text-gray-400  mb-8">{PressReleases.Content}</p>
              <DarkHoverBtn btnLink={PressReleases.buttonLink}>
                {PressReleases.buttonText}
              </DarkHoverBtn>
            </section>

            {/* BlogAndInsights */}
            <section className="section-hero mw-10:mb-10 mb-20">
              <div className="text-primary dark:text-darkBlue mb-2.5">
                <MainHeading>{BlogAndInsights.Title}</MainHeading>
              </div>
              <SubHeading color="text-primary dark:text-darkBlue">
                {BlogAndInsights.Subtitle}
              </SubHeading>
              <DarkHoverBtn btnLink={BlogAndInsights.buttonLink}>
                {BlogAndInsights.buttonText}
              </DarkHoverBtn>
              {BlogAndInsights.Content && (
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                  {BlogAndInsights.Content.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="border border-primary dark:border-darkBlue overflow-hidden p-5"
                      >
                        <Image
                          src="/assets/gics/gics_financials.jpg"
                          alt=""
                          width={300}
                          height={300}
                          className="w-full h-[150px] md:h-[200px] object-cover"
                        />
                        <div className="mt-5">
                          <SubHeading color="text-primary dark:text-darkBlue">
                            {item.Title}
                          </SubHeading>
                        </div>
                        <p className="text-gray-400">{item.Description}</p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
            {/* LST */}

            {/* <section className="max-w-[800px] mx-auto">
              <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-20 border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue overflow-hidden">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                  <Image
                    src="/assets/gics.svg"
                    width={100}
                    height={100}
                    alt="gics"
                    className="mx-auto invert"
                  />

                  <div className="text-white my-2.5">
                    <SubHeading>{Conclusion.CallToAction}</SubHeading>
                  </div>
                  <p className="text-white/70 text-center mb-8">
                    {Conclusion.Summary}
                  </p>
                </div>
              </div>
            </section> */}
            <ConclusionSection
              heading={Conclusion.CallToAction}
              summary={Conclusion.Summary}
            />
            <div class="mb-20 mw-10:mb-10 px-4 md:px-[10%] border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue overflow-hidden dark:bg-primary">
              <div class="z-10 flex flex-col justify-center items-center">
                <MainHeading color="text-white">
                  {InquiriesAndSupport.Title}
                </MainHeading>
                <p class="text-gray-400 mt-5 text-center mb-8">
                  {InquiriesAndSupport.Content}
                </p>
                <SubHeading color="text-white">
                  {InquiriesAndSupport.Subtitle}
                </SubHeading>
                <p class="text-gray-400 mt-5 text-center mb-8">
                  {InquiriesAndSupport.AdditionalInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPageScreen;
