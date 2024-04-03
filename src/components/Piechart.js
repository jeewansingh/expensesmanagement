import "./css/DashboardBody.css";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement
);

function Piechart({ expense30day, income30day }) {
  // let total = parseInt(totalBalance);
  // let incomes = parseInt(income);
  // let expenses = parseInt(expense);

  const data = {
    labels: ["Total Income in last 30 Days", "Total Expense in last 30 days"],
    datasets: [
      {
        label: "",
        // data: [22, 45, 65],
        data: [income30day, expense30day],
        backgroundColor: ["#0575e6", "#ee6c4d"],

        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        padding: "2px",
        position: "bottom",
      },
    },
  };
  return (
    <>
      <div className="trackChart">
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </>
  );
}
export default Piechart;
