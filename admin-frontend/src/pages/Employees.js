import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import { getAllEmployees } from "../Services/RestApiCalls";
import { DeleteEmployeeByID } from "../Services/RestApiCalls";
import ViewEmployee from "./ViewEmployee";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const Employees = () => {
  const [employeess, setEmployees] = useState([]);

  // const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const navigate = useNavigate();

  const selectEmployee = (emp) => {
    navigate("/admin/view", { state: { employee: emp } });
  };

  const fetchEmployees = async () => {
    const fetched = await getAllEmployees();
    setEmployees(fetched);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDeleteClick = async (empId) => {
    try {
      await DeleteEmployeeByID(empId);

      fetchEmployees();
    } catch (error) {
      console.error("Error deleting position:", error);
      alert("There was an error deleting the employee.");
    }
  };

  const handleDownload = () => {
    console.log("test button");
    const rows = employeess.map((emp) => ({
      employeeId: emp.employeeId,
      firstName: emp.firstName,
      lastName: emp.lastName,
      motherName: emp.motherName, // Assuming these fields exist in your original data
      spouseName: emp.spouseName,
      fatherName: emp.fatherName,
      maritalStatus: emp.maritalStatus,
      nic: emp.nic,
      mobilePhoneNo: emp.mobilePhoneNo,
      homePhoneNo: emp.homePhoneNo,
      gender: emp.gender,
      epfNo: emp.epfNo,
      address: emp.address,
      dob: emp.dob,
      workEmail: emp.workEmail,
      age: emp.age,
      employmentType: emp.employmentType,
      joinedDate: emp.joinedDate,
      basicSalary: emp.basicSalary,
      departmentName: emp.departmentName,
      positionName: emp.positionName,
    }));

    // create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");

    // customize header names
    XLSX.utils.sheet_add_aoa(worksheet, [
      [
        "Employee ID",
        "First Name",
        "Last Name",
        "Mother name",
        "Spouse Name",
        "Father Name",
        "Marial Status",
        "NIC",
        "Mobile Number",
        "Home Phonenumber",
        "Gender",
        "EPF Number",
        "Address",
        "Date of Birth",
        "Work Email",
        "Age",
        "Employeement Type",
        "Joined date",
        "Basic Salary",
        "Dapartment Name",
        "Position Name",
      ],
    ]);

    XLSX.writeFile(workbook, "EmployeesReport.xlsx", { compression: true });
  };

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome tab="Employees" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium"
            onClick={handleDownload}
          >
            Export Employees
          </div>
        </div>
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Position
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Department
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Email
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
                {employeess.length > 0 ? (
                  employeess.map((emp, key) => {
                    return (
                      <tr
                        id={key}
                        key={emp.id} // Add a key prop for React's list rendering
                        className="bg-white border-b text-gray-900 font-medium"
                      >
                        <td className="px-6 py-4">{emp.firstName}</td>
                        <td className="px-6 py-4">{emp.positionName}</td>
                        <td className="px-6 py-4">{emp.departmentName}</td>
                        <td className="px-6 py-4">{emp.workEmail}</td>
                        <td className="px-6 py-4">
                          <div
                            className="bg-[#0c8ce9] flex justify-center py-[5px] rounded-md cursor-pointer"
                            onClick={() => selectEmployee(emp)}
                          >
                            View
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className="bg-[#ed1b24] flex justify-center py-[5px] rounded-md cursor-pointer"
                            onClick={() => {
                              handleDeleteClick(emp.employeeId);
                            }}
                          >
                            Delete
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      Currently no employees
                    </td>
                  </tr>
                )}
              </tbody>
              {/* {showDetails && (
                <ViewEmployee
                  employee={selectedEmployee}
                  onClose={() => setShowDetails(false)}
                />
              )} */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
