import React, { useState } from "react";
import Welcome from "../components/Welcome";
import LeaveForm from "../components/LeaveForm";

const Leaves = () => {
  const [leaves, setLeaves] = useState([
    {
      Type: "Annul leaves",

      Reason: "",
      From: "2020-02-24",
      To: "2020-02-25",
      NoOfDays: 1,
      Status: "Pending",
    },
    {
      Type: "Annul leaves",
      Reason: "",
      From: "2020-02-24",
      To: "2020-02-25",
      NoOfDays: 1,
      Status: "Approved",
    },
    {
      Type: "Annul leaves",
      Reason: "",
      From: "2020-02-24",
      To: "2020-02-25",
      NoOfDays: 1,
      Status: "Rejected",
    },
    {
      Type: "Annul leaves",

      Reason: "",
      From: "2020-02-24",
      To: "2020-02-25",
      NoOfDays: 1,
      Status: "Pending",
    },
    {
      Type: "Annul leaves",

      Reason: "",
      From: "2020-02-24",
      To: "2020-02-25",
      NoOfDays: 1,
      Status: "Pending",
    },
    {
      Type: "Annul leaves",

      Reason: "",
      From: "2020-02-24",
      To: "2020-02-25",
      NoOfDays: 1,
      Status: "Pending",
    },
  ]);

  const [showLeaveForm, setShowLeaveForm] = useState(false);

  const handleApplyLeaveClick = () => {
    setShowLeaveForm(true);
  };

  const handleCloseLeaveForm = () => {
    setShowLeaveForm(false);
  };

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px] pb-8">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Leaves" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] gap-x-[90px]">
          <div className="bg-white flex rounded-xl w-[15rem] h-[10rem] flex flex-col justify-center items-center">
            <h1 className="font-medium text-[30px]">Annual Leaves</h1>
            <p className="font-medium text-[20px]">10</p>
          </div>
          <div className="bg-white flex rounded-xl w-[15rem] h-[10rem] flex flex-col justify-center items-center">
            <h1 className="font-medium text-[30px]">Casual Leaves</h1>
            <p className="font-medium text-[20px]">10</p>
          </div>
          <div className="bg-white flex rounded-xl w-[15rem] h-[10rem] flex flex-col justify-center items-center">
            <h1 className="font-medium text-[30px]">Sick Leaves</h1>
            <p className="font-medium text-[20px]">10</p>
          </div>
          <div className="bg-white flex rounded-xl w-[15rem] h-[10rem] flex flex-col justify-center items-center">
            <h1 className="font-medium text-[30px]">Unpaid Leaves</h1>
            <p className="font-medium text-[20px]">10</p>
          </div>
        </div>
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium"
            onClick={handleApplyLeaveClick}
          >
            Apply leave
          </div>
        </div>
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Type
                  </th>
                  <th scope="col" class="px-6 py-5">
                    From
                  </th>
                  <th scope="col" class="px-6 py-5">
                    To
                  </th>
                  <th scope="col" class="px-6 py-5">
                    No of Days
                  </th>
                  <th scope="col" class="px-6 py-5">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaves.map((appliedLeaves, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appliedLeaves.Type}
                      </td>
                      <td className="px-6 py-4">{appliedLeaves.From}</td>
                      <td className="px-6 py-4">{appliedLeaves.To}</td>
                      <td className="px-6 py-4">{appliedLeaves.NoOfDays}</td>
                      <td className="px-6 py-4">
                        <div
                          className={`${
                            appliedLeaves.Status === "Pending"
                              ? "bg-[#facc96]"
                              : appliedLeaves.Status === "Approved"
                              ? "bg-[#bbf2b2]"
                              : appliedLeaves.Status === "Rejected"
                              ? "bg-[#f5a2a2]"
                              : ""
                          } flex justify-center py-1 rounded-lg`}
                        >
                          {appliedLeaves.Status}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {showLeaveForm && <LeaveForm closeModal={handleCloseLeaveForm} />}
      </div>
    </div>
  );
};

export default Leaves;
