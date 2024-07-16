import React from "react";

const LeavesTable = ({ leaves }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right">
      <thead className="text-xs text-white uppercase bg-[#6a44d9]">
        <tr>
          <th scope="col" className="px-6 py-5">
            Type
          </th>
          <th scope="col" className="px-6 py-5">
            From
          </th>
          <th scope="col" className="px-6 py-5">
            To
          </th>
          <th scope="col" className="px-6 py-5">
            No of Days
          </th>
          <th scope="col" className="px-6 py-5">
            Reason
          </th>
          <th scope="col" className="px-6 py-5">
            status
          </th>
        </tr>
      </thead>
      <tbody>
        {leaves?.map((leave, key) => (
          <tr
            key={leave.leaveApplicationFormId}
            className="bg-white border-b text-gray-900 font-medium"
          >
            <td className="px-6 py-4 whitespace-nowrap">
              {leave.leaveTypeName}
            </td>
            <td className="px-6 py-4">{leave?.startDate}</td>
            <td className="px-6 py-4">{leave?.endDate}</td>
            <td className="px-6 py-4">{leave?.noOfDays}</td>
            <td className="px-6 py-4">{leave?.reason}</td>
            <td className="px-6 py-4">
              <div
                className={`${
                  leave?.approvedStatus === "Pending"
                    ? "bg-yellow-500"
                    : leave?.approvedStatus === "Approved"
                    ? "bg-green-800"
                    : leave?.approvedStatus === "Rejected"
                    ? "bg-red-800"
                    : "bg-gray-600"
                } flex justify-center py-1 rounded-lg text-white`}
              >
                {leave?.approvedStatus}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeavesTable;
