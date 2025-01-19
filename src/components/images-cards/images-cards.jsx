import Image from "next/image";
import React, { useRef, useEffect } from "react";
import "./images-cards.css";
const ImagesCards = (props) => {
  const canvasRef = useRef(null);
  const { index, texthovered, imgShown, icons, btnLink, description } = props;

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   // Set canvas size
  //   canvas.width = 274;
  //   canvas.height = 207;

  //   // Set fill style for the dots
  //   ctx.fillStyle = "rgba(135, 206, 235, 0.6)"; // Light blue color with slight transparency

  //   // Draw uniform dots with even spacing
  //   for (let x = 0; x < canvas.width; x += 8) {
  //     for (let y = 0; y < canvas.height; y += 8) {
  //       ctx.beginPath();
  //       ctx.arc(x, y, 1.5, 0, Math.PI * 1, false); // Smaller 1.5 radius for dots
  //       ctx.fill();
  //     }
  //   }
  // }, []);

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
    <div
      className="
        flex
        border
        border-1
        border-secondary
        rounded-xl
        overflow-hidden
        h-[200px]
        items-center
        justify-center
        w-[270px]  
        relative
        text-foreground
        group
        transition duration-300 ease-in-out
        hover:border-opacity-100
        border-foreground/30
        hover:border-accent
        bg-background/20
        mw-5:w-[360px]
        mw-4:w-[325px]
        card-image-wrapper
      "
      onClick={() => sendChatBotMessage(btnLink)}
    >
      {/* Micro pixel canvas */}
      {/* {index !== 0 &&  */}
      {/* <canvas
        ref={canvasRef}
        className="absolute h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
      
       /> */}
      {/* } */}

      {/* Image transition container */}
      <div className="absolute h-full w-full flex flex-col items-center justify-center p-2 pointer-events-none">
        {/* Background image - Initially hidden */}
        {/* {index === 0 && 
       
       <Image
          src={imgShown}
          alt="Background"
          width={274}
          height={207}
          className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        /> 
       } */}

        {/* Shown image - Visible by default */}
        <Image
          src={imgShown}
          alt="Shown Image"
          width={274}
          height={207}
          className="absolute h-full w-full object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0 img-one"
        />
      </div>

      {/* Icons and text hover section */}
      <div className="absolute h-full w-full flex flex-col items-center justify-center p-2 pointer-events-none ">
        <Image
          src={icons}
          alt="Icon"
          width={32}
          height={32}
          className={`w-8 h-8 rounded-full pointer-events-none transition-transform duration-300 group-hover:-translate-y-2   group-hover:brightness-10 ${
            index === 0 && "group-hover:brightness-[4] brightness-[4]"
          }`}
        />
        <div
          className={`font-rubik text-sm text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out  text-white `}
        >
          {texthovered}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagesCards;
