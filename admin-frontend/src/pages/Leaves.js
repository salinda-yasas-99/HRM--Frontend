import React, { useState, useEffect } from "react";
import Welcome from "../components/Welcome";
import LeavesTable from "../components/leave/LeavesTable";
import ApproveModal from "../components/leave/ApproveModal";
import RejectModal from "../components/leave/RejectModal";
import {
  approveOrRejectLeave,
  getPendingLeaves,
  getCurrentYearMonth,
  getExcelLeaves,
  generateMonthOptions,
} from "../Services/LeaveService";
import * as XLSX from "xlsx";

const Leaves = () => {
  const [pendingLeaves, setPendingLeaves] = useState([]);
  const [approvalModalStatus, setApprovalModalStatus] = useState(false);
  const [rejectModalStatus, setRejectModalStatus] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [excelData, setExcelData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(getCurrentYearMonth()); // Initial selected month

  const handleApproveClick = () => setApprovalModalStatus(true);
  const handleRejectClick = () => setRejectModalStatus(true);
  const handleCloseApprovalModal = () => setApprovalModalStatus(false);
  const handleCloseRejectModal = () => setRejectModalStatus(false);
  const monthOptions = generateMonthOptions();

  const approveLeave = async (id) => {
    try {
      await approveOrRejectLeave(id, "Approved");
      fetchPendingLeaves(selectedMonth);
    } catch (error) {
      console.error("Error approving leave:", error);
    }
  };

  const rejectLeave = async (id) => {
    try {
      await approveOrRejectLeave(id, "Rejected");
      fetchPendingLeaves(selectedMonth);
    } catch (error) {
      console.error("Error rejecting leave:", error);
    }
  };

  const fetchPendingLeaves = async (month) => {
    try {
      const response = await getExcelLeaves(month);
      setPendingLeaves(response);
      setExcelData(response);
    } catch (error) {
      console.error("Error fetching pending leaves:", error);
    }
  };

  useEffect(() => {
    fetchPendingLeaves(selectedMonth); // Initial load
  }, [selectedMonth]);

  const handleDownload = () => {
    const rows = excelData.map((leaveform) => ({
      employeeId: leaveform.employeeId,
      employeeName: leaveform.employeeName,
      leaveApplicationFormId: leaveform.leaveApplicationFormId,
      leaveTypeName: leaveform.leaveTypeName,
      noOfDays: leaveform.noOfDays,
      startDate: leaveform.startDate,
      endDate: leaveform.endDate,
      reason: leaveform.reason,
      approvedStatus: leaveform.approvedStatus,
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(workbook, worksheet, "LeaveForms");
    XLSX.writeFile(workbook, "LeaveFormReport.xlsx", { compression: true });
  };

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome tab="Leaves" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="mr-4 p-2 rounded"
          >
            {monthOptions.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium"
            onClick={handleDownload}
          >
            Export Leaves
          </div>
        </div>
        <div className="leave-details mt-8">
          <div className="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            {pendingLeaves.length > 0 ? (
              <LeavesTable
                pendingLeaves={pendingLeaves}
                handleApproveClick={handleApproveClick}
                handleRejectClick={handleRejectClick}
                setSelectedId={setSelectedId}
              />
            ) : (
              <div className="flex items-center justify-center p-5">
                <p className="text-gray-500">No pending leaves</p>
              </div>
            )}
            {approvalModalStatus && (
              <ApproveModal
                closeModal={handleCloseApprovalModal}
                selectedId={selectedId}
                approveLeave={approveLeave}
              />
            )}
            {rejectModalStatus && (
              <RejectModal
                closeModal={handleCloseRejectModal}
                selectedId={selectedId}
                rejectLeave={rejectLeave}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaves;
