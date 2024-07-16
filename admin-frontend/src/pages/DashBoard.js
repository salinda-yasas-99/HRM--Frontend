import React, { useEffect, useState } from "react";
import EmployeeCountCard from "../components/dashboard/EmployeeCountCard";
import AnnouncementsCard from "../components/dashboard/AnnouncementsCard";
import PositionCountCard from "../components/dashboard/PositionCountCard";
import DepartmentCountCard from "../components/dashboard/DepartmentCountCard";
import LeaveCountCard from "../components/dashboard/LeaveCountCard";
import EmployeesByDepartmentChart from "../components/dashboard/EmployeesByDepartmentChart";
import EmptyPositionsChart from "../components/dashboard/EmptyPositionsChart";
import { getAllEmployees } from "../Services/RestApiCalls";
import { getAllPositions } from "../Services/PositionsAPi";
import { getAllDepartments } from "../Services/DepartmentAPI";
import { getAllAnnouncements } from "../Services/AnnouncementApi";

const DashBoard = () => {
  const [empCount, setEmpCount] = useState();
  const [annCount, setAnnCount] = useState();
  const [posCount, setPosCount] = useState();
  const [deptCount, setDeptCount] = useState();
  const [leavCount, setLeavesCount] = useState();

  const fetchEmployees = async () => {
    const fetched = await getAllEmployees();
    setEmpCount(fetched.length);
  };

  const fetchAnnouncements = async () => {
    const fetched = await getAllAnnouncements();
    setAnnCount(fetched.length);
  };

  const fetchPositions = async () => {
    const fetched = await getAllPositions();
    setPosCount(fetched.length);
  };

  const fetchDepartments = async () => {
    const fetched = await getAllDepartments();
    setDeptCount(fetched.length);
  };

  // const fetchLeaves = async () => {
  //   const fetched = await get();
  //   setDeptCount(fetched.length);
  // };

  useEffect(() => {
    fetchEmployees();
    fetchAnnouncements();
    fetchPositions();
    fetchDepartments();
  }, []);
  return (
    <div className="flex flex-col bg-[#cfe0fa] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        {/* <div className="flex flex-row">
        <Search />
      </div> */}

        <div className="flex flex-row mt-[25px] md:w-[96.4%] gap-5">
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <EmployeeCountCard empCount={empCount} />
          </div>
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <AnnouncementsCard announcementCount={annCount} />
          </div>
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <PositionCountCard positionCount={posCount} />
          </div>
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <DepartmentCountCard departmentCount={deptCount} />
          </div>
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <LeaveCountCard leaveCount={5} />
          </div>
        </div>
        <div className="flex gap-x-2 justify-around bg-white p-10  md:w-[96.4%] my-10 rounded-xl">
          <EmployeesByDepartmentChart />
          <div className="w-1 bg-[#cfe0fa] h-100"></div>
          <EmptyPositionsChart />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
