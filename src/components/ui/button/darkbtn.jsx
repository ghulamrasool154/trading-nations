import React from "react";

const ButtonUI = ({ children, classes , btnLink}) => {
  let cls = classes ?? classes;

  const sendChatBotMessage = (message) => {
    const iframe = document.getElementById("deep-thought-iframe");
    if (iframe) {
      iframe?.contentWindow?.postMessage(
        { type: "deep-thought-send-message", value: message },
        "*"
      );
    }
  };
  

  return (
    <button
    onClick={() => sendChatBotMessage(btnLink)}
      className={
        "cursor-pointer mw-4:text-[12px]  inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-darkBlue text-white border border-white rounded-full hover:bg-btnHoverColor/10 hover:text-darkBlue hover:border-darkBlue h-10 px-4 py-2 capitalize mw-7:py-1 mw-7:px-2.5 mw-7:h-fit  " +
        cls
      }
    >
      {children}
    </button>
  );
};

export default ButtonUI;
