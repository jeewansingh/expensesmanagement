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

function Track({ totalBalance, income, expense }) {
  // let total = parseInt(totalBalance);
  // let incomes = parseInt(income);
  // let expenses = parseInt(expense);

  const data = {
    labels: ["Total Balance", "Income", "Expense", "Receivable", "Payable"],
    datasets: [
      {
        label: "",
        // data: [22, 45, 65],
        data: [totalBalance, income, expense, 100, 400],
        backgroundColor: [
          "#0575e6",
          "#ee6c4d",
          "#3d5a80",
          "#00b4d8",
          "#293241",
        ],

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
export default Track;
