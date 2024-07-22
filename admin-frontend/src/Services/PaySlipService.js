import axios from "axios";

export const getAllPayslipsForEmployee = async (empId) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/v1/payslip/employee/${empId}`
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while getting expereience", error);
  }
};

export const createPreviousPayslips = async () => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      `http://localhost:8080/api/v1/payslip/backfill/2024`
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while getting previous pay slips", error);
  }
};

export const postNewBonusType = async (data) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      `http://localhost:8080/api/v1/bonus`,
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while creating new bonus type", error);
  }
};

export const getAllBonusesTypes = async () => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(`http://localhost:8080/api/v1/bonus`);
    return response.data;
  } catch (error) {
    console.log("Error ocurred while getting all bonus types", error);
  }
};

export const addUserToBonusType = async (data) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      `http://localhost:8080/api/v1/user-bonus`,
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while assigning user to bonus", error);
  }
};

export const addAllEmployeeBonusApi = async (data) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      `http://localhost:8080/api/v1/user-bonus/all`,
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while assigning user to bonus", error);
  }
};
