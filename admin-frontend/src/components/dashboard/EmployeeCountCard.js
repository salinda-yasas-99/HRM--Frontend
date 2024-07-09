import React from "react";
import EmployeeImg from "../../assets/employees.png";

const EmployeeCountCard = ({ empCount }) => {
  return (
    <a href="/admin/employees" className="w-full">
      <div className="flex items-center justify-around w-full h-full p-3">
        <div className="p-2 rounded-full bg-indigo-600 bg-opacity-75">
          <img className="w-10 h-10" src={EmployeeImg} alt="employee-img" />
        </div>
        <div className="ml-3">
          <h4 className="text-4xl font-semibold text-gray-700">{empCount}</h4>
          <div className="text-gray-500 text-sm">Employees</div>
        </div>
      </div>
    </a>
  );
};

export default EmployeeCountCard;
