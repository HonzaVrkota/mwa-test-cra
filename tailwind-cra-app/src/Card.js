import React, { useEffect } from "react";

const Card = ({ completed, content }) => {
  useEffect(() => {
    console.log("Start CARD.JS");
  }, []);
  return (
    <div className="w-2/3 bg-white h-auto tracking-wide mb-14 border border-black-800 mx-1 rounded-lg relative">
      <div className="small-banner w-1 h-20 bg-blue-600 absolute rounded-tl-md"></div>
      <h5 className="text-2xl font-semibold pl-6 pt-6 pr-6 pb-2">
        {completed ? "Kompletní" : "Nekompletní"}
      </h5>
      <p className="text-md font-regular p-6 pt-2 text-gray-500">{content}</p>
    </div>
  );
};

export default Card;
