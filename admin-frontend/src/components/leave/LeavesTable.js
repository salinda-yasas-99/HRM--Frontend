import React from "react";

const LeavesTable = ({
  pendingLeaves,
  handleApproveClick,
  handleRejectClick,
  setSelectedId,
}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right">
      <thead className="text-xs text-white uppercase bg-[#6a44d9]">
        <tr>
          <th scope="col" className="px-6 py-5">
            Employee
          </th>
          <th scope="col" className="px-6 py-5">
            Leave Type
          </th>
          <th scope="col" className="px-6 py-5">
            From
          </th>
          <th scope="col" className="px-6 py-5">
            To
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
        {pendingLeaves.map((leave) => {
          return (
            <tr
              key={leave}
              className="bg-white border-b text-gray-900 font-medium"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                {leave.employeeName}
              </td>
              <td className="px-6 py-4">{leave.leaveTypeName}</td>
              <td className="px-6 py-4">{leave.startDate}</td>
              <td className="px-6 py-4">{leave.endDate}</td>
              <td className="px-6 py-4">{leave.reason}</td>
              <td className="px-6 py-4">
                <button
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  onClick={() => {
                    setSelectedId(leave.leaveApplicationFormId);
                    handleApproveClick();
                  }}
                >
                  Approve
                </button>
                <button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  onClick={() => {
                    setSelectedId(leave.leaveApplicationFormId);
                    handleRejectClick();
                  }}
                >
                  Reject
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LeavesTable;
