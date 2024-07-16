import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import LeaveForm from "../components/LeaveForm";
import {
  getLeaveApplicationsByEmployeeId,
  getLeavTypesForEmployee,
  postLeaveApplication,
} from "../Services/UserLeaveService";
import LeavesTable from "../components/leave/LeavesTable";

const Leaves = () => {
  const [leaves, setLeaves] = useState([]);
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  const [leaveFormData, setLeaveFormData] = useState({
    employeeId: null,
    leaveTypeName: "",
    noOfDays: null,
    startDate: null,
    endDate: null,
    reason: null,
  });

  const setInitailLeaveFormData = () => {
    setLeaveFormData({
      employeeId: null,
      leaveTypeName: "null",
      noOfDays: null,
      startDate: null,
      endDate: null,
      reason: null,
    });
  };

  const handleApplyLeaveClick = () => {
    setInitailLeaveFormData();
    setShowLeaveForm(true);
  };

  const handleCloseLeaveForm = () => {
    setShowLeaveForm(false);
  };

  const applyForLeave = async (data) => {
    try {
      const response = await postLeaveApplication(data);
      handleCloseLeaveForm();
      fetchLeaveTypes();
      fetchAllLeaveApplications();
    } catch (error) {
      console.error("Error applying for leave:", error);
    }
  };

  const fetchAllLeaveApplications = async () => {
    try {
      const response = await getLeaveApplicationsByEmployeeId();
      setLeaves(response);
    } catch (error) {
      console.error("Error fetching leave applications for employee:", error);
    }
  };

  const fetchLeaveTypes = async () => {
    try {
      const response = await getLeavTypesForEmployee();
      setLeaveTypes(response);
    } catch (error) {
      console.error("Error fetching leave types for employee:", error);
    }
  };

  useEffect(() => {
    fetchLeaveTypes();
    fetchAllLeaveApplications();
  }, []);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px] pb-8">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Leaves" />
        <div className="flex flex-wrap md:w-[96.4%] mt-[25px] gap-4">
          {leaveTypes?.map((type) => (
            <div
              key={type.leaveTypeName}
              class="w-[300px] h-48 bg-white flex flex-col items-center justify-center rounded-xl gap-2"
            >
              <h1 className="text-8xl text-purple-600">{type.noOfLeaves}</h1>
              <p className="tracking-normal text-gray-500 md:text-lg">
                {type.leaveTypeName}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium"
            onClick={handleApplyLeaveClick}
          >
            Apply leave
          </div>
        </div>
        <div className="leave details mt-8">
          <div className="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            {leaves !== undefined && leaves?.length > 0 && (
              <LeavesTable leaves={leaves} />
            )}
            {leaves !== undefined && leaves?.length === 0 && (
              <div className="p-5 text-gray-600 flex justify-center">
                No leave applications...
              </div>
            )}
          </div>
        </div>
        {showLeaveForm && (
          <LeaveForm
            closeModal={handleCloseLeaveForm}
            applyForLeave={applyForLeave}
            leaveTypes={leaveTypes}
            leaveFormData={leaveFormData}
            setLeaveFormData={setLeaveFormData}
          />
        )}
      </div>
    </div>
  );
};

export default Leaves;
