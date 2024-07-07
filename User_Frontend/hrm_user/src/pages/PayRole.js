import React, { useState } from "react";
import Welcome from "../components/Welcome";

const PayRole = () => {
  const [payRole, setPayRole] = useState([
    {
      payMonth: "January",
      date: "2024-03-05",
      IssuedDate: "2024-06-01",
      basicAmount: "100,000",
    },
    {
      payMonth: "February",
      date: "2024-03-05",
      IssuedDate: "2024-06-01",
      basicAmount: "100,000",
    },
    {
      payMonth: "March",
      date: "2024-03-05",
      IssuedDate: "2024-06-01",
      basicAmount: "100,000",
    },
    {
      payMonth: "April",
      date: "2024-03-05",
      IssuedDate: "2024-06-01",
      basicAmount: "100,000",
    },
  ]);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="PayRole" />
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Pay Month
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Issued date
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Basic Amount
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {payRole.map((payItem, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {payItem.payMonth}
                      </td>
                      <td className="px-6 py-4">{payItem.date}</td>
                      <td className="px-6 py-4">{payItem.IssuedDate}</td>
                      <td className="px-6 py-4">{payItem.basicAmount}</td>
                      <td className="px-6 py-4">
                        <div className="bg-[#497cc9] flex justify-center py-[5px] rounded-md">
                          View
                        </div>
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

export default PayRole;
