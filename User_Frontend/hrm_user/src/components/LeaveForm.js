import React, { useEffect, useState } from "react";

const LeaveForm = ({
  closeModal,
  applyForLeave,
  leaveTypes,
  leaveFormData,
  setLeaveFormData,
}) => {
  const [maxLeaves, setMaxLeaves] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedLeaveData = {
      ...leaveFormData,
      //startDate: new Date(leaveFormData.startDate).toISOString(),
      startDate: leaveFormData.startDate,
      //endDate: new Date(leaveFormData.endDate).toISOString(),
      endDate: leaveFormData.endDate,
    };
    applyForLeave(formattedLeaveData);
  };

  return (
    <div
      id="leave-form"
      tabIndex="-1"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow border-2 border-gray-600">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Apply Leave
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
              data-modal-toggle="crud-modal"
              onClick={closeModal}
            >
              <svg
                className="w-4 h-4 text-red-700"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Leave Type
                </label>
                <select
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                  value={leaveFormData?.leaveTypeName || ""}
                  placeholder="Select leave type"
                  required
                  onChange={(e) => {
                    const selectedLeaveTypeName = e.target.value;
                    setLeaveFormData((prev) => ({
                      ...prev,
                      leaveTypeName: selectedLeaveTypeName,
                    }));
                    const selectedLeaveType = leaveTypes.find(
                      (type) => type.leaveTypeName === selectedLeaveTypeName
                    );
                    if (selectedLeaveType) {
                      setMaxLeaves(selectedLeaveType.noOfLeaves);
                    }
                  }}
                >
                  <option value="">Select Leave Type</option>
                  {leaveTypes?.map((type) => (
                    <option key={type.leaveTypeName} value={type.leaveTypeName}>
                      {type.leaveTypeName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  No of days
                </label>
                <input
                  type="number"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="1"
                  value={leaveFormData?.noOfDays || ""}
                  required
                  onChange={(e) => {
                    setLeaveFormData((prev) => ({
                      ...prev,
                      noOfDays: e.target.value,
                    }));
                  }}
                  min={1}
                  max={maxLeaves}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  From
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  value={leaveFormData?.startDate || ""}
                  required
                  // onChange={(e) => {
                  //   setLeaveFormData((prev) => ({
                  //     ...prev,
                  //     startDate: e.target.value,
                  //   }));
                  // }}
                  onChange={(e) => {
                    const formattedDate = new Date(e.target.value)
                      .toISOString()
                      .split("T")[0];
                    console.log("Formatted Date:", formattedDate); // Debugging line
                    setLeaveFormData((prev) => ({
                      ...prev,
                      startDate: formattedDate,
                    }));
                  }}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  To
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  //value={leaveFormData?.endDate || ""}
                  value={leaveFormData?.endDate || ""}
                  required
                  onChange={(e) => {
                    const formattedDateEnd = new Date(e.target.value)
                      .toISOString()
                      .split("T")[0];
                    setLeaveFormData((prev) => ({
                      ...prev,
                      endDate: formattedDateEnd,
                    }));
                  }}
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Reason
                </label>
                <textarea
                  rows="4"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="Write your leave reason"
                  value={leaveFormData?.reason || ""}
                  onChange={(e) => {
                    setLeaveFormData((prev) => ({
                      ...prev,
                      reason: e.target.value,
                    }));
                  }}
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="text-white w-[150px] justify-center inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;
