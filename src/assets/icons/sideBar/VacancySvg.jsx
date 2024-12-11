import React from "react";

function VaccancySvg({ current, isHovered }) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.88889 9.86366H13.2222M15.6667 15.9748L23 23.3081M9.55556 18.4192C4.83045 18.4192 1 14.5888 1 9.86366C1 5.13856 4.83045 1.30811 9.55556 1.30811C14.2807 1.30811 18.1111 5.13856 18.1111 9.86366C18.1111 14.5888 14.2807 18.4192 9.55556 18.4192Z"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default VaccancySvg;
