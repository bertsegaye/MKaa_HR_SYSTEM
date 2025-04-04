import React from "react";

function ReportSvg({ current, isHovered }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13.667V15.9467C1 17.3655 1 18.0744 1.23009 18.6163C1.43249 19.093 1.75521 19.4813 2.15244 19.7242C2.60358 20 3.19447 20 4.37448 20H20M1 13.667V1M1 13.667L5.06743 9.59948L5.07079 9.59624C5.80659 8.86043 6.17521 8.49182 6.5749 8.34209C7.04707 8.16522 7.55568 8.19319 8.01257 8.42064C8.39989 8.61346 8.73952 9.02101 9.41877 9.83612L9.42558 9.8443C10.1154 10.6721 10.4612 11.087 10.8547 11.2794C11.3204 11.5071 11.8389 11.5267 12.3162 11.3367C12.7208 11.1756 13.0904 10.7882 13.8294 10.0123L19.9998 3.53333"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ReportSvg;
