import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const getAllLeaves = async () => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(`http://localhost:8080/api/v1/leave`);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};

export const createNewLeaveType = async (data) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      `http://localhost:8080/api/v1/leave`,
      data
    );
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};

export const updateLeaveType = async (data) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.put(
      `http://localhost:8080/api/v1/leave/${data.leaveId}`,
      data
    );
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};

export const deleteLeaveType = async (id) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.delete(
      `http://localhost:8080/api/v1/leave/${id}`
    );
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};

export const assignLeaveTypeToEmployee = async (data) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      `http://localhost:8080/api/user-leave/assign`,
      data
    );
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};
