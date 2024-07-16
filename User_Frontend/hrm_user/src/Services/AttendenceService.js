import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const AddCheckInAndCheckout = async (attedence, status) => {
  const Token = localStorage.getItem("token");
  const userID = localStorage.getItem("uid");
  attedence.employeeId = userID;
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      `http://localhost:8080/api/v1/attendance/record`,
      attedence
    );
    if (status === "checkin") {
      alert(response.data.message);
      console.log("checkin response", response.data);
      return response.data;
    } else {
      alert(response.data.message);
      console.log("checkout response", response.data);
      return response.data;
    }
  } catch (error) {
    alert("attendence is already recorded");
    console.log("Error ocurred while getting expereience", error);
  }
};

export const GetAttendencesByEmpId = async () => {
  const Token = localStorage.getItem("token");
  const userID = localStorage.getItem("uid");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/v1/attendance/employee/${userID}`
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while getting expereience", error);
  }
};
