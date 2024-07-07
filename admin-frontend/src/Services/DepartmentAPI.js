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
      "http://localhost:8080/api/v1/position/all"
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};

export const DeleteDepartmentByID = async (deptId) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    // Construct the URL dynamically to include the employee ID
    const url = `http://localhost:8080/api/v1/position/delete/${deptId}`;

    const response = await authAxios.delete(url);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
    throw err;
  }
};

export const AddDepartment = async (department) => {
  const Token = localStorage.getItem("token");

  const addDepartment = {
    departmentName: department.departmentName,
    departmentDesc: department.departmentDesc,
    departmentHeadId: department.departmentHeadId,
  };

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    // Construct the URL dynamically to include the employee ID
    const url = `http://localhost:8080/api/v1/department`;

    const response = await authAxios.post(url, addDepartment);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
    throw err;
  }
};

export const UpdateDepartmentByID = async (department, departmentID) => {
  const Token = localStorage.getItem("token");

  const updtDepartment = {
    departmentName: department.departmentName,
    departmentDesc: department.departmentDesc,
    departmentHeadId: department.departmentHeadId,
  };

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    // Construct the URL dynamically to include the employee ID
    const url = `http://localhost:8080/api/v1/department/update/${departmentID}`;

    const response = await authAxios.put(url, updtDepartment);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
    alert(err);
    throw err;
  }
};
