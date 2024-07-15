import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import {
  addDepartment,
  deleteDepartmentById,
  getAllDepartments,
  updateDepartmentById,
} from "../Services/DepartmentAPI";
import Loading from "../components/common/Loading";
import DepartmentsTable from "../components/deparments/DepartmentsTable";
import EmptyImg from "../assets/empty.png";
import DepartmentModal from "../components/deparments/DepartmentModal";
import { getAllEmployees } from "../Services/RestApiCalls";
import DepartmentDeleteModal from "../components/deparments/DepartmentDeleteModal";

const Departments = () => {
  const [deparments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeparmentModalOpen, setIsDeparmentModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deparmentModalData, setDeparmentModalData] = useState({
    departmentId: null,
    departmentName: null,
    departmentDesc: null,
    departmentHeadId: null,
    departmentHeadName: null,
  });
  const [employees, setEmployees] = useState([]);

  const setInitialDeparmentModalData = () => {
    setDeparmentModalData({
      departmentId: null,
      departmentName: null,
      departmentDesc: null,
      departmentHeadId: null,
      departmentHeadName: null,
    });
  };

  const handleOpenDeparmentModal = () => {
    setIsDeparmentModalOpen(true);
  };

  const handleCloseDeparmentModal = () => {
    setInitialDeparmentModalData();
    setIsEditMode(false);
    setIsDeparmentModalOpen(false);
  };

  const handleCloseDepartementDeleteModal = () => {
    setInitialDeparmentModalData();
    setIsDeleteModalOpen(false);
  };

  const saveNewDepartment = async (data) => {
    try {
      const response = await addDepartment(data);
      fetchDepartments();
      handleCloseDeparmentModal();
    } catch (error) {
      console.error("Error saving department:", error);
    }
  };

  const updateExistingDepartment = async (data) => {
    try {
      const response = await updateDepartmentById(data);
      fetchDepartments();
      handleCloseDeparmentModal();
    } catch (error) {
      console.error("Error updating department:", error);
    }
  };

  const deleteExistingDeparment = async (departmentId) => {
    try {
      const response = await deleteDepartmentById(departmentId);
      fetchDepartments();
    } catch (error) {
      console.error("Error deleting department:", error);
      alert("There was an error deleting the position.");
    }
  };

  const fetchDepartments = async () => {
    setIsLoading(true);
    try {
      const response = await getAllDepartments();
      if (response !== undefined) {
        // setDepartments(response);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    } finally {
      setIsLoading(false);
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
    fetchDepartments();
    fetchEmployees();
  }, []);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Departments" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <button
            className="focus:outline-none text-white bg-[#013a63] hover:bg-[#0f283a] focus:ring-4 focus:ring-[#013a63] rounded-lg  px-5 py-3 mb-2"
            onClick={handleOpenDeparmentModal}
          >
            Add Department
          </button>
        </div>

        {isLoading && <Loading />}
        {!isLoading && deparments?.length === 0 && (
          <div className="flex flex-col items-center gap-1 md:w-[96.4%] my-[25px]">
            <img src={EmptyImg} alt="empty-img" />
            <div className="text-gray-500 text-center mt-5">
              No deparments available
            </div>
          </div>
        )}
        {!isLoading && deparments?.length > 0 && (
          <div className="leave details my-8">
            <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
              <DepartmentsTable
                departments={deparments}
                setIsEditMode={setIsEditMode}
                setDeparmentModalData={setDeparmentModalData}
                handleOpenDeparmentModal={handleOpenDeparmentModal}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
              />
            </div>
          </div>
        )}
        {isDeparmentModalOpen && (
          <DepartmentModal
            department={deparmentModalData}
            setDepartment={setDeparmentModalData}
            isEditMode={isEditMode}
            closeModal={handleCloseDeparmentModal}
            saveNewDepartment={saveNewDepartment}
            updateExistingDepartment={updateExistingDepartment}
            employees={employees}
          />
        )}
        {isDeleteModalOpen && (
          <DepartmentDeleteModal
            department={deparmentModalData}
            closeModal={handleCloseDepartementDeleteModal}
            deleteDepartment={deleteExistingDeparment}
          />
        )}
      </div>
    </div>
  );
};

export default Departments;
