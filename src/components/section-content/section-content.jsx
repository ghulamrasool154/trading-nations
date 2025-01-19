"use client";
import React from "react";
import MainHeading from "../abs-headings/main-heading";
import SubHeading from "../abs-headings/sub-heading";
import DarkHoverBtn from "../ui/button/darkHoverBtn";
import Image from "next/image";

const SectionContent = ({ title, subtitle, content, button }) => {
  return (
    <section className="">
      <MainHeading color="text-primary dark:text-darkBlue">{title}</MainHeading>
      <SubHeading color="text-primary dark:text-darkBlue">
        {subtitle}
      </SubHeading>
      {button && (
        <DarkHoverBtn btnLink={button.link}>{button.text}</DarkHoverBtn>
      )}
      {content && (
        <ul className="text-secondary mb-6 mt-10 w-full">
          {content.map((item, index) => {
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
                    {item.Section}
                  </SubHeading>
                  <p className="font-rubik mb-5 text-[16px] font-normal text-secondary">
                    {item.Description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default SectionContent;
