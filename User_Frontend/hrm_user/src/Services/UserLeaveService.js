import axios from "axios";

export const getLeavTypesForEmployee = async () => {
  const Token = localStorage.getItem("token");
  const userId = localStorage.getItem("uid");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/user-leave/employee/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching leave types for employees:", error);
  }
};

export const getLeaveApplicationsByEmployeeId = async () => {
  const Token = localStorage.getItem("token");
  const userId = localStorage.getItem("uid");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/leave-application/employee/${userId}/leave-applications`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching leave types for employees:", error);
  }
};

export const postLeaveApplication = async (data) => {
  const Token = localStorage.getItem("token");
  const userId = localStorage.getItem("uid");
  const requsetBody = {
    ...data,
    employeeId: userId,
  };
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      `http://localhost:8080/api/leave-application/apply`,
      requsetBody
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching leave types for employees:", error);
  }
};
