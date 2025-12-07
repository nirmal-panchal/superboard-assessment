import React from "react";

const Strips = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height={21}
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="checkeredPattern"
          x="0"
          y="0"
          width="20.166"
          height="20.166"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="10.083" height="10.083" fill="#49009C" opacity="0.5" />
          <rect x="10.083" y="10.083" width="10.083" height="10.083" fill="#49009C" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="21" fill="url(#checkeredPattern)" />
    </svg>
  );
};

export default Strips;
