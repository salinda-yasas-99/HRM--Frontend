import React, { useEffect, useState } from "react";
import SearchableSelect from "./SearchableSelect";

const DepartmentModal = ({
  department,
  setDepartment,
  isEditMode = false,
  closeModal,
  employees = [],
  saveNewDepartment,
  updateExistingDepartment,
}) => {
  const [employeeOptions, setEmployeeOptions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      updateExistingDepartment(department);
    } else {
      saveNewDepartment(department);
    }
  };

  const generateEmployeeOptions = () => {
    const options = employees.map((employee) => ({
      value: employee.employeeId,
      label: `${employee.firstName} ${employee.lastName}`,
    }));
    setEmployeeOptions(options);
  };

  useEffect(() => {
    generateEmployeeOptions();
  }, [employees]);

  return (
    <div
      id="leave-form"
      tabIndex="-1"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow border-2 border-gray-600">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 ">
              {isEditMode ? "Update Department" : "New Department"}
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Department Name
                </label>
                <input
                  type="text"
                  name="departmentName"
                  id="departmentName"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="Hr department"
                  value={department?.departmentName || ""}
                  onChange={(e) => {
                    setDepartment((prev) => ({
                      ...prev,
                      departmentName: e.target.value,
                    }));
                  }}
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Deapartment Head
                </label>
                <SearchableSelect
                  onChange={(selected) => {
                    setDepartment((prev) => ({
                      ...prev,
                      departmentHeadName: selected?.label || "",
                      departmentHeadId: selected?.value || "",
                    }));
                  }}
                  options={employeeOptions}
                  defaultValue={department?.departmentHeadName}
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Description
                </label>
                <textarea
                  value={department?.departmentDesc || ""}
                  onChange={(e) => {
                    setDepartment((prev) => ({
                      ...prev,
                      departmentDesc: e.target.value,
                    }));
                  }}
                  rows="4"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="Write your description"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="text-white w-[150px] justify-center inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isEditMode ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepartmentModal;
