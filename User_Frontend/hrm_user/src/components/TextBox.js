import React from "react";

const TextBox = (props) => {
  return (
    <div>
      <label className="block mb-2 text-sm">{props.label}</label>
      <input
        type="text"
        id={props.label}
        className="bg-[#fff] border text-gray-900 text-sm rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-400"
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default TextBox;
