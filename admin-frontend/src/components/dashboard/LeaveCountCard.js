import React from "react";
import LeaveImg from "../../assets/leaves-icon.png";

const LeaveCountCard = ({ leaveCount }) => {
  return (
    <a href="/admin/leaves" className="w-full">
      <div className="flex items-center justify-around w-full h-full p-3">
        <div className="p-2 rounded-full bg-indigo-600 bg-opacity-75">
          <img className="w-10 h-10" src={LeaveImg} alt="leave-img" />
        </div>
        <div className="ml-3">
          <h4 className="text-4xl font-semibold text-gray-700">{leaveCount}</h4>
          <div className="text-gray-500 text-sm">Leave Applications</div>
        </div>
      </div>
    </a>
  );
};

export default LeaveCountCard;
