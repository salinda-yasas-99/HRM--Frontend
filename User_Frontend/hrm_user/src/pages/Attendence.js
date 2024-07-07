import React, { useState } from "react";
import Welcome from "../components/Welcome";

const Attendence = () => {
  const [attdences, setAttdences] = useState([
    {
      date: "01/03/2024",
      checkIn: "08:00:00 AM",
      checkOut: "17:00:00 PM",
      Duration: "08:00:00",
      status: "present",
    },
    {
      date: "02/03/2024",
      checkIn: "08:00:00 AM",
      checkOut: "17:00:00 PM",
      Duration: "08:00:00",
      status: "leave",
    },
    {
      date: "03/03/2024",
      checkIn: "08:00:00 AM",
      checkOut: "17:00:00 PM",
      Duration: "08:00:00",
      status: "present",
    },
    {
      date: "04/03/2024",
      checkIn: "08:00:00 AM",
      checkOut: "17:00:00 PM",
      Duration: "08:00:00",
      status: "leave",
    },
  ]);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Attendance" />
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Check In
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Check Out
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Duration
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {attdences.map((attItem, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {attItem.date}
                      </td>
                      <td className="px-6 py-4">{attItem.checkIn}</td>
                      <td className="px-6 py-4">{attItem.checkOut}</td>
                      <td className="px-6 py-4">{attItem.Duration}</td>
                      <td className="px-6 py-4">
                        <div
                          className={`${
                            attItem.status === "present"
                              ? "bg-[#bbf2b2]"
                              : attItem.status === "leave"
                              ? "bg-[#f5a2a2]"
                              : ""
                          } flex justify-center py-1 rounded-lg`}
                        >
                          {attItem.status}
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

export default Attendence;
