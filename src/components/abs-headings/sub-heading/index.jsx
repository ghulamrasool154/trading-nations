import react from "react";

const SubHeading = ({ color, children }) => {
  return (
    <h2
      className={`text-xl mw-10:text-[18px] mw-7:text-[16px] ${color} font-semibold mb-2`}
    >
      {children}
    </h2>
  );
};

export default SubHeading;
