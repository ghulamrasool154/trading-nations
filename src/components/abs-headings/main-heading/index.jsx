import react from "react";

const MainHeading = ({ children, color }) => {
  return (
    <h4
      className={`font-medium text-[36px] mw-10:text-[30px] mw-7:text-[26px] leading-[40px] ${color} font-rubik`}
    >
      {children}
    </h4>
  );
};

export default MainHeading;
