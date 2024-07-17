import React from "react";

const PaySlipTable = ({
  allPaySlips,
  handleOpenPaySlipViewModal,
  setPaySlipViewModalData,
}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right">
      <thead className="text-xs text-white uppercase bg-[#6a44d9]">
        <tr>
          <th scope="col" className="px-6 py-5">
            Issued Date
          </th>
          <th scope="col" className="px-6 py-5">
            Basic Amount
          </th>
          <th scope="col" className="px-6 py-5">
            Total Bonus
          </th>
          <th scope="col" className="px-6 py-5">
            Pay Date
          </th>
          <th scope="col" className="px-6 py-5">
            Month
          </th>
          <th scope="col" className="px-6 py-5">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {allPaySlips.map((paySlip, key) => (
          <tr id={key} className="bg-white border-b text-gray-900 font-medium">
            <td className="px-6 py-4 whitespace-nowrap">
              {paySlip.issuedDate
                ? new Date(paySlip.issuedDate).toISOString().split("T")[0]
                : "-"}
            </td>
            <td className="px-6 py-4">Rs. {paySlip.basicAmount}</td>
            <td className="px-6 py-4">Rs. {paySlip.totalBonus}</td>
            <td className="px-6 py-4">
              {paySlip.payDate
                ? new Date(paySlip.payDate).toISOString().split("T")[0]
                : "-"}
            </td>
            <td className="px-6 py-4">{paySlip.month}</td>
            <td className="px-6 py-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={() => {
                  setPaySlipViewModalData(paySlip);
                  handleOpenPaySlipViewModal();
                }}
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaySlipTable;
