import React from "react";

export const Gender: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#111"
        strokeWidth="4"
        transform="translate(2 2)"
      >
        <path d="M19 8L27 0" />
        <circle cx="11" cy="16" r="11" strokeLinecap="square" />
        <path strokeLinecap="square" d="M19 0L27 0 27 8" />
      </g>
    </svg>
  );
};
