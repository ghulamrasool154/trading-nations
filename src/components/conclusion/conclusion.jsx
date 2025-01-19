import Image from "next/image";
import React from "react";
import SubHeading from "../abs-headings/sub-heading";

const ConclusionSection = ({ heading, summary }) => {
  return (
    <section className=" mx-auto">
      <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-20     p-8  overflow-hidden">
        <div className="p-5 shadow-shadow-cal dark:bg-primary">
          <Image
            src="/assets/gics.svg"
            width={100}
            height={100}
            alt="gics"
            className="dark:brightness-200"
          />

          <div className="text-primary dark:text-white my-2.5">
            <SubHeading>{heading}</SubHeading>
          </div>
          <p className="text-secondary/70 dark:text-white/70  mb-8">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
