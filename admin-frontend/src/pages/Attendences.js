import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import { getAllEmployees } from "../Services/RestApiCalls";
import { GetAttendencesByEmpId } from "../Services/AttedenceApi";

const Attendences = () => {
  const [employeess, setEmployees] = useState();
  const [empId, setEmpId] = useState(null);
  const [attdences, setAttdences] = useState();

  const fetchAttendences = async () => {
    const fetched = await GetAttendencesByEmpId(empId);
    setAttdences(fetched);
  };

  useEffect(() => {
    if (empId != null) {
      fetchAttendences();
    }
  }, []);

  const fetchEmployees = async () => {
    const fetched = await getAllEmployees();
    setEmployees(fetched);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  //   [
  //     {
  //         "attendanceId": 1,
  //         "employeeId": 6,
  //         "attendDate": "2024-07-16",
  //         "inTime": "23:01:11",
  //         "outTime": "23:01:23",
  //         "status": "checkedOut",
  //         "duration": "00:00:12"
  //     }
  // ]

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Attendance" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end gap-x-10">
          <div>
            {/* <SearchableSelect
              onChange={(selected) => {
                setDepartment((prev) => ({
                  ...prev,
                  departmentHeadName: selected?.label || "",
                  departmentHeadId: selected?.value || "",
                }));
              }}
              options={employeeOptions}
              defaultValue={department?.departmentHeadName}
            /> */}
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
                {attdences !== undefined ? (
                  attdences.map((attItem, key) => {
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
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 text-center text-gray-500 font-bold"
                    >
                      Currently no attdences
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendences;
