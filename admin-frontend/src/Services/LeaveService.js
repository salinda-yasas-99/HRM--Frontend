import axios from "axios";

export const getPendingLeaves = async () => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/leave-application/employee/leave-applications`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching leave types for employees:", error);
  }
};

export const approveOrRejectLeave = async (
  leaveApplicationFormId,
  newStatus
) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.put(
      `http://localhost:8080/api/leave-application/approve/${leaveApplicationFormId}?newStatus=${encodeURIComponent(
        newStatus
      )}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching leave types for employees:", error);
  }
};
