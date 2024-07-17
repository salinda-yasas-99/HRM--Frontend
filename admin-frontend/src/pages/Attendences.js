import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import { getAllEmployees } from "../Services/RestApiCalls";
import { GetAttendencesByEmpId } from "../Services/AttedenceApi";
import Loading from "../components/common/Loading";
import AttendanceTable from "../components/attendance/AttendanceTable";
import CommonSearchableSelect from "../components/common/CommonSearchableSelect";

const Attendences = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeAttendance, setEmployeeAttendance] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [employeeOptions, setEmployeeOptions] = useState([]);

  const generateEmployeeOptions = () => {
    const options = employees.map((employee) => ({
      value: employee.employeeId,
      label: `${employee.firstName} ${employee.lastName}`,
    }));
    setEmployeeOptions(options);
  };

  const fetchAttendancesByEmployee = async (id) => {
    setIsLoading(true);
    try {
      const response = await GetAttendencesByEmpId(id);
      setEmployeeAttendance(response);
    } catch (error) {
      console.error("Error fetching attendence", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  useEffect(() => {
    generateEmployeeOptions();
  }, [employees]);

  useEffect(() => {
    if (selectedEmployee) {
      fetchAttendancesByEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Attendance" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end gap-x-10">
          <div className="w-[350px]">
            <CommonSearchableSelect
              onChange={(selected) => {
                setSelectedEmployee(selected?.value || null);
              }}
              options={employeeOptions}
              placeholder="Select Employee"
            />
          </div>
        </div>
        <div className="attendence-details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            {isLoading && <Loading />}
            {!isLoading &&
              selectedEmployee === null &&
              employees?.length > 0 && (
                <div className="flex items-center justify-center p-5">
                  <p className="text-gray-500">Please Select an employee</p>
                </div>
              )}
            {!isLoading &&
              selectedEmployee !== null &&
              employeeAttendance !== undefined &&
              employeeAttendance?.length > 0 && (
                <AttendanceTable employeeAttendance={employeeAttendance} />
              )}
            {!isLoading &&
              selectedEmployee !== null &&
              employeeAttendance?.length === 0 && (
                <div className="flex items-center justify-center p-5">
                  <p className="text-gray-500">
                    No attendances for selected employee
                  </p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendences;
