import React, { useEffect, useState } from "react";
import { getEmployeeDetails } from "../Services/RestApiCalls";

const Welcome = (props) => {
  const [employee, setemployee] = useState({});

  const fetchEmployee = async () => {
    const fetched = await getEmployeeDetails();
    setemployee(fetched);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <div className="flex flex-row justify-between items-center bg-white md:w-[96.4%] md:h-[90px] text-[#013a63] text-2xl font-semibold rounded-xl pl-4">
      <div className=""> {employee.firstName + " " + employee.lastName}</div>
      <div className="pr-8">{props.tab}</div>
    </div>
  );
};

export default Welcome;
