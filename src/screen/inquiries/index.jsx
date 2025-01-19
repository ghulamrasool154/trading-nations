"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import NavLink from "@/components/nav-link/nav-link";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import Image from "next/image";
import React from "react";

const InquiriesPageScreen = ({ content }) => {
  const { Overview, RegionalContacts, Careers } = content;
  return (
    <div className="about-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col justify-center items-center">
          <div className="mx-auto my-20 mw-10:my-5">
            {/* hero section start */}
            <section className="section-hero mw-10:mb-10 mb-20">
              <HeroHeading>{Overview.Title}</HeroHeading>

              <p className="text-secondary mb-6 w-full">{Overview.Content}</p>
              <p className="text-secondary mb-6 w-full">
                {Overview.AdditionalInfo}
              </p>
            </section>
            {/* hero section end */}
            <section className="section mw-10:mb-10  mb-20 ">
              <div className="text-center">
                <MainHeading color="text-primary dark:text-darkBlue">
                  {RegionalContacts.Title}
                </MainHeading>
                <p className="text-secondary text-center w-full my-6">
                  {RegionalContacts.Subtitle}
                </p>
                <DarkHoverBtn btnLink={RegionalContacts.buttonLink}>
                  {RegionalContacts.buttonText}
                </DarkHoverBtn>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                {RegionalContacts.Regions.map((region, index) => {
                  return (
                    <div
                      className="border border-primary rounded-md p-5"
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
                            <p>
                              <strong>Contact:</strong> {region.Contact}
                            </p>
                            <p>
                              <strong>Email:</strong> {region.Email}
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
                            {region.Amabassador}
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
            <section className=" mx-auto">
              <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-20 border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue dark:bg-primary overflow-hidden">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                  <Image
                    src="https://icon-library.com/images/career-icon-png/career-icon-png-15.jpg"
                    width={100}
                    height={100}
                    alt="gics"
                    className="mx-auto invert"
                  />
                  <div className="text-white mt-5">
                    <MainHeading>{Careers.Title}</MainHeading>
                  </div>
                  <div className="text-primary dark:text-white my-2.5">
                    <SubHeading>{Careers.Subtitle}</SubHeading>
                  </div>

                  <p className="text-white/70 text-center mb-8">
                    {Careers.Content}
                  </p>
                  <a
                    href={`mailto:${Careers.email}`}
                    className="bg-white dark:bg-darkBlue dark:text-white/70 py-2.5 px-5 text-base text-primary block"
                  >
                    {" "}
                    {Careers.mailText}{" "}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiriesPageScreen;
