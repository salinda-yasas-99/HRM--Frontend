import React from "react";
import Welcome from "../components/Welcome";
import Search from "../components/Search";

const DashBoard = () => {
  return (
    <div className="flex flex-col bg-[#cfe0fa] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        {/* <div className="flex flex-row">
          <Search />
        </div> */}

        <div className="flex flex-row mt-[25px] gap-x-[90px]">
          <div className="bg-white flex rounded-xl w-[15rem] h-[10rem]"></div>
          <div className="bg-white flex rounded-xl w-[15rem] h-[10rem]"></div>
          <div className="bg-white flex rounded-xl w-[15rem] h-[10rem]"></div>
          <div className="bg-white flex rounded-xl w-[15rem] h-[10rem]"></div>
        </div>
        <div className="flex bg-white pl-10 pt-5 md:w-[96.4%]  md:h-[50vh] mt-10 rounded-xl"></div>
      </div>
    </div>
  );
};

export default DashBoard;
