import React from "react";
import AttendanceImg from "../../assets/dashboard/attendance.png";
import { useNavigate } from "react-router-dom";

const MyAttendenceCard = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/attendance");
  };
  return (
    <div
      className="flex flex-col items-start justify-around w-full h-full p-5 cursor-pointer"
      onClick={handleRedirect}
    >
      <div className=" rounded-full bg-opacity-75">
        <img className="w-10 h-10" src={AttendanceImg} alt="attendance-img" />
      </div>
      <h4 className="text-xl font-semibold text-gray-700">My Attendance</h4>
    </div>
  );
};

export default MyAttendenceCard;
