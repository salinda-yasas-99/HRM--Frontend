import React, { useState } from "react";
import { AddQualification } from "../Services/QualificationService";

const QualificationForm = ({ closeModal, onSubmit }) => {
  const [qualification, setQualification] = useState({
    courseName: "",
    qualificationDesc: "",
    year: "",
    instituteName: "",
    employeeId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQualification({
      ...qualification,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "courseName",
      "qualificationDesc",
      "year",
      "instituteName",
    ];

    for (let field of requiredFields) {
      if (!qualification[field]) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }
    console.log("Form Data: exp", qualification);

    try {
      await AddQualification(qualification);
    } catch (err) {
      console.error("error", err);
      alert(err);
    }
    closeModal();
    //onSubmit(qualification);
  };

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
              Add Qualification
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
                  htmlFor="cousreName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  name="courseName"
                  id="courseName"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="Enter course name"
                  value={qualification.courseName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="instituteName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Institute Name
                </label>
                <input
                  type="text"
                  name="instituteName"
                  id="instituteName"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="Enter institue name"
                  value={qualification.instituteName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="marks"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="qualificationDesc"
                  id="qualificationDesc"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="Enter description"
                  value={qualification.qualificationDesc}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="completionYear"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Completion Year
                </label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-500 placeholder-gray-400"
                  placeholder="2024"
                  required
                  value={qualification.year}
                  onChange={handleChange}
                />
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

export default QualificationForm;
