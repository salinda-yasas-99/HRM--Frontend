import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const getAllDepartments = async () => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      "http://localhost:8080/api/v1/department/all"
    );
    return response.data;
  } catch (error) {
    console.log("This is error", error);
  }
};

export const deleteDepartmentById = async (departmentId) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const url = `http://localhost:8080/api/v1/department/delete/${departmentId}`;
    const response = await authAxios.delete(url);
    return response.data;
  } catch (error) {
    console.log("This is error", error);
    throw error;
  }
};

export const addDepartment = async (department) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const url = `http://localhost:8080/api/v1/department`;
    const response = await authAxios.post(url, department);
    return response.data;
  } catch (error) {
    console.log("This is error", error);
    throw error;
  }
};

export const updateDepartmentById = async (department) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const url = `http://localhost:8080/api/v1/department/update/${department.departmentId}`;
    const response = await authAxios.put(url, department);
    return response.data;
  } catch (error) {
    console.log("This is error", error);
    alert(error);
    throw error;
  }
};
