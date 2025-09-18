import React, { useRef } from "react";

const Button = ({ label, className }) => {

    console.log(label)
  return (
    <button
      className={`relative overflow-hidden bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${className}`}
    >
      {label}
    </button>
  );
};
export default Button;