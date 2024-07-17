import axios from "axios";
import jwt_decode from "jwt-decode";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const logUser = async (user) => {
  try {
    console.log("this is user is rest", user);
    const response = await API.post(
      "http://localhost:8080/api/v1/auth/authenticate",
      user
    );
    console.log("this is response", response.data);
    const { token } = response.data;
    console.log("this is login token", token);
    localStorage.setItem("token", token);
    console.log(
      "this is login local storage token",
      localStorage.getItem("token")
    );
    const decodedToken = jwt_decode(token); // No need to stringify
    localStorage.setItem("workEmail", decodedToken.sub);
    localStorage.setItem("uid", response.data.userId);
    console.log("this is decoded token", decodedToken);
    return true; // Indicate success
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // email or password wrong
      alert(error.response.data.message);
    } else if (error.response) {
      // Handle server response errors, if any
      console.error("Axios Error:", error);
      alert("An error occurred during login.");
    } else if (error.request) {
      // Handle the case where the request was made but no response was received
      console.error("No response received from the server:", error.request);
      alert(
        "No response received from the server. Please check your network connection."
      );
    } else {
      console.error("Error setting up the request:", error.message);
    }
    return false; // Indicate failure
  }
};
export const getEmployeeDetails = async () => {
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
      `http://localhost:8080/api/v1/users/${uid}`
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};
