"use client";
import React from "react";
import HeroHeading from "../abs-headings/hero-heading";
import SubHeading from "../abs-headings/sub-heading";
import DarkHoverBtn from "../ui/button/darkHoverBtn";

const HeroSection = ({ title, subtitle, content, button }) => {
  return (
    <section className="section-hero mw-10:mb-10 mb-20 text-center max-w-3xl w-full mx-auto">
      <HeroHeading>{title}</HeroHeading>

      {subtitle && (
        <SubHeading color="text-primary dark:text-darkBlue">
          {subtitle}
        </SubHeading>
      )}
      {content && <p className="text-secondary mb-6 w-full">{content}</p>}
      {button && (
        <DarkHoverBtn btnLink={button.link}>{button.text}</DarkHoverBtn>
      )}
    </section>
  );
};

export default HeroSection;
