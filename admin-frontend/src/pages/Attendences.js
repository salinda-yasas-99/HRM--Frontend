import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import { getAllEmployees } from "../Services/RestApiCalls";

const Attendences = () => {
  const [employeess, setEmployees] = useState();
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

  useEffect(() => {
    const fetchEmployees = async () => {
      const fetchedEmployees = await getAllEmployees();
      setEmployees(fetchedEmployees);
    };

    fetchEmployees();
  }, []);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Attendance" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end gap-x-10">
          {/* search */}
          {/* <div>
            <form className="max-w-md mx-auto">
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-[300px] p-4 ps-10 text-sm text-white font-bold border border-gray-300 rounded-lg bg-[#013a63] focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search employee"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div> */}
          <div>
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-[#013a63] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-3"
              >
                <option selected>Select Employee</option>
                {/* <option value="1">lakmini@gmail.com</option>
                <option value="2">kamal@gmail.com</option>
                <option value="3">amal@gmail.com</option> */}
                {employeess !== undefined ? (
                  employeess.map((emp, key) => {
                    return (
                      // <tr
                      //   id={key}
                      //   key={emp.id} // Add a key prop for React's list rendering
                      //   className="bg-white border-b text-gray-900 font-medium"
                      // >
                      //   <td className="px-6 py-4 whitespace-nowrap">
                      //     {emp.userName}
                      //   </td>
                      //   <td className="px-6 py-4">{emp.firstName}</td>
                      //   <td className="px-6 py-4">{emp.position}</td>
                      //   <td className="px-6 py-4">{emp.department}</td>
                      //   <td className="px-6 py-4">{emp.workEmail}</td>
                      //   <td className="px-6 py-4">
                      //     <div className="bg-[#0c8ce9] flex justify-center py-[5px] rounded-md cursor-pointer">
                      //       View
                      //     </div>
                      //   </td>
                      //   <td className="px-6 py-4">
                      //     <div className="bg-[#ed1b24] flex justify-center py-[5px] rounded-md cursor-pointer">
                      //       Delete
                      //     </div>
                      //   </td>
                      // </tr>
                      <option id={key} value={emp.employeeId}>
                        {emp.workEmail}
                      </option>
                    );
                  })
                ) : (
                  <option value="">No employees</option>
                )}
              </select>
            </form>
          </div>
          <div>
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-[#013a63] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-3"
              >
                <option selected>Month</option>
                <option value="US">January</option>
                <option value="CA">February</option>
                <option value="FR">March</option>
                <option value="DE">April</option>
                <option value="DE">May</option>
              </select>
            </form>
          </div>
        </div>
        <div className="attendence-details mt-8">
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

export default Attendences;
