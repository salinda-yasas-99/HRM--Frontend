import React from "react";
import LeavesImg from "../../assets/dashboard/leaves.png";
import { useNavigate } from "react-router-dom";

const MyLeavesCard = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/leaves");
  };
  return (
    <div
      className="flex flex-col items-start justify-around w-full h-full p-5 cursor-pointer"
      onClick={handleRedirect}
    >
      <div className=" rounded-full bg-opacity-75">
        <img className="w-10 h-10" src={LeavesImg} alt="leaves-img" />
      </div>
      <h4 className="text-xl font-semibold text-gray-700">My Leaves</h4>
    </div>
  );
};

export default MyLeavesCard;
