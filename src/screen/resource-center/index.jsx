"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import Image from "next/image";
import React from "react";

const ResourceCenterScreen = ({ content }) => {
  const { Overview, Sections, Conclusion } = content;

  const {
    WhitePapersAndDocumentation,
    CaseStudiesAndReports,
    PressReleases,
    BlogAndInsights,
  } = Sections;
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

            <section className="section-hero mw-10:mb-10 mb-20">
              <div className="text-primary dark:text-darkBlue mb-2.5">
                <MainHeading>{WhitePapersAndDocumentation.Title}</MainHeading>
              </div>
              <SubHeading color="text-primary dark:text-darkBlue">
                {WhitePapersAndDocumentation.Subtitle}
              </SubHeading>
              <DarkHoverBtn btnLink={WhitePapersAndDocumentation.buttonLink}>
                {WhitePapersAndDocumentation.buttonText}
              </DarkHoverBtn>
              {WhitePapersAndDocumentation.Content && (
                <ul className="mt-10">
                  {WhitePapersAndDocumentation.Content.map((item, index) => {
                    return (
                      <li
                        className="flex gap-5 flex-col sm:flex-row items-start mt-5"
                        key={index}
                      >
                        <Image
                          src="https://www.infrabondassets.com/assets/images/about/drive_global_collaboration.png"
                          className="h-[100px] w-auto"
                          alt="drive_global_collaboration"
                          width={200}
                          height={200}
                        />
                        <div>
                          <SubHeading color="text-primary dark:text-darkBlue">
                            {item.Title}
                          </SubHeading>
                          <p className="font-rubik mb-5 text-[16px] font-normal text-secondary">
                            {item.Summary}
                          </p>
                          <p className="font-rubik  text-[16px] font-normal text-secondary">
                            <b>Banefits:</b> {item.KeyBenefit}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>

            <section className="section-hero mw-10:mb-10 mb-20">
              <div className="text-primary dark:text-darkBlue mb-2.5">
                <MainHeading>{CaseStudiesAndReports.Title}</MainHeading>
              </div>
              <SubHeading color="text-primary dark:text-darkBlue">
                {CaseStudiesAndReports.Subtitle}
              </SubHeading>
              <DarkHoverBtn btnLink={CaseStudiesAndReports.buttonLink}>
                {CaseStudiesAndReports.buttonText}
              </DarkHoverBtn>
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                {CaseStudiesAndReports.Content.map((region, index) => {
                  return (
                    <div
                      className="border border-primary dark:border-darkBlue rounded-md p-5"
                      key={index}
                    >
                      <div className="flex items-start gap-4">
                        <Image
                          src="https://icons.veryicon.com/png/o/commerce-shopping/b2b-shopping-mall/region.png"
                          alt="demo"
                          width={70}
                          className="block shadow-lg p-2.5 rounded-md"
                          height={70}
                        />

                        <div className="overflow-hidden">
                          <SubHeading color="text-primary dark:text-darkBlue">
                            {region.Region}{" "}
                          </SubHeading>

                          <div className="text-secondary text-pretty space-y-2 text-sm md:text-base ">
                            <p>
                              <strong>Headquarters:</strong>{" "}
                              {region.Headquarters}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex items-center gap-4 my-2.5">
                          <div className="w-[70px]">
                            <Image
                              src="https://youthforpakistan.org/wp-content/uploads/2024/09/dummy.webp"
                              alt="demo"
                              width={50}
                              height={50}
                              className=" rounded-full border border-primary p-1"
                            />
                          </div>
                          <h2 className="text-xl mw-10:text-[18px] mw-7:text-[16px] text-secondary font-semibold">
                            {region.Ambassador}
                          </h2>
                        </div>
                        <DarkHoverBtn btnLink={region.buttonLink}>
                          {region.buttonText}
                        </DarkHoverBtn>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* pressreleases */}
            <section className="section-hero mw-10:mb-10 mb-20">
              <div className="text-primary dark:text-darkBlue mb-2.5">
                <MainHeading>{PressReleases.Title}</MainHeading>
              </div>
              <SubHeading color="text-primary dark:text-darkBlue">
                {PressReleases.Subtitle}
              </SubHeading>
              <p className="text-gray-400  mb-8">{PressReleases.Content}</p>
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
                        className="border border-primary overflow-hidden p-5"
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

            <section className="max-w-[800px] mx-auto">
              <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-20 border relative border-black/10 dark:bg-primary rounded-[12px]  flex flex-col justify-center items-center p-8 bg-white overflow-hidden">
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
            {/* <section className="w-full mx-auto">
              <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-20 border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue overflow-hidden">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                  <MainHeading color="white">{ApplyCTA.Title}</MainHeading>
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
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCenterScreen;
