import React from "react";

const AttendanceTable = ({ employeeAttendance }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right">
      <thead className="text-xs text-white uppercase bg-[#6a44d9]">
        <tr>
          <th scope="col" className="px-6 py-5">
            Date
          </th>
          <th scope="col" className="px-6 py-5">
            Check In
          </th>
          <th scope="col" className="px-6 py-5">
            Check Out
          </th>
          <th scope="col" className="px-6 py-5">
            Duration
          </th>
          <th scope="col" className="px-6 py-5">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {employeeAttendance?.map((attItem, key) => (
          <tr
            id={key}
            key={attItem.attendanceId}
            className="bg-white border-b text-gray-900 font-medium"
          >
            <td className="px-6 py-4 whitespace-nowrap">
              {attItem.attendDate}
            </td>
            <td className="px-6 py-4">{attItem.inTime || "-"}</td>
            <td className="px-6 py-4">{attItem.outTime || "-"}</td>
            <td className="px-6 py-4">{attItem.duration || "-"}</td>
            <td className="px-6 py-4">
              <div
                className={`${
                  attItem.status === "checkingIn"
                    ? "bg-green-800"
                    : attItem.status === "checkedOut"
                    ? "bg-red-800"
                    : "bg-gray-600"
                } flex justify-center p-2 rounded-lg text-white`}
              >
                {attItem.status}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
