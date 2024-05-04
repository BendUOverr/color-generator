import React, { useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hex = `#${hexColor}`;

  const copyHex = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  return (
    <div
      className={`w-[150px] h-[150px] p-3 font-mono ${
        index > 10 && "text-zinc-100"
      } relative group`}
      style={{ backgroundColor: `rgb(${rgb})` }}
    >
      <p>{weight}%</p>
      <div className="flex sm:gap-5 gap-3">
        <p>{hex}</p>
        <button className={`hidden group-hover:block`} onClick={copyHex}>
          Copy
        </button>
      </div>
      {alert && (
        <div className="bg-sky-500 text-white p-4 fixed w-fit top-0 left-1/2 transform -translate-x-1/2 -translate-y-0 opacity-50">
          Copied
        </div>
      )}
    </div>
  );
};

export default SingleColor;
