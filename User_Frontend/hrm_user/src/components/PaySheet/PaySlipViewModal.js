import React from "react";

const PaySlipViewModal = ({
  handleClosePaySlipViewModal,
  paySlipViewModalData,
}) => {
  return (
    <div
      id="crud-modal"
      tabindex="-1"
      aria-hidden="true"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Pay Slip For {paySlipViewModalData?.month}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              onClick={handleClosePaySlipViewModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Issued Date
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={
                    paySlipViewModalData?.issuedDate
                      ? new Date(paySlipViewModalData?.issuedDate)
                          .toISOString()
                          .split("T")[0]
                      : "-"
                  }
                  required
                  disabled
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Month
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={paySlipViewModalData?.month}
                  required
                  disabled
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Pay Date
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={
                    paySlipViewModalData?.payDate
                      ? new Date(paySlipViewModalData?.issuedDate)
                          .toISOString()
                          .split("T")[0]
                      : "-"
                  }
                  required
                  disabled
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Basic Amount
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={"Rs. " + paySlipViewModalData?.basicAmount}
                  required
                  disabled
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Employee EPF Amount
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={"Rs. " + paySlipViewModalData?.employeeEpfAmount}
                  required
                  disabled
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Employer EPF Amount
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={"Rs. " + paySlipViewModalData?.employerEpfAmount}
                  required
                  disabled
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Employer ETF Amount
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={"Rs. " + paySlipViewModalData?.employerEtfAmount}
                  required
                  disabled
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Total Bonus
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={"Rs. " + paySlipViewModalData?.totalBonus}
                  required
                  disabled
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gross Amount
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={"Rs. " + paySlipViewModalData?.grossAmount}
                  required
                  disabled
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Net Amount
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={"Rs. " + paySlipViewModalData?.netAmount}
                  required
                  disabled
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleClosePaySlipViewModal}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaySlipViewModal;
