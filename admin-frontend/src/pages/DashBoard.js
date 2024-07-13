import React from "react";
import EmployeeCountCard from "../components/dashboard/EmployeeCountCard";
import AnnouncementsCard from "../components/dashboard/AnnouncementsCard";
import PositionCountCard from "../components/dashboard/PositionCountCard";
import DepartmentCountCard from "../components/dashboard/DepartmentCountCard";
import LeaveCountCard from "../components/dashboard/LeaveCountCard";
import EmployeesByDepartmentChart from "../components/dashboard/EmployeesByDepartmentChart";
import EmptyPositionsChart from "../components/dashboard/EmptyPositionsChart";

const DashBoard = () => {
  return (
    <div className="flex flex-col bg-[#cfe0fa] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        {/* <div className="flex flex-row">
        <Search />
      </div> */}

        <div className="flex flex-row mt-[25px] md:w-[96.4%] gap-5">
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <EmployeeCountCard empCount={5} />
          </div>
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <AnnouncementsCard announcementCount={5} />
          </div>
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <PositionCountCard positionCount={5} />
          </div>
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <DepartmentCountCard departmentCount={5} />
          </div>
          <div className="bg-white flex rounded-xl w-1/5 h-[10rem]">
            <LeaveCountCard leaveCount={5} />
          </div>
        </div>
        <div className="flex gap-x-2 justify-around bg-white p-10  md:w-[96.4%] my-10 rounded-xl">
          <EmployeesByDepartmentChart />
          <div className="w-1 bg-[#cfe0fa] h-full"></div>
          <EmptyPositionsChart />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
