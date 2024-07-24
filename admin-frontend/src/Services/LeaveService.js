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

function getCurrentYearMonth() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
  return `${year}-${month}`;
}

export const getExcelLeaves = async () => {
  const currentYearMonth = getCurrentYearMonth();
  console.log(currentYearMonth); // Outputs in 'YYYY-MM' format
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/leave-application/leave-applications-by-month`,
      { params: { month: currentYearMonth } }
    );
    console.log("this is excel leave data", response.data);
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
