import React, { useState } from "react";
import logo from "../assets/logo.png";
import lock from "../assets/lock.png";
import TextBox from "../components/TextBox";
import { logUser } from "../Services/RestApiCalls";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [workEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const user = { workEmail, password };

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(workEmail)) {
      setEmailError("Invalid email address");
      return;
    }

    setEmailError(""); // Clear error message

    try {
      const loginSuccess = await logUser(user);

      if (loginSuccess) {
        if (loginSuccess) {
          navigate("/dashboard"); // Navigate only if login is successful
        } else {
          console.error("Login Failed");
        }
      } else {
        console.error("Login Failed");
        // Optionally, set an error state or show a message to the user
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#497cc9]">
      <div className="h-[80px] bg-white flex flex-row w-full items-center justify-center">
        <img src={logo} className="h-[70px]" alt="Logo" />
      </div>
      <div className="flex flex-grow items-center justify-center bg-white rounded-[33px] my-[6%] md:max-h-[calc(100vh - 160px)] md:w-[415px]">
        <div className="flex flex-col items-center justify-center md:w-full py-[5%]">
          <img src={lock} className="h-[40px]" alt="lock" />
          <form onSubmit={handleFormSubmit}>
            <div className="mt-2">
              <div>
                <label className="block mb-2 text-sm">User Name</label>
                <input
                  type="text"
                  id="email"
                  value={workEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#fff] border text-gray-900 text-sm rounded-lg block w-[330px] p-2.5 border-gray-600 placeholder-gray-400"
                  placeholder={"Enter username"}
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <label className="block mb-2 text-sm">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#fff] border text-gray-900 text-sm rounded-lg block w-[330px] p-2.5 border-gray-600 placeholder-gray-400"
                  placeholder={"Enter Your Password"}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#6a44d9] md:w-[330px] text-white font-bold mt-[35px] rounded-xl py-[6px]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="bg-white w-full h-[50px] "></div>
    </div>
  );
};

export default LogIn;
