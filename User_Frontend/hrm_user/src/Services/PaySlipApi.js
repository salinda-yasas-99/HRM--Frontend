import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const getAllPaySheets = async () => {
  const Token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/v1/payslip/employee/${uid}`
    );
    console.log("This are paysheets", response.data);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};
