import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import exp from "../assets/exp-icon.png";
import quali from "../assets/quali-icon.png";
import { getEmployeeDetails } from "../Services/RestApiCalls";

const Employee = () => {
  const [employee, setemployee] = useState({
    //   firstName: "Lakmini",
    //   lastName: "Theekshana",
    //   fullName: "Lakmini theekshan",
    //   gender: "female",
    //   personalMail: "lakmini@gmail.com",
    //   mobileNumber: "077-8707845",
    //   userName: "Lakmini",
    //   workMail: "lakmini@diana.lk",
    //   contractType: "Permenant",
    //   department: "Human resources",
    //   position: "Manager",
    //   salary: 100000,
    //   joinedDate: "2024-03-05",
    //   epfNo: "1325-344-565",
    //   dob: "1999-03-8",
    //   maritalStatus: "single",
    //   address: "143/1, Samapath Uyana, Kirbathgoda",
    //   spouseName: "",
    //   fatherName: "Amal Karunarathne",
    //   motherName: "jayani karunathne",
    //   emergencyNum: "077-5804567",
  });

  const fetchEmployee = async () => {
    const fetched = await getEmployeeDetails();
    setemployee(fetched);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const [experience, setExperience] = useState([
    {
      previuosCompany: "ABC Company Pvt(Ltd)",
      duration: "2021 - 2022",
      designation: "UI / UX Engineer",
    },
    {
      previuosCompany: "ABC Company Pvt(Ltd)",
      duration: "2021 - 2022",
      designation: "UI / UX Engineer",
    },
    {
      previuosCompany: "ABC Company Pvt(Ltd)",
      duration: "2021 - 2022",
      designation: "UI / UX Engineer",
    },
  ]);

  const [qualification, setQualification] = useState([
    {
      qualification: "Bcs. Information Technology (Special in SE)",
      university: "University of Wayamba",
      duration: "2020 - 2024",
      score: "2.8",
    },
    {
      qualification: "Bcs. update (Special in SE)",
      university: "University of moratuewa",
      duration: "2020 - 2024",
      score: "2.8",
    },
    // {
    //   qualification: "Bcs. Information Technology (Special in SE)",
    //   university: "University of Wayamba",
    //   duration: "2020 - 2024",
    //   score: "2.8",
    // },
  ]);

  //   useEffect(() => {
  //     const fetchBooks = async () => {
  //         const books = await getBooks();
  //         setBooksArray(books);
  //     };

  //     fetchBooks();
  // }, []);

  // useEffect(() => {
  //     console.log("This is books array passed ", BooksArray);
  // }, [BooksArray]);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px] pb-10">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Employee Info" />

        <div className="emp-details">
          <div className="flex bg-[#6a44d9] pl-10 pt-5 md:w-[96.4%] md:h-[100px] mt-10 rounded-t-xl">
            <div className="flex flex-col">
              <div className="w-[655.97px] text-white text-[35px] font-semibold">
                {employee.firstName} {employee.lastName}
              </div>
              <div className="w-[130.12px] text-white text-xs font-medium">
                {employee.position}
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
                    <div>{employee.department}</div>
                  </div>
                  <div className="flex flex-row px-5 gap-x-[20%]">
                    <div className="w-[140px]">Position</div>
                    <div>:</div>
                    <div>{employee.position}</div>
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
                    <div>{employee.marialStatus}</div>
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
        <div className="experience details">
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
        </div>
        {/* Qualification */}
        <div className="experience details">
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
        </div>
      </div>
    </div>
  );
};

export default Employee;
