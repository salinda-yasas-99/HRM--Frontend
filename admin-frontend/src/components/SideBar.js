import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import dashImg from "../assets/dashbrd.png";
import attd from "../assets/attd.png";
import emp from "../assets/emp.png";
import leaves from "../assets/leaves.png";
import logout from "../assets/logout.png";
import payrole from "../assets/payrole.png";

const Sidebar = ({ activetab, onTabChange }) => {
  const [isEmployeeDropdownOpen, setEmployeeDropdownOpen] = useState(false);
  const [isLeaveDropDown, setLeaveDropDown] = useState(false);

  const Tabs = [
    { name: "Dashboard", imgSrc: dashImg },
    { name: "Employees", imgSrc: emp },
    { name: "Departments", imgSrc: leaves },
    { name: "Positions", imgSrc: leaves },
    { name: "Attendances", imgSrc: payrole },
    { name: "Announcements", imgSrc: attd },
    { name: "PayRoles", imgSrc: attd },
    { name: "Leaves", imgSrc: attd },
  ];

  const handleEmployeeClick = () => {
    setEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };

  const handleLeaveClick = () => {
    setLeaveDropDown(!isLeaveDropDown);
  };

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("workEmail");
    window.location.href = "/";
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white">
        <div className="flex items-center ml-7">
          <img src={logo} className="h-[45px] w-[120px]" alt="diana" />
        </div>

        <ul className="space-y-2 font-medium md:mt-8">
          {Tabs.map((tab, index) => {
            if (tab.name === "Employees") {
              return (
                <li
                  key={index}
                  className={activetab === tab.name ? "active" : ""}
                >
                  <button
                    onClick={handleEmployeeClick}
                    className="flex items-center p-2 text-[#013a63] pl-7 rounded-lg hover:bg-[#e3f2fd] group w-full text-left"
                  >
                    <img src={tab.imgSrc} className="w-5 h-5" alt={tab.name} />
                    <span className="ms-3">{tab.name}</span>
                  </button>
                  {isEmployeeDropdownOpen && (
                    <ul className="ml-5 mt-1 space-y-2">
                      <li className="pl-4">
                        <Link
                          to="/admin/employees"
                          className="flex items-center p-2 text-[#013a63] rounded-lg hover:bg-[#e3f2fd] group"
                        >
                          All employees
                        </Link>
                      </li>
                      <li className="pl-4">
                        <Link
                          to="/admin/employees/add"
                          className="flex items-center p-2 text-[#013a63] rounded-lg hover:bg-[#e3f2fd] group"
                        >
                          Add New Employee
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            }

            if (tab.name === "Leaves") {
              return (
                <li
                  key={index}
                  className={activetab === tab.name ? "active" : ""}
                >
                  <button
                    onClick={handleLeaveClick}
                    className="flex items-center p-2 text-[#013a63] pl-7 rounded-lg hover:bg-[#e3f2fd] group w-full text-left"
                  >
                    <img src={tab.imgSrc} className="w-5 h-5" alt={tab.name} />
                    <span className="ms-3">{tab.name}</span>
                  </button>
                  {isLeaveDropDown && (
                    <ul className="ml-5 mt-1 space-y-2">
                      <li className="pl-4">
                        <Link
                          to="/admin/leaves"
                          className="flex items-center p-2 text-[#013a63] rounded-lg hover:bg-[#e3f2fd] group"
                        >
                          All LeaveForms
                        </Link>
                      </li>
                      <li className="pl-4">
                        <Link
                          to="/admin/leaves/add"
                          className="flex items-center p-2 text-[#013a63] rounded-lg hover:bg-[#e3f2fd] group"
                        >
                          Add Leave Type
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li
                key={index}
                className={activetab === tab.name ? "active" : ""}
              >
                <Link
                  to={`/admin/${tab.name.toLowerCase()}`}
                  className="flex items-center p-2 text-[#013a63] pl-7 rounded-lg hover:bg-[#e3f2fd] group"
                >
                  <img src={tab.imgSrc} className="w-5 h-5" alt={tab.name} />
                  <span className="ms-3">{tab.name}</span>
                </Link>
              </li>
            );
          })}

          <button
            onClick={handleLogout}
            className="flex items-center w-[200px] p-2 text-[#013a63] pl-7 pr-7 rounded-lg hover:bg-[#e3f2fd] font-medium"
          >
            <img src={logout} className="w-5 h-5" alt="logout" />
            <span className="ms-3">Logout</span>
          </button>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
