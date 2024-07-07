import React from "react";

const TextBox = (props) => {
  return (
    <div>
      {/* <label className="block mb-2 text-sm">{props.label}</label> */}
      <input
        type="text"
        id={props.label}
        className="bg-[#e3f2fd] text-gray-900 text-sm rounded-lg block w-[300px] p-1 border-gray-600 placeholder-gray-400"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  );
};

export default TextBox;
