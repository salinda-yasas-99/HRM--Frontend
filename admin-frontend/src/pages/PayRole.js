import React, { useState, useEffect } from "react";
import Welcome from "../components/Welcome";
import PaySlipTable from "../components/paySlip/PaySlipTable";
import { getAllEmployees } from "../Services/RestApiCalls";
import {
  addUserToBonusType,
  createPreviousPayslips,
  getAllBonusesTypes,
  getAllPayslipsForEmployee,
  postNewBonusType,
} from "../Services/PaySlipService";
import Loading from "../components/common/Loading";
import CommonSearchableSelect from "../components/common/CommonSearchableSelect";
import PaySlipViewModal from "../components/paySlip/PaySlipViewModal";
import AddBonusModal from "../components/paySlip/AddBonusModal";
import AssignBonusToEmpModal from "../components/paySlip/AssignBonusToEmpModal";

const PayRole = () => {
  const [allPaySlips, setAllPaySplips] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [employeeOptions, setEmployeeOptions] = useState([]);
  const [isPaySlipViewModalOpen, setIsPaySlipViewModalOpen] = useState(false);
  const [paySlipViewModalData, setPaySlipViewModalData] = useState({});
  const [isOpenBonusModal, setIsOpenBonusModal] = useState(false);
  const [bonusModalData, setBonusModalData] = useState({
    bonusTypeName: null,
    bonusAmount: null,
  });
  const [allBonusTypes, setAllBonusTypes] = useState([]);
  const [isAssignBonusToEmpModalOpen, setIsAssignBonusToEmpModalOpen] =
    useState(false);
  const [assignBonusToEmpModalData, setAssignBonusToEmpModalData] = useState({
    bonusId: null,
    employeeId: null,
    month: null,
    bonusAmount: null,
  });

  const generateEmployeeOptions = () => {
    const options = employees.map((employee) => ({
      value: employee.employeeId,
      label: `${employee.firstName} ${employee.lastName}`,
    }));
    setEmployeeOptions(options);
  };

  const initializeAssignBonusToEmpModalData = () => {
    setAssignBonusToEmpModalData({
      bonusId: null,
      employeeId: null,
      month: null,
      bonusAmount: null,
    });
  };

  const initializeBonusModalData = () => {
    setBonusModalData({
      bonusTypeName: null,
      bonusAmount: null,
    });
  };

  const handleOpenAssignBonusToEmpModal = () => {
    setIsAssignBonusToEmpModalOpen(true);
  };

  const handleCloseAssignBonusToEmpModal = () => {
    initializeAssignBonusToEmpModalData();
    setIsAssignBonusToEmpModalOpen(false);
  };

  const handleOpenPaySlipViewModal = () => {
    setIsPaySlipViewModalOpen(true);
  };

  const handleClosePaySlipViewModal = () => {
    setIsPaySlipViewModalOpen(false);
    setPaySlipViewModalData({});
  };

  const handleOpenBonusModal = () => {
    setIsOpenBonusModal(true);
  };

  const handleCloseBonusModal = () => {
    initializeBonusModalData();
    setIsOpenBonusModal(false);
  };

  const generateAndGetPreviousPaySlips = async () => {
    try {
      const response = await createPreviousPayslips();
    } catch (error) {
      console.error("Error generating previous pay slips", error);
    }
  };

  const fetchPayslipsForEmployee = async (id) => {
    setIsLoading(true);
    try {
      const response = await getAllPayslipsForEmployee(id);
      setAllPaySplips(response);
    } catch (error) {
      console.error("Error fetching pay slips for employee", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveNewBonusType = async (data) => {
    try {
      const response = await postNewBonusType(data);
      fetchAllBonus();
    } catch (error) {
      console.error("Error saving new bonus type", error);
    }
  };

  const fetchAllBonus = async () => {
    try {
      const response = await getAllBonusesTypes();
      setAllBonusTypes(response);
    } catch (error) {
      console.error("Error fetching bonus types", error);
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

  const assignBonusTypeToEmployee = async (data) => {
    try {
      const response = await addUserToBonusType(data);
      if (selectedEmployee) {
        fetchPayslipsForEmployee(selectedEmployee);
      }
    } catch (error) {
      console.error("Error assigning bonus to employee", error);
    }
  };

  useEffect(() => {
    if (selectedEmployee) {
      fetchPayslipsForEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  useEffect(() => {
    generateEmployeeOptions();
  }, [employees]);

  useEffect(() => {
    fetchEmployees();
    fetchAllBonus();
  }, []);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome tab="PayRoles" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-between gap-x-3">
          <div className="w-[350px]">
            <CommonSearchableSelect
              onChange={(selected) => {
                setSelectedEmployee(selected?.value || null);
              }}
              options={employeeOptions}
              placeholder="Select Employee"
            />
          </div>
          <div className="flex gap-x-2">
            <button
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-3 mb-2"
              onClick={handleOpenAssignBonusToEmpModal}
            >
              Assign Bonus To Employee
            </button>
            <button
              className="focus:outline-none text-white bg-[#013a63] hover:bg-[#163854] focus:ring-4 focus:ring-[#3796db] font-medium rounded-lg px-5 py-3 mb-2"
              onClick={handleOpenBonusModal}
            >
              Add Bonus
            </button>
            <button
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-3 mb-2"
              onClick={() => {
                generateAndGetPreviousPaySlips();
                alert(
                  "Pay slips for the previous month generated successfully!"
                );
              }}
            >
              Generate Pay Slips
            </button>
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
              allPaySlips !== undefined &&
              allPaySlips.length > 0 && (
                <PaySlipTable
                  allPaySlips={allPaySlips}
                  handleOpenPaySlipViewModal={handleOpenPaySlipViewModal}
                  setPaySlipViewModalData={setPaySlipViewModalData}
                />
              )}
            {!isLoading &&
              selectedEmployee !== null &&
              allPaySlips?.length === 0 && (
                <div className="flex items-center justify-center p-5">
                  <p className="text-gray-500">
                    No pay slips for selected employee
                  </p>
                </div>
              )}
            {isPaySlipViewModalOpen && (
              <PaySlipViewModal
                paySlipViewModalData={paySlipViewModalData}
                handleClosePaySlipViewModal={handleClosePaySlipViewModal}
              />
            )}
            {isOpenBonusModal && (
              <AddBonusModal
                closeModal={handleCloseBonusModal}
                bonusModalData={bonusModalData}
                setBonusModalData={setBonusModalData}
                saveNewBonusType={saveNewBonusType}
              />
            )}
            {isAssignBonusToEmpModalOpen && (
              <AssignBonusToEmpModal
                closeModal={handleCloseAssignBonusToEmpModal}
                assignBonusToEmpModalData={assignBonusToEmpModalData}
                setAssignBonusToEmpModalData={setAssignBonusToEmpModalData}
                employeeOptions={employeeOptions}
                allBonusTypes={allBonusTypes}
                assignBonusTypeToEmployee={assignBonusTypeToEmployee}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayRole;
