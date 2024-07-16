import React, { useState } from "react";
import CheckInImg from "../../assets/dashboard/check-in.png";
import { AddCheckInAndCheckout } from "../../Services/AttendenceService";

const CheckInAndOutCard = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const [attedence, setAttendance] = useState({
    employeeId: "",
    attendDate: "",
    time: "",
  });

  const handleCheckInOut = async () => {
    const status = isCheckedIn ? "checkout" : "checkin";
    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = String(currentDateTime.getMonth() + 1).padStart(2, "0");
    const day = String(currentDateTime.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = currentDateTime.toTimeString().split(" ")[0];

    const updatedAttendance = {
      ...attedence,
      attendDate: formattedDate,
      time: formattedTime,
    };

    setAttendance(updatedAttendance);
    await AddCheckInAndCheckout(updatedAttendance, status);
    setIsCheckedIn(!isCheckedIn);
  };

  return (
    <div
      className="flex flex-col items-start justify-around w-full h-full p-5 cursor-pointer"
      onClick={handleCheckInOut}
    >
      <div className="rounded-full bg-opacity-75">
        <img className="w-10 h-10" src={CheckInImg} alt="check-in-img" />
      </div>
      <h4 className="text-xl font-semibold text-gray-700">
        {isCheckedIn ? "Check Out" : "Check In"}
      </h4>
    </div>
  );
};

export default CheckInAndOutCard;
