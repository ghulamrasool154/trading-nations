import React from "react";
import SubHeading from "../abs-headings/sub-heading";
import Image from "next/image";

const HomeCards = (props) => {
  const { cardName, paragraph, icon } = props;
  return (
    <div className="bg-darkBlue dark:bg-primary flex flex-col relative rounded-md border text-start border-foreground/30  p-6 h-full ">
      <div className="mb-[20px]">
        <Image
          src={icon}
          height={50}
          width={50}
          alt={cardName}
          className="h-[50px] w-[50px] rounded-full"
        />
      </div>
      <SubHeading color="text-white">{cardName}</SubHeading>
      <p className="mt-1 mb-8 text-white font-rubik text-[16px] font-normal ">
        {paragraph}
      </p>
    </div>
  );
};

export default HomeCards;
