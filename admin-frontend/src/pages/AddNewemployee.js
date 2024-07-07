import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import TextBox from "../components/TextBox";
import { AddNewEmployee } from "../Services/RestApiCalls";
import QualificationForm from "../components/qualification/QualificationForm";
import ExpereinceForm from "../components/experience/ExpereinceForm";
import { getAllDepartments } from "../Services/DepartmentAPI";
import { getAllPositions } from "../Services/PositionsAPi";

const AddNewemployee = () => {
  //for get
  const [quliAdd, setquliAdd] = useState(false);
  const [expAdd, setExpAdd] = useState(false);

  //for post
  const [qualifications, setQualifications] = useState();
  const [experiences, setExperiences] = useState();

  const [departments, setDepartments] = useState();

  useEffect(() => {
    const fetchDepartments = async () => {
      const fetched = await getAllDepartments();
      setDepartments(fetched);
    };
    fetchDepartments();
  }, []);

  const [positions, setPositions] = useState();

  useEffect(() => {
    const fetchPositions = async () => {
      const fetched = await getAllPositions();
      setPositions(fetched);
    };

    fetchPositions();
  }, []);

  const handleQualiClick = () => {
    setquliAdd(true);
  };

  const handleQualiCloseClick = () => {
    setquliAdd(false);
  };

  const handleEXPClick = () => {
    setExpAdd(true);
  };

  const handleeXPCloseClick = () => {
    setExpAdd(false);
  };

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    role: "",
    gender: "",
    nic: "",
    mobilePhoneNo: "",
    homePhoneNo: "",
    workEmail: "",
    employmentType: "",
    department: "",
    position: "",
    basicSalary: "",
    joinedDate: "",
    epfNo: "",
    dob: "",
    maritalStatus: "",
    address: "",
    spouseName: "",
    fatherName: "",
    motherName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee({
      ...employee,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

    const NICPattern = /^\d{9}V$|^\d{12}$/;

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!dateFormatRegex.test(employee.joinedDate)) {
      alert(
        "Invalid joined date format. Please enter the date in YYYY-MM-DD format."
      );
      return;
    }

    if (!dateFormatRegex.test(employee.dob)) {
      alert(
        "Invalid date of birth format. Please enter the date in YYYY-MM-DD format."
      );
      return;
    }

    if (!NICPattern.test(employee.nic)) {
      alert("Invalid NIC. Please enter valid NIC");
      return;
    }

    if (!emailRegex.test(employee.workEmail)) {
      alert("Invalid email. Please enter valid email");
      return;
    }

    const requiredFields = [
      "firstName",
      "lastName",
      "role",
      "nic",
      "gender",
      "mobilePhoneNo",
      "homePhoneNo",
      "workEmail",
      "employmentType",
      "department",
      "position",
      "basicSalary",
      "joinedDate",
      "epfNo",
      "dob",
      "role",
      "maritalStatus",
      "address",
      "fatherName",
      "motherName",
      "password",
      "confirmPassword",
    ];

    for (let field of requiredFields) {
      if (!employee[field]) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }

    if (employee.password !== employee.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Form Data:", employee);

    try {
      await AddNewEmployee(employee);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleQualificationSubmit = async (qualification) => {
    setQualifications([...qualifications, qualification]);
    console.log("this is qualification", qualification);
    setquliAdd(false);
  };

  const handleExperienceSubmit = async (experience) => {
    setQualifications([...experiences, experience]);
    console.log("this is experience", experience);
    setExpAdd(false);
  };

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px] pb-6">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Register Employee" />
        {/* Add new employee */}
        <div className="flex flex-col bg-white pl-10 pt-5 md:w-[96.4%] rounded-xl mt-7 pb-5">
          <div className="flex flex-row gap-x-16">
            <div className="flex flex-col w-[46%] mb-4">
              <div className="text-black text-xl font-semibold px-5 py-4">
                Add New Employee
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8 md:w-[96.4%]">
              {/* cell 1 */}
              <div className="grid grid-col-1 gap-y-2 ">
                <div className="text-black text-md font-semibold px-5 py-4">
                  Basic Information
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">First Name</div>
                  <div>
                    <TextBox
                      label="firstName"
                      value={employee.firstName}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Last Name</div>
                  <div>
                    <TextBox
                      label="lastName"
                      value={employee.lastName}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                {/* <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Full Name</div>
                <div>
                  <TextBox
                    label="fullName"
                    value={employee.fullName}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div> */}
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Gender</div>
                  <div>
                    <select
                      id="gender"
                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-[300px] p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                      value={employee.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">NIC</div>
                  <div>
                    <TextBox
                      label="nic"
                      value={employee.nic}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                {/* <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Personal E-mail</div>
                <div>
                  <TextBox />
                </div>
              </div> */}
                {/* <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Mobile Number</div>
                <div>
                  <TextBox
                    label="mobileNumber"
                    value={employee.mobileNumber}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div> */}
              </div>
              {/* cell 2 */}
              <div className="grid grid-col-1 gap-y-2">
                <div className="flex flex-row px-5 gap-x-[20%] mt-11">
                  {/* <div className="w-[140px]">User Name</div>

                <div>
                  <TextBox />
                </div> */}
                </div>
                {/* <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Work Email</div>
                <div>
                  <TextBox
                    label="workMail"
                    value={employee.workEmail}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div> */}
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Role Type</div>
                  <div>
                    <select
                      id="role"
                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-[300px] p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                      value={employee.role}
                      onChange={handleChange}
                    >
                      <option value="">Select Role</option>
                      <option value="EMPLOYEE">EMPLOYEE</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Department</div>
                  <div>
                    <select
                      id="department"
                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-[300px] p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                      value={employee.department}
                      onChange={handleChange}
                    >
                      <option value="">Select department</option>
                      {departments !== undefined ? (
                        departments.map((dept, key) => {
                          return (
                            <option id={key} value={dept.departmentId}>
                              {dept.departmentName}
                            </option>
                          );
                        })
                      ) : (
                        <option value="">No values</option>
                      )}
                    </select>
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Position</div>
                  <div>
                    <select
                      id="position"
                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-[300px] p-2.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                      value={employee.position}
                      onChange={handleChange}
                    >
                      <option value="">Select Position</option>
                      {positions !== undefined ? (
                        positions.map((pos, key) => {
                          return (
                            <option id={key} value={pos.positionId}>
                              {pos.positionName}
                            </option>
                          );
                        })
                      ) : (
                        <option value="">No values</option>
                      )}
                    </select>
                  </div>
                </div>
                {/* <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Salary</div>
                  <div>
                    <TextBox
                      label="basicSalary"
                      value={employee.basicSalary}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div> */}
              </div>
              {/* cell 3*/}
              <div className="grid grid-col-1 gap-y-2 ">
                <div className="text-black text-md font-semibold px-5 py-4">
                  Work Information
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Start date</div>
                  <div>
                    <TextBox
                      label="joinedDate"
                      value={employee.joinedDate}
                      onChange={handleChange}
                      placeholder="ex:- 1987-05-30"
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Work-Email</div>
                  <div>
                    <TextBox
                      label="workEmail"
                      value={employee.workEmail}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Contract Type</div>
                  <div>
                    <TextBox
                      label="employmentType"
                      value={employee.employmentType}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>

                {/* <div className="flex flex-row px-5 gap-x-[20%]">
                <div className="w-[140px]">Mobile Number</div>
                <div>
                  <TextBox
                    label="mobileNumber"
                    value={employee.mobileNumber}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div> */}
              </div>
              {/* cell 4*/}
              <div className="grid grid-col-1 gap-y-2 ">
                <div className="flex flex-row px-5 gap-x-[20%] mt-20">
                  <div className="w-[140px]">Password</div>
                  <div>
                    <input
                      id="password"
                      value={employee.password}
                      onChange={handleChange}
                      type="password"
                      className="bg-[#fff] border text-gray-900 text-sm rounded-lg block w-[300px] p-2.5 border-gray-600 placeholder-gray-400"
                      placeholder={"Enter password"}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Confirm password</div>
                  <div>
                    {/* <input
                      id="cofirmPassword"
                      value={employee.confirmPassword}
                      onChange={handleChange}
                      type="password"
                      className="bg-[#fff] border text-gray-900 text-sm rounded-lg block w-[300px] p-2.5 border-gray-600 placeholder-gray-400"
                      placeholder={"Confirm password"}
                      required
                    /> */}
                    <input
                      id="confirmPassword"
                      value={employee.confirmPassword}
                      onChange={handleChange}
                      type="password"
                      className="bg-[#fff] border text-gray-900 text-sm rounded-lg block w-[300px] p-2.5 border-gray-600 placeholder-gray-400"
                      placeholder={"Confirm password"}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Basic Salary</div>
                  <div>
                    <TextBox
                      label="basicSalary"
                      value={employee.basicSalary}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">EPF Number</div>
                  <div>
                    <TextBox
                      label="epfNo"
                      value={employee.epfNo}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
              </div>
              {/* cell 5*/}
              <div className="grid grid-col-1 gap-y-2 ">
                <div className="text-black text-md font-semibold px-5 py-4">
                  Personal Information
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Date of birth</div>
                  <div>
                    <TextBox
                      label="dob"
                      value={employee.dob}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Address</div>
                  <div>
                    <TextBox
                      label="address"
                      value={employee.address}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Fathers Name</div>
                  <div>
                    <TextBox
                      label="fatherName"
                      value={employee.fatherName}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Home phone no.</div>
                  <div>
                    <TextBox
                      label="homePhoneNo"
                      value={employee.homePhoneNo}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
              </div>
              {/* cell 6*/}
              <div className="grid grid-col-1 gap-y-2 ">
                <div className="flex flex-row px-5 gap-x-[20%] mt-11">
                  <div className="w-[140px]">marital Status</div>
                  <div>
                    <TextBox
                      label="maritalStatus"
                      value={employee.maritalStatus}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">spouse’s name</div>
                  <div>
                    <TextBox
                      label="spouseName"
                      value={employee.spouseName}
                      onChange={handleChange}
                      required={false}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Mothers Name</div>
                  <div>
                    <TextBox
                      label="motherName"
                      value={employee.motherName}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-row px-5 gap-x-[20%]">
                  <div className="w-[140px]">Mobile phone no.</div>
                  <div>
                    <TextBox
                      label="mobilePhoneNo"
                      value={employee.mobilePhoneNo}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid col-span-2 md:w-[96.4%] mt-[25px] justify-end">
              <button
                type="submit"
                className="bg-[#013a63] p-2 rounded-lg text-white font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Qualification */}
        <div className="flex flex-col bg-white pl-10 pt-5 md:w-[96.4%] rounded-xl mt-7 pb-5">
          <div className="flex flex-row gap-x-16">
            <div className="flex flex-col w-[46%] mb-4">
              <div className="text-black text-xl font-semibold px-5 py-4">
                Qualification
              </div>
            </div>
          </div>
          <div className="grid col-span-2 md:w-[96.4%] mt-[25px] justify-end mb-5">
            <div
              className="bg-[#013a63] p-2 rounded-lg text-white font-medium"
              onClick={handleQualiClick}
            >
              Add Qualification
            </div>
          </div>
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Course
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Institute
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Marks
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Complication Year
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                {leaves.map((appliedLeaves, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appliedLeaves.Type}
                      </td>
                      <td className="px-6 py-4">{appliedLeaves.From}</td>
                      <td className="px-6 py-4">{appliedLeaves.To}</td>
                      <td className="px-6 py-4">{appliedLeaves.NoOfDays}</td>
                      <td className="px-6 py-4">
                        <div
                          className={`${
                            appliedLeaves.Status === "Pending"
                              ? "bg-[#facc96]"
                              : appliedLeaves.Status === "Approved"
                              ? "bg-[#bbf2b2]"
                              : appliedLeaves.Status === "Rejected"
                              ? "bg-[#f5a2a2]"
                              : ""
                          } flex justify-center py-1 rounded-lg`}
                        >
                          {appliedLeaves.Status}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody> */}
            </table>
            {quliAdd && (
              <QualificationForm
                closeModal={handleQualiCloseClick}
                onSubmit={handleQualificationSubmit}
              />
            )}
          </div>
        </div>
        {/* Experience */}
        <div className="flex flex-col bg-white pl-10 pt-5 md:w-[96.4%] rounded-xl mt-7 pb-5">
          <div className="flex flex-row gap-x-16">
            <div className="flex flex-col w-[46%] mb-4">
              <div className="text-black text-xl font-semibold px-5 py-4">
                Experience
              </div>
            </div>
          </div>
          <div className="grid col-span-2 md:w-[96.4%] mt-[25px] justify-end mb-5">
            <div
              className="bg-[#013a63] p-2 rounded-lg text-white font-medium"
              onClick={handleEXPClick}
            >
              Add Experience
            </div>
          </div>
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Previous Company
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Designation
                  </th>
                  <th scope="col" class="px-6 py-5">
                    From
                  </th>
                  <th scope="col" class="px-6 py-5">
                    To
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                {leaves.map((appliedLeaves, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appliedLeaves.Type}
                      </td>
                      <td className="px-6 py-4">{appliedLeaves.From}</td>
                      <td className="px-6 py-4">{appliedLeaves.To}</td>
                      <td className="px-6 py-4">{appliedLeaves.NoOfDays}</td>
                      <td className="px-6 py-4">
                        <div
                          className={`${
                            appliedLeaves.Status === "Pending"
                              ? "bg-[#facc96]"
                              : appliedLeaves.Status === "Approved"
                              ? "bg-[#bbf2b2]"
                              : appliedLeaves.Status === "Rejected"
                              ? "bg-[#f5a2a2]"
                              : ""
                          } flex justify-center py-1 rounded-lg`}
                        >
                          {appliedLeaves.Status}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody> */}
            </table>
            {expAdd && (
              <ExpereinceForm
                closeModal={handleeXPCloseClick}
                onSubmit={handleExperienceSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewemployee;
