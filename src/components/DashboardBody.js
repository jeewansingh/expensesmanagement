import "./css/DashboardBody.css";
import React, { useState, useEffect } from "react";
import ViewBalance from "./ViewBalance";
import Track from "./Track";
import Recent from "./Recent";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoTrendingDownSharp, IoTrendingUpSharp } from "react-icons/io5";
import AddItem from "./AddItem";
import Greetings from "./functions/Greetings";
import axios from "axios";

function DashboardBody(props) {
  ///////////
  const [totalincome, setTotalincome] = useState("");
  const [totalexpense, setTotalexpense] = useState("");
  const [totalreceive, setTotalreceive] = useState("");
  const [totalpay, setTotalpay] = useState("");
  const [totalbalance, setTotalbalance] = useState("");
  const [totalsaving, setTotalsaving] = useState("");
  const [income7day, setIncome7day] = useState("");
  const [expense7day, setExpense7day] = useState("");
  const [income30day, setIncome30day] = useState("");
  const [expense30day, setExpense30day] = useState("");

  const url = "http://localhost/test/totalbalance.php";
  const token = localStorage.getItem("token");
  useEffect(() => {
    const apiUrl = `${url}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setTotalincome(response.data.totalIncome);
        setTotalexpense(response.data.totalExpense);
        setTotalreceive(response.data.totalReceive);
        setTotalpay(response.data.totalPay);
        setTotalsaving(response.data.totalSaving);
        setTotalbalance(response.data.totalBalance);
        setIncome7day(response.data.income7day);
        setExpense7day(response.data.expense7day);
        setIncome30day(response.data.income30day);
        setExpense30day(response.data.expense30day);
      })
      .catch((error) => console.log(error));
  }, [url]);
  ///////////////
  // function greetings() {
  //   const date = new Date();
  //   let hour = date.getHours();

  //   if (hour >= 0 && hour < 12) {
  //     return "Good Morning 🌄";
  //   } else if (hour >= 12 && hour < 18) {
  //     return "Good Afternoon ☀️";
  //   } else return "Good Evening 🌆";
  // }

  return (
    <>
      <div className="dashbordBodyContainer">
        <div className="dashboardMainText">
          Hello, {props.name} 👋
          <div className="dashboardSubText">
            <Greetings />
          </div>
        </div>
        <div className="balanceView">
          <ViewBalance
            title="Total Balance"
            balance={totalbalance}
            icon={<MdAccountBalanceWallet size={20} />}
          />
          <ViewBalance
            title="Total Available Balance"
            balance={totalsaving}
            icon={<TbMoneybag size={20} />}
          />
          <ViewBalance
            title="Total Income"
            balance={totalincome}
            icon={<IoTrendingUpSharp size={20} />}
          />
          <ViewBalance
            title="Total Expense"
            balance={totalexpense}
            icon={<IoTrendingDownSharp size={20} />}
          />
          <ViewBalance
            title="Last 7 Days Income"
            balance={income7day}
            icon={<IoTrendingUpSharp size={20} />}
          />
          <ViewBalance
            title="Last 7 Days Expense"
            balance={expense7day}
            icon={<IoTrendingDownSharp size={20} />}
          />
          <ViewBalance
            title="Last 30 Days Income"
            balance={income30day}
            icon={<IoTrendingUpSharp size={20} />}
          />
          <ViewBalance
            title="Last 30 Days Expense"
            balance={expense30day}
            icon={<IoTrendingDownSharp size={20} />}
          />
        </div>
        <div className="recent">
          <Track
            totalBalance={totalbalance}
            expense={totalexpense}
            income={totalincome}
            payable={totalpay}
            receivable={totalreceive}
          />
          <Recent title="Recent Transactions" />
          <div className="addItemContainer">
            <AddItem title="Income" source="income" />
            <AddItem title="Expense" source="expense" />
            <AddItem title="receivable-debts" source="receivable-debts" />
            <AddItem title="payable-debts" source="payable-debts" />
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboardBody;
