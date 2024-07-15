import React from "react";
import ReactAppexChart from "react-apexcharts";

const EmployeesByDepartmentChart = ({
  depData = ["HR", "Engineering", "Sales", "Marketing", "Finance"],
  countData = [44, 55, 41, 17, 15],
}) => {
  const chartData = {
    series: countData,
    options: {
      chart: {
        type: "donut",
      },
      labels: depData,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="w-[45%] h-full">
      <h3 className="mb-10">Employees By Department</h3>
      <ReactAppexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={300}
        width="100%"
        // Adjust the width as needed
      />
    </div>
  );
};

export default EmployeesByDepartmentChart;
