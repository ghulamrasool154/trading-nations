import React from "react";

const LightBtn = ({ children, classes, btnLink }) => {
  const sendChatBotMessage = (message) => {
    const iframe = document.getElementById("deep-thought-iframe");
    if (iframe) {
      iframe?.contentWindow?.postMessage(
        { type: "deep-thought-send-message", value: message },
        "*"
      );
    }
  };

  let cls = classes ?? classes;
  return (
    <button
      onClick={() => sendChatBotMessage(btnLink)}
      className={
        "cursor-pointer mw-4:text-[12px]  inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-backgroundClr text-darkBlue border border-darkBlue rounded-full hover:bg-darkBlue hover:text-white hover:border-white h-10 px-4 py-2 capitalize mw-7:py-1 mw-7:px-2.5 mw-7:h-fit  " +
        cls
      }
    >
      {children}
    </button>
  );
};

export default LightBtn;
