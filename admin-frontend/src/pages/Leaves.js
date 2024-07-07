import React, { useState } from "react";
import Welcome from "../components/Welcome";

const Leaves = () => {
  const [leaveForms, setLeaveForms] = useState([
    {
      Employee: "Lakimini Theekshana",
      LeaveType: "Casual Leave",
      From: "2024-06-19",
      To: "2024-06-20",
      Reason: "sick",
    },
    {
      Employee: "Amali Theekshana",
      LeaveType: "Casual Leave",
      From: "2024-06-19",
      To: "2024-06-20",
      Reason: "sick",
    },
    {
      Employee: "Samadhi Theekshana",
      LeaveType: "Casual Leave",
      From: "2024-06-19",
      To: "2024-06-20",
      Reason: "sick",
    },
  ]);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Leaves" />

        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Employee
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Leave Type
                  </th>

                  <th scope="col" class="px-6 py-5">
                    From
                  </th>
                  <th scope="col" class="px-6 py-5">
                    To
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Reason
                  </th>
                  <th scope="col" class="px-6 py-5">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaveForms.map((leavf, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {leavf.Employee}
                      </td>
                      <td className="px-6 py-4">{leavf.LeaveType}</td>
                      <td className="px-6 py-4">{leavf.From}</td>
                      <td className="px-6 py-4">{leavf.To}</td>
                      <td className="px-6 py-4">{leavf.Reason}</td>
                      <td className="px-6 py-4">
                      {" "}  
                        <select
                          id="category"
                          className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option selected="">Pending</option>
                          <option value="TV">Accpeted</option>
                          <option value="PC">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaves;
