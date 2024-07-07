import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import { getAllPositions } from "../Services/PositionsAPi";
import { getAllLeaves } from "../Services/LeaveTypes";
import LeaveTypeForm from "../components/leaveTypes/LeaveTypeForm";
import AddLeaveToEMp from "../components/leaveTypes/AddLeaveToEMp";
import { getAllEmployees } from "../Services/RestApiCalls";

const AddLeaveType = () => {
  const [leaveAdd, setleaveAdd] = useState(false);
  const [leaveEmpAdd, setleaveEmpAdd] = useState(false);

  const handleAddClick = () => {
    setleaveAdd(true);
  };

  const handleAddCloseClick = () => {
    setleaveAdd(false);
  };

  const handleEmpAddClick = () => {
    setleaveEmpAdd(true);
  };

  const handleEmpAddCloseClick = () => {
    setleaveEmpAdd(false);
  };

  const [leaves, setLeaves] = useState();

  useEffect(() => {
    const fetchPositions = async () => {
      const fetched = await getAllLeaves();
      setLeaves(fetched);
    };

    fetchPositions();
  }, []);

  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Leave Types" />
        <div className="flex flex-row md:w-[96.4%] mt-[25px] justify-end">
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium mr-10"
            onClick={handleEmpAddClick}
          >
            Add Leeave Type To Employee
          </div>
          <div
            className="bg-[#013a63] p-3 rounded-lg text-white font-medium"
            onClick={handleAddClick}
          >
            Add Leave Type
          </div>
        </div>
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Leave Type
                  </th>
                  <th scope="col" class="px-6 py-5">
                    No of Leaves
                  </th>

                  {/* <th scope="col" class="px-6 py-5">
                    action
                  </th> */}
                  <th scope="col" class="px-6 py-5">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaves !== undefined ? (
                  leaves.map((leav, key) => {
                    return (
                      <tr
                        id={key}
                        className="bg-white border-b text-gray-900 font-medium"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {leav.leaveType}
                        </td>
                        <td className="px-6 py-4">{leav.noOfLaaves}</td>

                        {/* <td className="px-6 py-4">
                          <div
                            className="bg-[#0c8ce9] flex justify-center py-[5px] rounded-md"
                            onClick={handleUpdateClick}
                          >
                            Update
                          </div>
                        </td> */}
                        <td className="px-6 py-4">
                          <div className="bg-[#ed1b24] flex justify-center py-[5px] rounded-md">
                            Delete
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-gray-500 font-bold"
                    >
                      Currently no leave types
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {leaveAdd && <LeaveTypeForm closeModal={handleAddCloseClick} />}
            {leaveEmpAdd && (
              <AddLeaveToEMp closeModal={handleEmpAddCloseClick} />
            )}
            {/* {posUpdate && (
              <UpdatePosition closeModal={handleUpdateCloseClick} />
            )}  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLeaveType;
