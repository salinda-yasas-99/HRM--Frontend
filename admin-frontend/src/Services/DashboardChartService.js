import axios from "axios";

export const getEmployeeCountByDepartment = async () => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/v1/dashboard/department/employee-count`
    );
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};

export const getEmployeeCountByPosition = async () => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/v1/dashboard/position/employee-count`
    );
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};
