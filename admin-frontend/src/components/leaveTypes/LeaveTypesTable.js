import React from "react";

const LeaveTypesTable = ({
  allLeaveTypes,
  setIsEditMode,
  setLeaveTypeModalData,
  handleOpenAddLeaveTypeModal,
  handleOpenDeleteModal,
}) => {
  return (
    <table class="w-full text-sm text-left rtl:text-right">
      <thead class="text-xs text-white uppercase bg-[#6a44d9]">
        <tr>
          <th scope="col" class="px-6 py-5">
            Leave Type
          </th>
          <th scope="col" class="px-6 py-5">
            No of Leaves
          </th>
          <th scope="col" class="px-6 py-5">
            action
          </th>
        </tr>
      </thead>
      <tbody>
        {allLeaveTypes?.map((leaveType) => (
          <tr
            key={leaveType.leaveId}
            className="bg-white border-b text-gray-900 font-medium"
          >
            <td className="px-6 py-4 whitespace-nowrap">
              {leaveType.leaveTypeName}
            </td>
            <td className="px-6 py-4">{leaveType.noOfLeaves}</td>
            <td className="flex px-6 py-4 gap-x-1">
              {/* <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                onClick={() => {
                  setIsEditMode(true);
                  setLeaveTypeModalData(leaveType);
                  handleOpenAddLeaveTypeModal();
                }}
              >
                Update
              </button> */}
              <button
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={() => {
                  setLeaveTypeModalData(leaveType);
                  handleOpenDeleteModal();
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaveTypesTable;
