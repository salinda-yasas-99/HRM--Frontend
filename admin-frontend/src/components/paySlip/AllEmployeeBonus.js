import React from "react";

const AllEmployeeBonus = ({
  closeModal,
  allBonusTypes,
  allEmpBonusModel,
  allEmpBounsSubmit,
  setAllEmpBonus,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("This is all bonus", allEmpBonusModel);
    allEmpBounsSubmit(allEmpBonusModel);
    closeModal();
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
            <h3 className="text-lg font-semibold text-gray-900 ">Add Bonus</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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
              {/* <div className="col-span-1 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Employee
                </label>
                <CommonSearchableSelect
                  onChange={(selected) => {
                    setAssignBonusToEmpModalData((prev) => ({
                      ...prev,
                      employeeId: selected?.value || "",
                    }));
                  }}
                  options={employeeOptions}
                  defaultValue={assignBonusToEmpModalData?.employeeId}
                />
              </div> */}
              <div className="col-span-1 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Bonus Type
                </label>
                <select
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                  value={allEmpBonusModel?.bonusId || ""}
                  placeholder="Select Bonus type"
                  required
                  onChange={(e) => {
                    setAllEmpBonus((prev) => ({
                      ...prev,
                      bonusId: e.target.value,
                    }));
                  }}
                >
                  <option value="">Select Bonus Type</option>
                  {allBonusTypes?.map((type) => (
                    <option key={type.bonusId} value={type.bonusId}>
                      {type.bonusTypeName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Month
                </label>
                <select
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                  value={allEmpBonusModel?.month || ""}
                  placeholder="Select Bonus type"
                  required
                  onChange={(e) => {
                    setAllEmpBonus((prev) => ({
                      ...prev,
                      month: e.target.value,
                    }));
                  }}
                >
                  <option value="">Select Month</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Bonus Amount
                </label>
                <input
                  type="number"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="Enter Bonus Amount"
                  value={allEmpBonusModel?.bonusAmount || ""}
                  required
                  onChange={(e) => {
                    setAllEmpBonus((prev) => ({
                      ...prev,
                      bonusAmount: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="text-white w-[150px] justify-center inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllEmployeeBonus;
