import React from "react";

const AddLeaveToEMp = ({ closeModal }) => {
  return (
    <div
      id="leave-form"
      tabIndex="-1"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow border-2 border-gray-600">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Assign Leave for Employee
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
          {/* Modal body */}
          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Employee
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option selected="">Select Employee</option>
                  <option value="TV">lakmini@diana.com</option>
                  <option value="PC">amali@diana.com</option>
                  <option value="GA">kumara@diana.com</option>
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Leave Type
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option selected="">Select Leave Type</option>
                  <option value="TV">Casual Leaves</option>
                  <option value="PC">Annual Leaves</option>
                </select>
              </div>
            </div>

            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="text-white w-[150px] justify-center inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add PayRole
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLeaveToEMp;
