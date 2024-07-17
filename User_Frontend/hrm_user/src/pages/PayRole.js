import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import { getAllPaySheets } from "../Services/PaySlipApi";

const PayRole = () => {
  const [payRole, setPayRole] = useState([]);

  const fetchPaySheets = async () => {
    const fetched = await getAllPaySheets();
    setPayRole(fetched);
  };

  useEffect(() => {
    fetchPaySheets();
  }, []);
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome tab="PayRole" />
        <div className="leave details mt-8">
          <div class="relative md:w-[96.4%] overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-xs text-white uppercase bg-[#6a44d9]">
                <tr>
                  <th scope="col" class="px-6 py-5">
                    Pay Month
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Pay Date
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Issued date
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Basic Amount
                  </th>
                  <th scope="col" class="px-6 py-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {payRole.length > 0 ? (
                  payRole.map((payItem, key) => {
                    return (
                      <tr
                        id={key}
                        className="bg-white border-b text-gray-900 font-medium"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {payItem.month}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(payItem.payDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            }
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(payItem.issuedDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            }
                          )}
                        </td>
                        <td className="px-6 py-4">{payItem.basicAmount}</td>
                        <td className="px-6 py-4">
                          <div className="bg-[#497cc9] flex justify-center py-[5px] rounded-md">
                            View
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="bg-white border-b text-gray-900 font-medium">
                    <td colSpan="5" className="text-center px-6 py-4">
                      No payslips available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayRole;
