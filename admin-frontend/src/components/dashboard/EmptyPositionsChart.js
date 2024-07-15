import React from "react";
import ReactAppexChart from "react-apexcharts";

const EmptyPositionsChart = ({
  possitionData = ["Management", "Developers", "Other"],
  countData = [30, 20, 50],
}) => {
  const chartData = {
    series: countData,
    options: {
      chart: {
        type: "donut",
      },
      labels: possitionData,
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
      <h3 className="mb-10">Empty Positions</h3>
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

export default EmptyPositionsChart;
