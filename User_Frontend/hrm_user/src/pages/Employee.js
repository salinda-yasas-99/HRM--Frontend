import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import exp from "../assets/exp-icon.png";
import quali from "../assets/quali-icon.png";
import { getEmployeeDetails } from "../Services/RestApiCalls";
import ExpereinceForm from "../components/ExpereinceForm";
import QualificationForm from "../components/QualificationForm";
import { getExpereienceByUser } from "../Services/ExperienceService";
import { DeleteExperience } from "../Services/ExperienceService";
import { getQualificationByUser } from "../Services/QualificationService";
import { DeleteQualification } from "../Services/QualificationService";

const Employee = () => {
  const [employee, setemployee] = useState({});

  //for get
  const [quliAdd, setquliAdd] = useState(false);
  const [expAdd, setExpAdd] = useState(false);

  //for post
  const [qualifications, setQualifications] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const handleQualiClick = () => {
    setquliAdd(true);
  };

  const handleQualiCloseClick = () => {
    setquliAdd(false);
    fetchQualifications();
  };

  const handleEXPClick = () => {
    setExpAdd(true);
    fetchExpereience();
  };

  const handleeXPCloseClick = () => {
    setExpAdd(false);
    fetchExpereience();
  };

  const handleQualificationSubmit = async (qualification) => {
    setQualifications([...qualifications, qualification]);
    console.log("this is qualification", qualification);
    setquliAdd(false);
  };

  const handleExperienceSubmit = async (experience) => {
    setExperiences([...experiences, experience]);
    console.log("this is experience", experience);
    setExpAdd(false);
  };

  const fetchEmployee = async () => {
    const fetched = await getEmployeeDetails();
    setemployee(fetched);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchExpereience = async () => {
    const fetched = await getExpereienceByUser();
    setExperiences(fetched);
  };

  useEffect(() => {
    fetchExpereience();
  }, []);

  const fetchQualifications = async () => {
    const fetched = await getQualificationByUser();
    setQualifications(fetched);
  };

  useEffect(() => {
    fetchQualifications();
  }, []);

  const handleDeleteClick = async (expId) => {
    try {
      await DeleteExperience(expId);

      fetchExpereience();
    } catch (error) {
      console.error("Error deleting experience:", error);
      alert("There was an error deleting the experience.");
    }
  };

  const handleDeleteClickQualification = async (quliId) => {
    try {
      await DeleteQualification(quliId);

      fetchQualifications();
    } catch (error) {
      console.error("Error deleting qulaification:", error);
      alert("There was an error deleting the qualification.");
    }
  };

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px] pb-10">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome tab="Employee Info" />

        <div className="emp-details">
          <div className="flex bg-[#6a44d9] pl-10 pt-5 md:w-[96.4%] md:h-[100px] mt-10 rounded-t-xl">
            <div className="flex flex-col">
              <div className="w-[655.97px] text-white text-[35px] font-semibold">
                {employee.firstName} {employee.lastName}
              </div>
              <div className="w-[130.12px] text-white text-xs font-medium">
                {employee.positionName}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white pl-10 pt-5 md:w-[96.4%] md:h-[96vh] rounded-b-xl">
            <div className="flex flex-row gap-x-16">
              <div className="flex flex-col w-[46%] h-72 border-2 rounded-md border-black">
                <div className="text-black text-xl font-semibold px-5 py-4">
                  Basic Information
                </div>
                {/* Information */}
                <div className="grid grid-col-1 gap-y-2">
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">First Name</div>
                    <div>:</div>
                    <div>{employee.firstName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Last Name</div>
                    <div>:</div>
                    <div>{employee.lastName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Full Name</div>
                    <div>:</div>
                    <div>
                      {employee.firstName} {employee.lastName}
                    </div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Gender</div>
                    <div>:</div>
                    <div>{employee.gender}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Home phone number</div>
                    <div>:</div>
                    <div>{employee.homePhoneNo}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Mobile Number</div>
                    <div>:</div>
                    <div>{employee.mobilePhoneNo}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[46%] h-72 border-2 rounded-md border-black">
                <div className="text-black text-xl font-semibold px-5 py-4">
                  Work information
                </div>
                {/* Information */}
                <div className="grid grid-col-1 gap-y-2">
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">NIC</div>
                    <div>:</div>
                    <div>{employee.nic}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Work Email</div>
                    <div>:</div>
                    <div>{employee.workEmail}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Contract Type</div>
                    <div>:</div>
                    <div>{employee.employmentType}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Department</div>
                    <div>:</div>
                    <div>{employee.departmentName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Position</div>
                    <div>:</div>
                    <div>{employee.positionName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Joined date</div>
                    <div>:</div>
                    <div>{employee.joinedDate}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Salary</div>
                    <div>:</div>
                    <div>{employee.basicSalary}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 mt-5">
              <div className="flex flex-col w-[46%] min-h-[20rem] border-2 rounded-md border-black">
                <div className="text-black text-xl font-semibold px-5 py-4">
                  Personal information
                </div>
                {/* Information */}
                <div className="grid grid-col-1 gap-y-2">
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Date of Birth</div>
                    <div>:</div>
                    <div>{employee.dob}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Age</div>
                    <div>:</div>
                    <div>{employee.age}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Marital status</div>
                    <div>:</div>
                    <div>{employee.maritalStatus}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Address</div>
                    <div>:</div>
                    <div className="w-[150px]">{employee.address}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Spouse Name</div>
                    <div>:</div>
                    <div>{employee.spouseName ? employee.spouseName : "-"}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Father Name</div>
                    <div>:</div>
                    <div>{employee.fatherName}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Mother Name</div>
                    <div>:</div>
                    <div>{employee.motherName}</div>
                  </div>

                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">EPF Number</div>
                    <div>:</div>
                    <div>{employee.epfNo}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* experience */}
        {/* <div className="experience details">
          <div className="flex bg-[#6a44d9] pl-10 pt-5 md:w-[96.4%] md:h-[80px] mt-10 rounded-t-xl">
            <div className="flex flex-row gap-10">
              <div>
                <img src={exp} alt="exp" />
              </div>
              <div className="text-white text-xl font-semibold ">
                Experience
              </div>
            </div>
          </div>
          <div className="flex bg-white pl-10 pt-5 md:w-[96.4%] md:min-h-[15vh] rounded-b-xl pb-4">
            <table class="table-auto md:w-[96.4%]">
              <thead>
                <tr className="md:w-[96.4%] text-black text-base font-normal flex flex-row justify-between">
                  <th>Previuos Company</th>
                  <th>Work Duration</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {experience.map((exp, id) => {
                  return (
                    <tr
                      key={id}
                      className="md:w-[96.4%] text-black text-base font-normal flex flex-row justify-between"
                    >
                      <td>{exp.previuosCompany}</td>
                      <td>{exp.duration}</td>
                      <td>{exp.designation}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div> */}
        {/* Qualification */}
        {/* <div className="experience details">
          <div className="flex bg-[#6a44d9] pl-10 pt-5 md:w-[96.4%] md:h-[80px] mt-10 rounded-t-xl">
            <div className="flex flex-row gap-10">
              <div>
                <img src={quali} alt="quali" />
              </div>
              <div className="text-white text-xl font-semibold ">
                Qualifications
              </div>
            </div>
          </div>
          <div className="flex bg-white pl-10 pt-5 md:w-[96.4%] md:min-h-[15vh] rounded-b-xl pb-4">
            <table class="table-auto md:w-[96.4%]">
              <thead>
                <tr className="md:w-[96.4%] text-black text-base font-normal">
                  <th className=" text-left">Qualification</th>
                  <th className="text-center">University</th>
                  <th className="align-middle">Study Duration</th>
                  <th className="align-middle">Score</th>
                </tr>
              </thead>
              <tbody>
                {qualification.map((quali, id) => {
                  return (
                    <tr
                      key={id}
                      className="md:w-[96.4%] text-black text-base font-normal "
                    >
                      <td className="align-middle text-left">
                        {quali.qualification}
                      </td>
                      <td className="align-middle text-center">
                        {quali.university}
                      </td>
                      <td className="align-middle text-center">
                        {quali.duration}
                      </td>
                      <td className="align-middle text-center">
                        {quali.score}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div> */}
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
                    Qualification Description
                  </th>

                  <th scope="col" class="px-6 py-5">
                    Complication Year
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Institute
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {qualifications.length > 0 &&
                  qualifications.map((qli, key) => {
                    return (
                      <tr
                        id={key}
                        className="bg-white border-b text-gray-900 font-medium"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {qli.courseName}
                        </td>
                        <td className="px-6 py-4">{qli.qualificationDesc}</td>
                        <td className="px-6 py-4">{qli.year}</td>
                        <td className="px-6 py-4">{qli.instituteName}</td>

                        <td>
                          <div
                            className="bg-[#ed1b24] flex justify-center py-[5px] rounded-md"
                            onClick={() =>
                              handleDeleteClickQualification(
                                qli.qualificationId
                              )
                            }
                          >
                            Delete
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
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
                  <th scope="col" class="px-6 py-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {experiences.length > 0 &&
                  experiences.map((exp, key) => {
                    return (
                      <tr
                        id={key}
                        className="bg-white border-b text-gray-900 font-medium"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {exp.companyName}
                        </td>
                        <td className="px-6 py-4">{exp.designation}</td>
                        <td className="px-6 py-4">{exp.startDate}</td>
                        <td className="px-6 py-4">{exp.endDate}</td>

                        <td>
                          <div
                            className="bg-[#ed1b24] flex justify-center py-[5px] rounded-md"
                            onClick={() => handleDeleteClick(exp.experienceId)}
                          >
                            Delete
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
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

export default Employee;
