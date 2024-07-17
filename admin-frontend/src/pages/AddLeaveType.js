import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import {
  assignLeaveTypeToEmployee,
  createNewLeaveType,
  deleteLeaveType,
  getAllLeaves,
  updateLeaveType,
} from "../Services/LeaveTypes";
import LeaveTypeForm from "../components/leaveTypes/LeaveTypeForm";
import AddLeaveToEMp from "../components/leaveTypes/AddLeaveToEMp";
import { getAllEmployees } from "../Services/RestApiCalls";
import LeaveTypesTable from "../components/leaveTypes/LeaveTypesTable";
import LeaveTypeDeleteModal from "../components/leaveTypes/LeaveTypeDeleteModal";

const AddLeaveType = () => {
  const [allLeaveTypes, setAllLeavesTypes] = useState([]);
  const [isAddLeaveTypeModalOpen, setIsAddLeaveTypeModalOpen] = useState(false);
  const [isAddLeaveToEmpModalOpen, setIsAddLeaveToEmpModalOpen] =
    useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [leaveTypeModalData, setLeaveTypeModalData] = useState({
    leaveId: null,
    leaveTypeName: null,
    noOfLeaves: null,
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [leaveTypeToEmpModalData, setLeaveTypeToEmpModalData] = useState({
    employeeId: null,
    leaveId: null,
    noOfLeaves: null,
  });
  const [employees, setEmployees] = useState([]);

  const initializeLeaveTypeToEmpModalData = () => {
    setLeaveTypeToEmpModalData({
      employeeId: null,
      leaveId: null,
      noOfLeaves: null,
    });
  };

  const initializeLeaveTypeModalData = () => {
    setLeaveTypeModalData({
      leaveId: null,
      leaveTypeName: null,
      noOfLeaves: null,
    });
  };

  const handleOpenAddLeaveTypeModal = () => {
    setIsAddLeaveTypeModalOpen(true);
  };

  const hanldeCloseAddLeaveTypeModal = () => {
    setIsEditMode(false);
    initializeLeaveTypeModalData();
    setIsAddLeaveTypeModalOpen(false);
  };

  const handleOpenAddLeaveToEmpModal = () => {
    setIsAddLeaveToEmpModalOpen(true);
  };

  const handleCloseAddLeaveToEmpModal = () => {
    initializeLeaveTypeToEmpModalData();
    setIsAddLeaveToEmpModalOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    initializeLeaveTypeModalData();
    setIsDeleteModalOpen(false);
  };

  const deleteExistingLeaveType = async (id) => {
    try {
      const response = await deleteLeaveType(id);
      fetchAllLeaveTypes();
    } catch (error) {
      console.error("Error deleting leave type:", error);
    }
  };

  const updateExistingLeaveType = async (data) => {
    try {
      const response = await updateLeaveType(data);
      fetchAllLeaveTypes();
    } catch (error) {
      console.error("Error updating leave type:", error);
    }
  };

  const saveNewLeaveType = async (data) => {
    try {
      const response = await createNewLeaveType(data);
      fetchAllLeaveTypes();
    } catch (error) {
      console.error("Error saving new leave type:", error);
    }
  };

  const saveLeaveTypeToEmployee = async (data) => {
    try {
      const response = await assignLeaveTypeToEmployee(data);
    } catch (error) {
      console.error("Error saving leave type to employee:", error);
    }
  };

  const fetchAllLeaveTypes = async () => {
    try {
      const fetched = await getAllLeaves();
      setAllLeavesTypes(fetched);
    } catch (error) {
      console.error("Error fetching leave types:", error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchAllLeaveTypes();
    fetchEmployees();
  }, []);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Leave Types" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium mr-10"
            onClick={handleOpenAddLeaveToEmpModal}
          >
            Add Leave Type To Employee
          </div>
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium"
            onClick={handleOpenAddLeaveTypeModal}
          >
            Add Leave Type
          </div>
        </div>
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            {allLeaveTypes !== undefined && allLeaveTypes.length > 0 && (
              <LeaveTypesTable
                allLeaveTypes={allLeaveTypes}
                setIsEditMode={setIsEditMode}
                setLeaveTypeModalData={setLeaveTypeModalData}
                handleOpenAddLeaveTypeModal={handleOpenAddLeaveTypeModal}
                handleOpenDeleteModal={handleOpenDeleteModal}
              />
            )}
            {allLeaveTypes !== undefined && allLeaveTypes.length === 0 && (
              <div className="flex items-center justify-center p-5">
                <p className="text-gray-500">No leaves types</p>
              </div>
            )}
            {isAddLeaveTypeModalOpen && (
              <LeaveTypeForm
                closeModal={hanldeCloseAddLeaveTypeModal}
                leaveType={leaveTypeModalData}
                setLeaveType={setLeaveTypeModalData}
                saveNewLeaveType={saveNewLeaveType}
                updateExistingLeaveType={updateExistingLeaveType}
                isEditMode={isEditMode}
              />
            )}
            {isAddLeaveToEmpModalOpen && (
              <AddLeaveToEMp
                closeModal={handleCloseAddLeaveToEmpModal}
                employees={employees}
                leaveTypes={allLeaveTypes}
                leaveTypeToEmpModalData={leaveTypeToEmpModalData}
                setLeaveTypeToEmpModalData={setLeaveTypeToEmpModalData}
                saveLeaveTypeToEmployee={saveLeaveTypeToEmployee}
              />
            )}
            {isDeleteModalOpen && (
              <LeaveTypeDeleteModal
                leaveType={leaveTypeModalData}
                closeModal={handleCloseDeleteModal}
                deleteLeaveType={deleteExistingLeaveType}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLeaveType;
