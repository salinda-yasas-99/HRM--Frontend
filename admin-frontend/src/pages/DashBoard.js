import React, { useEffect, useState } from "react";
import EmployeeCountCard from "../components/dashboard/EmployeeCountCard";
import AnnouncementsCard from "../components/dashboard/AnnouncementsCard";
import PositionCountCard from "../components/dashboard/PositionCountCard";
import DepartmentCountCard from "../components/dashboard/DepartmentCountCard";
import LeaveCountCard from "../components/dashboard/LeaveCountCard";
import EmployeesByDepartmentChart from "../components/dashboard/EmployeesByDepartmentChart";
import EmployeesByPositionChart from "../components/dashboard/EmployeesByPositionChart";
import { getAllEmployees } from "../Services/RestApiCalls";
import { getAllPositions } from "../Services/PositionsAPi";
import { getAllDepartments } from "../Services/DepartmentAPI";
import { getAllAnnouncements } from "../Services/AnnouncementApi";
import { getPendingLeaves } from "../Services/LeaveService";
import {
  getEmployeeCountByDepartment,
  getEmployeeCountByPosition,
} from "../Services/DashboardChartService";

const DashBoard = () => {
  const [empCount, setEmpCount] = useState();
  const [annCount, setAnnCount] = useState();
  const [posCount, setPosCount] = useState();
  const [deptCount, setDeptCount] = useState();
  const [leavCount, setLeavesCount] = useState();
  const [empByDeptData, setEmpByDeptData] = useState([]);
  const [empByPosData, setEmpByPosData] = useState([]);

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

  const fetchLeaves = async () => {
    const fetched = await getPendingLeaves();
    setLeavesCount(fetched.length);
  };

  const getDataForEmployessByDepartmentChart = async () => {
    try {
      const response = await getEmployeeCountByDepartment();
      setEmpByDeptData(response);
    } catch (error) {
      console.error(
        "Error fetching data for Employees by Department Chart",
        error
      );
    }
  };

  const getDataForEmployeeCountByPositionChart = async () => {
    try {
      const response = await getEmployeeCountByPosition();
      setEmpByPosData(response);
    } catch (error) {
      console.error(
        "Error fetching data for Employee Count by Position Chart",
        error
      );
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchAnnouncements();
    fetchPositions();
    fetchDepartments();
    fetchLeaves();
    getDataForEmployessByDepartmentChart();
    getDataForEmployeeCountByPositionChart();
  }, []);
  return (
    <div className="flex flex-col bg-[#cfe0fa] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
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
            <LeaveCountCard leaveCount={leavCount} />
          </div>
        </div>
        <div className="flex gap-x-2 justify-around bg-white p-10  md:w-[96.4%] my-10 rounded-xl">
          <EmployeesByDepartmentChart
            depData={empByDeptData?.departmentList}
            countData={empByDeptData?.employeeCount}
          />
          <div className="w-1 bg-[#cfe0fa] h-100"></div>
          <EmployeesByPositionChart
            possitionData={empByPosData?.positionList}
            countData={empByPosData?.employeeCount}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
