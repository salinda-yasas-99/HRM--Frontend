import React, { useState, useEffect } from "react";
import Welcome from "../components/Welcome";
import LeavesTable from "../components/leave/LeavesTable";
import ApproveModal from "../components/leave/ApproveModal";
import RejectModal from "../components/leave/RejectModal";
import {
  approveOrRejectLeave,
  getPendingLeaves,
} from "../Services/LeaveService";
import { getExcelLeaves } from "../Services/LeaveService";
import * as XLSX from "xlsx";

const Leaves = () => {
  const [pendingLeaves, setPendingLeaves] = useState([]);

  const [approvalModalStatus, setApprovalModalStatus] = useState(false);
  const [rejectModalStatus, setRejectModalStatus] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const handleApproveClick = () => {
    setApprovalModalStatus(true);
  };

  const handleRejectClick = () => {
    setRejectModalStatus(true);
  };

  const handleCloseApprovalModal = () => {
    setApprovalModalStatus(false);
  };

  const handleCloseRejectModal = () => {
    setRejectModalStatus(false);
  };

  const approveLeave = async (id) => {
    try {
      const response = await approveOrRejectLeave(id, "Approved");
      fetchPendingLeaves();
    } catch (error) {
      console.error("Error approving leave:", error);
    }
  };

  const rejectLeave = async (id) => {
    try {
      const response = await approveOrRejectLeave(id, "Rejected");
      fetchPendingLeaves();
    } catch (error) {
      console.error("Error rejecting leave:", error);
    }
  };

  const fetchPendingLeaves = async () => {
    try {
      const response = await getPendingLeaves();
      setPendingLeaves(response);
    } catch (error) {
      console.error("Error fetching pending leaves:", error);
    }
  };

  useEffect(() => {
    fetchPendingLeaves();
  }, []);

  const fetchExcelLeaves = async () => {
    try {
      const response = await getExcelLeaves();

      setExcelData(response);
    } catch (error) {
      console.error("Error fetching excel leaves:", error);
    }
  };

  useEffect(() => {
    fetchExcelLeaves();
  }, []);

  const handleDownload = () => {
    console.log("test button");
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

    // create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(rows);

    XLSX.utils.book_append_sheet(workbook, worksheet, "LeaveForms");

    // customize header names
    XLSX.utils.sheet_add_aoa(worksheet, [
      [
        "employeeId",
        "employeeName",
        "leaveApplicationFormId",
        "leaveTypeName",
        "noOfDays",
        "startDate",
        "endDate",
        "reason",
        "approvedStatus",
      ],
    ]);

    XLSX.writeFile(workbook, "LeaveFormReport.xlsx", { compression: true });
  };

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome tab="Leaves" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium"
            onClick={handleDownload}
          >
            Export Leaves
          </div>
        </div>
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            {pendingLeaves !== undefined && pendingLeaves.length > 0 && (
              <LeavesTable
                pendingLeaves={pendingLeaves}
                handleApproveClick={handleApproveClick}
                handleRejectClick={handleRejectClick}
                setSelectedId={setSelectedId}
              />
            )}
            {pendingLeaves !== undefined && pendingLeaves.length === 0 && (
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
