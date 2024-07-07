import React, { useEffect, useState } from "react";
import Search from "../Search";
import UpdateDepartmentByID, {
  AddDepartment,
} from "../../Services/DepartmentAPI";
import { getAllEmployees } from "../../Services/RestApiCalls";

const DepartmentForm = ({ closeModal }) => {
  const [department, setDepartment] = useState({
    departmentName: "",
    departmentDesc: "",
    departmentHeadId: "",
  });
  const [employeess, setEmployees] = useState();

  useEffect(() => {
    const fetchEmployees = async () => {
      const fetchedEmployees = await getAllEmployees();
      // setEmployees(fetchedEmployees);
    };

    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDepartment({
      ...department,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "departmentName",
      "departmentDesc",
      "departmentHeadId",
    ];

    for (let field of requiredFields) {
      if (!department[field]) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }
    console.log("Form Data:", department);

    try {
      await AddDepartment(department);
    } catch (error) {
      console.error("Login Error:", error);
    }
    closeModal();
  };
  return (
    <div
      id="leave-form"
      tabIndex="-1"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow border-2 border-gray-600">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Add Department
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
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Department Name
                </label>
                <input
                  type="text"
                  name="departmentName"
                  id="departmentName"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="Hr department"
                  value={department.departmentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Deapartment Head
                </label>

                <select
                  id="departmentHeadId"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-[300px] p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                  value={department.departmentHeadId}
                  onChange={handleChange}
                >
                  <option value="">Select Employee</option>
                  {employeess !== undefined ? (
                    employeess.map((emp, key) => {
                      return (
                        <option id={key} value={emp.employeeId}>
                          {emp.workEmail}
                        </option>
                      );
                    })
                  ) : (
                    <option value="">No values</option>
                  )}
                </select>
              </div>

              {/* <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Department Head Mail
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="head@gmail.com"
                  required=""
                />
              </div> */}

              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Description
                </label>
                <textarea
                  id="departmentDesc"
                  value={department.departmentDesc}
                  onChange={handleChange}
                  rows="4"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="Write your description"
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

export default DepartmentForm;
