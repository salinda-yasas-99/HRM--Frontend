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
    const decodedToken = jwt_decode(JSON.stringify(token));
    localStorage.setItem("workEmail", decodedToken.sub);
    localStorage.setItem("uid", response.data.userId);
    console.log("this is decoded token", decodedToken);

    window.location.href = "http://localhost:3000/admin/dashboard";
  } catch (error) {
    if (error.response.status === 403) {
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
  }
};

export const getAllEmployees = async () => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    //headers: {
    //Authorization: `Bearer ${Token}`,

    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      "http://localhost:8080/api/v1/users/employees"
    );
    console.log(response);
    return response.data;
    //return [];
  } catch (err) {
    console.log("This is error", err);
  }
};

export const getEmployeeById = async (employeeId) => {
  const Token = localStorage.getItem("token");
  //const decodedToken = jwt_decode(Token);
  //const loggedUser = decodedToken.sub;

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    // Construct the URL dynamically to include the employee ID
    const url = `http://localhost:8080/api/v1/users/${employeeId}`;

    const response = await authAxios.get(url);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
    throw err;
  }
};

export const DeleteEmployeeByID = async (employeeId) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    // Construct the URL dynamically to include the employee ID
    const url = `http://localhost:8080/api/v1/users/${employeeId}`;

    const response = await authAxios.delete(url);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
    throw err;
  }
};

export const AddNewEmployee = async (employee) => {
  const NewEmployee = {
    firstName: employee.firstName,
    lastName: employee.lastName,
    basicSalary: parseFloat(employee.basicSalary),
    motherName: employee.motherName,
    spouseName: employee.spouseName,
    fatherName: employee.fatherName,
    maritalStatus: employee.maritalStatus,
    nic: employee.nic,
    mobilePhoneNo: employee.mobilePhoneNo,
    homePhoneNo: employee.homePhoneNo,
    gender: employee.gender,
    epfNo: employee.epfNo,
    address: employee.address,
    dob: employee.dob,
    workEmail: employee.workEmail,
    password: employee.password,
    employmentType: employee.employmentType,
    joinedDate: employee.joinedDate,
    role: employee.role,
    departmentId: parseInt(employee.department),
    positionId: parseInt(employee.position),
  };
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    // Construct the URL dynamically to include the employee ID
    const url = `http://localhost:8080/api/v1/auth/register`;

    const response = await authAxios.post(url, NewEmployee);
    console.log(response);
    return alert(response.data);
  } catch (err) {
    console.log("This is error", err);
    throw err;
  }
};
