import * as React from "react";
const CloseIconSVG = (props) => (
  <svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);
export default CloseIconSVG;
