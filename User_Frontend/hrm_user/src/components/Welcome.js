import React from "react";

const Welcome = (props) => {
  return (
    <div className="flex flex-row justify-between items-center bg-white md:w-[96.4%] md:h-[90px] text-[#013a63] text-2xl font-semibold rounded-xl pl-4">
      <div className=""> {props.name}</div>
      <div className="pr-8">{props.tab}</div>
    </div>
  );
};

export default Welcome;
