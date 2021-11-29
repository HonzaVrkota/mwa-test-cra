import React from "react";

const DefaulBtn = ({ text, className }) => {
  return (
    <button
      className={`my-8 px-4 py-2 bg-red-200 rounded-lg shadow-md transition-all duration-150 hover:bg-red-600 hover:shadow-2xl hover:text-red-50 ${className}`}
    >
      {text}
    </button>
  );
};

export default DefaulBtn;
