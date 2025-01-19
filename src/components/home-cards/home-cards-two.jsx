import React from "react";
import SubHeading from "../abs-headings/sub-heading";

const HomeCardsTwo = (props) => {
  const { cardName, paragraph, value } = props;
  return (
    <div className="bg-darkBlue dark:bg-primary flex flex-col relative rounded-md border text-start border-foreground/30  p-6 h-full ">
      <SubHeading color="text-white">{cardName}</SubHeading>
      <p className="mt-1 mb-8 text-white font-rubik text-[16px] font-semibold ">
        {value}
      </p>

      <p className="mt-1 mb-8 text-white font-rubik text-[16px] font-normal ">
        {paragraph}
      </p>
    </div>
  );
};

export default HomeCardsTwo;
