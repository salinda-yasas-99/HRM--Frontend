import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import DepartmentForm from "../components/deparments/DepartmentForm";
import UpdateDepartmentForm from "../components/deparments/UpdateDepartmentForm";
import { getAllDepartments } from "../Services/DepartmentAPI";
import { DeleteDepartmentByID } from "../Services/DepartmentAPI";

const Departments = () => {
  const [deptAdd, setDeptAdd] = useState(false);
  const [deptUpdate, setDeptUpdate] = useState(false);
  const [selectedDepartment, setSelectedDepatment] = useState(null);

  const handleAddClick = () => {
    setDeptAdd(true);
  };

  const handleAddCloseClick = () => {
    setDeptAdd(false);
    fetchDepartments();
  };

  const handleUpdateClick = () => {
    setDeptUpdate(true);
  };

  const handleUpdateCloseClick = (department) => {
    setDeptUpdate(false);
    setSelectedDepatment(department);
  };

  const [departments, setDepartments] = useState();

  const fetchDepartments = async () => {
    const fetched = await getAllDepartments();
    setDepartments(fetched);
  };
  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleDeleteClick = async (departmentID) => {
    try {
      await DeleteDepartmentByID(departmentID);
      // Refresh the positions list
      fetchDepartments();
    } catch (error) {
      console.error("Error deleting position:", error);
      alert("There was an error deleting the position.");
    }
  };
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Departments" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div
            className="bg-[#1d1f21] p-3 rounded-lg text-white font-medium"
            onClick={handleAddClick}
          >
            Add New Department
          </div>
        </div>
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Department Name
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Department Head
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Department Head Mail
                  </th>

                  <th scope="col" class="px-6 py-5">
                    action
                  </th>
                  <th scope="col" class="px-6 py-5">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {departments !== undefined ? (
                  departments.map((dept, key) => {
                    return (
                      <tr
                        id={key}
                        className="bg-white border-b text-gray-900 font-medium"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {dept.departmentName}
                        </td>
                        <td className="px-6 py-4">{dept.departmentDesc}</td>
                        <td className="px-6 py-4">
                          {dept.departmentHead
                            ? `${dept.departmentHead.firstName} ${dept.departmentHead.lastName}`
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4">
                          {dept.departmentHead
                            ? dept.departmentHead.workEmail
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className="bg-[#0c8ce9] flex justify-center py-[5px] rounded-md"
                            onClick={() => handleUpdateClick(dept)}
                          >
                            Update
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className="bg-[#ed1b24] flex justify-center py-[5px] rounded-md"
                            onClick={() => handleDeleteClick(dept.departmentId)}
                          >
                            Delete
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <td
                    colSpan="6"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    Currently no announcements
                  </td>
                )}
              </tbody>
            </table>
            {deptAdd && <DepartmentForm closeModal={handleAddCloseClick} />}
            {deptUpdate && (
              <UpdateDepartmentForm
                closeModal={handleUpdateCloseClick}
                initialDeptData={selectedDepartment}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
