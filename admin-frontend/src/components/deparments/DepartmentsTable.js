import React from "react";

const DepartmentsTable = ({
  departments = [],
  setIsEditMode,
  setDeparmentModalData,
  handleOpenDeparmentModal,
  setIsDeleteModalOpen,
}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right">
      <thead className="text-xs text-white uppercase bg-[#6a44d9]">
        <tr>
          <th scope="col" className="px-6 py-5">
            Department Name
          </th>
          <th scope="col" className="px-6 py-5">
            Description
          </th>
          <th scope="col" className="px-6 py-5">
            Department Head
          </th>
          <th scope="col" className="px-6 py-5">
            action
          </th>
        </tr>
      </thead>
      <tbody>
        {departments.map((department) => (
          <tr
            key={department.departmentId}
            className="bg-white border-b text-gray-900 font-medium"
          >
            <td className="px-6 py-4 whitespace-nowrap">
              {department.departmentName}
            </td>

            <td className="px-6 py-4">{department.departmentDesc}</td>
            <td className="px-6 py-4">{department.departmentHeadName}</td>
            <td className="flex px-6 py-4 gap-x-1">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                onClick={() => {
                  setDeparmentModalData((prev) => ({
                    ...prev,
                    ...department,
                  }));
                  setIsEditMode(true);
                  handleOpenDeparmentModal();
                }}
              >
                Update
              </button>
              <button
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={() => {
                  setDeparmentModalData((prev) => ({
                    ...prev,
                    ...department,
                  }));
                  setIsDeleteModalOpen(true);
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

export default DepartmentsTable;
