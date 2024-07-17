import React, { useEffect, useState } from "react";
import { getEmployeeDetailsAdmin } from "../Services/RestApiCalls";

const Welcome = (props) => {
  const [employee, setemployee] = useState();

  const fetchEmployee = async () => {
    const fetched = await getEmployeeDetailsAdmin();
    setemployee(fetched);
  };

  useEffect(() => {
    fetchEmployee();
    console.log("this is emp in admin", employee);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center bg-white md:w-[96.4%] md:h-[90px] text-[#013a63] text-2xl font-semibold rounded-xl pl-4">
      <div>
        {`${
          (employee?.firstName ?? "First Name") +
          " " +
          (employee?.lastName ?? "Last Name")
        }`}
      </div>

      <div className="pr-8">{props.tab}</div>
    </div>
  );
};

export default Welcome;
