import React, { useState, useEffect } from "react";
import Welcome from "../components/Welcome";
import LeavesTable from "../components/leave/LeavesTable";
import ApproveModal from "../components/leave/ApproveModal";
import RejectModal from "../components/leave/RejectModal";
import {
  approveOrRejectLeave,
  getPendingLeaves,
} from "../Services/LeaveService";

const Leaves = () => {
  const [pendingLeaves, setPendingLeaves] = useState([]);

  const [approvalModalStatus, setApprovalModalStatus] = useState(false);
  const [rejectModalStatus, setRejectModalStatus] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Leaves" />

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
