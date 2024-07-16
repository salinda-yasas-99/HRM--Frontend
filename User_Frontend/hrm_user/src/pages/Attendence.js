import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import { GetAttendencesByEmpId } from "../Services/AttendenceService";

const Attendence = () => {
  const [attdences, setAttdences] = useState([
    //   {
    //     date: "01/03/2024",
    //     checkIn: "08:00:00 AM",
    //     checkOut: "17:00:00 PM",
    //     Duration: "08:00:00",
    //     status: "present",
    //   },
    //   {
    //     date: "02/03/2024",
    //     checkIn: "08:00:00 AM",
    //     checkOut: "17:00:00 PM",
    //     Duration: "08:00:00",
    //     status: "leave",
    //   },
    //   {
    //     date: "03/03/2024",
    //     checkIn: "08:00:00 AM",
    //     checkOut: "17:00:00 PM",
    //     Duration: "08:00:00",
    //     status: "present",
    //   },
    //   {
    //     date: "04/03/2024",
    //     checkIn: "08:00:00 AM",
    //     checkOut: "17:00:00 PM",
    //     Duration: "08:00:00",
    //     status: "leave",
    //   },
  ]);

  const fetchAttendence = async () => {
    const fetched = await GetAttendencesByEmpId();
    setAttdences(fetched);
  };

  useEffect(() => {
    fetchAttendence();
  }, []);

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
                        {attItem.attendDate}
                      </td>
                      <td className="px-6 py-4">{attItem.inTime}</td>
                      <td className="px-6 py-4">{attItem.outTime}</td>
                      <td className="px-6 py-4">{attItem.duration}</td>
                      <td className="px-6 py-4">
                        <div>{attItem.status}</div>
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
