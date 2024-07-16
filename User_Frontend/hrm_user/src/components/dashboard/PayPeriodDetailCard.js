import React from "react";
import PayPeriodImg from "../../assets/dashboard/pay-period.png";
import { useNavigate } from "react-router-dom";

const PayPeriodDetailCard = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/payrole");
  };
  return (
    <div
      className="flex flex-col items-start justify-around w-full h-full p-5 cursor-pointer"
      onClick={handleRedirect}
    >
      <div className=" rounded-full bg-opacity-75">
        <img className="w-10 h-10" src={PayPeriodImg} alt="pay-period-img" />
      </div>
      <h4 className="text-xl font-semibold text-gray-700">
        Pay Period Details
      </h4>
    </div>
  );
};

export default PayPeriodDetailCard;
