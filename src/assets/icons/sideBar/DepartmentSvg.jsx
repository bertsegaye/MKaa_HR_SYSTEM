import React from "react";

function DepartmentSvg({ current, isHovered }) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.66666 26.5833H19.3333C24.1908 26.5833 25.0608 24.6379 25.3146 22.2696L26.2208 12.6029C26.5471 9.65458 25.7012 7.25 20.5417 7.25H8.45833C3.29874 7.25 2.45291 9.65458 2.77916 12.6029L3.68541 22.2696C3.93916 24.6379 4.80916 26.5833 9.66666 26.5833Z"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66669 7.24996V6.28329C9.66669 4.14454 9.66669 2.41663 13.5334 2.41663H15.4667C19.3334 2.41663 19.3334 4.14454 19.3334 6.28329V7.24996"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9166 15.7083V16.9167C16.9166 16.9288 16.9166 16.9288 16.9166 16.9408C16.9166 18.2579 16.9046 19.3333 14.5 19.3333C12.1075 19.3333 12.0833 18.27 12.0833 16.9529V15.7083C12.0833 14.5 12.0833 14.5 13.2916 14.5H15.7083C16.9166 14.5 16.9166 14.5 16.9166 15.7083Z"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.1604 13.2916C23.3692 15.3216 20.1792 16.53 16.9167 16.9408"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.16583 13.6179C5.88458 15.4788 8.95375 16.6025 12.0833 16.9529"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DepartmentSvg;
