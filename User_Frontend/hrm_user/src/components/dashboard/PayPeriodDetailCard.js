import React from "react";
import PayPeriodImg from "../../assets/dashboard/pay-period.png";

const PayPeriodDetailCard = () => {
  return (
    <a href="#" className="w-full">
      <div className="flex flex-col items-start justify-around w-full h-full p-5 ">
        <div className=" rounded-full bg-opacity-75">
          <img className="w-10 h-10" src={PayPeriodImg} alt="pay-period-img" />
        </div>
        <h4 className="text-xl font-semibold text-gray-700">
          Pay Period Details
        </h4>
        <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-3 py-1.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Next
        </button>
      </div>
    </a>
  );
};

export default PayPeriodDetailCard;
