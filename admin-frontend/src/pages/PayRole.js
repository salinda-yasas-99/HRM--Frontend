import React, { useState } from "react";
import Welcome from "../components/Welcome";
import PayRoleForm from "../components/PayRole/PayRoleForm";

const PayRole = () => {
  const [payAdd, setpayAdd] = useState(false);

  const handleAddClick = () => {
    setpayAdd(true);
  };

  const handleAddCloseClick = () => {
    setpayAdd(false);
  };

  const [payRole, setPayRole] = useState([
    {
      userName: "emp-001",
      name: "lakmini theekshana",
      position: "Hr Manager",
      depatment: "HR",
      email: "lakmini@diana.com",
    },
    {
      userName: "emp-001",
      name: "lakmini theekshana",
      position: "Hr Manager",
      depatment: "HR",
      email: "lakmini@diana.com",
    },
    {
      userName: "emp-001",
      name: "lakmini theekshana",
      position: "Hr Manager",
      depatment: "HR",
      email: "lakmini@diana.com",
    },
    {
      userName: "emp-001",
      name: "lakmini theekshana",
      position: "Hr Manager",
      depatment: "HR",
      email: "lakmini@diana.com",
    },
  ]);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="PayRoles" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium"
            onClick={handleAddClick}
          >
            Add PayRole
          </div>
        </div>
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end gap-x-10">
          {/* search */}
          {/* <div>
            <form className="max-w-md mx-auto">
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-[300px] p-4 ps-10 text-sm text-white font-bold border border-gray-300 rounded-lg bg-[#013a63] focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search employee"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div> */}
          {/* <div>
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-[#013a63] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-3"
              >
                <option selected>Month</option>
                <option value="US">January</option>
                <option value="CA">February</option>
                <option value="FR">March</option>
                <option value="DE">April</option>
                <option value="DE">May</option>
              </select>
            </form>
          </div> */}
        </div>
        <div className="attendence-details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    User Name
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Position
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Department
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {payRole.map((payItem, key) => {
                  return (
                    <tr
                      id={key}
                      className="bg-white border-b text-gray-900 font-medium"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {payItem.userName}
                      </td>
                      <td className="px-6 py-4">{payItem.name}</td>
                      <td className="px-6 py-4">{payItem.position}</td>
                      <td className="px-6 py-4">{payItem.depatment}</td>
                      <td className="px-6 py-4">{payItem.email}</td>
                      <td className="px-6 py-4">
                        <div className="bg-[#0c8ce9] flex justify-center py-[5px] rounded-md">
                          View
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {payAdd && <PayRoleForm closeModal={handleAddCloseClick} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayRole;
