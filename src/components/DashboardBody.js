import "./css/DashboardBody.css";
import React from "react";
import ViewBalance from "./ViewBalance";
import Track from "./Track";
import Recent from "./Recent";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoTrendingDownSharp, IoTrendingUpSharp } from "react-icons/io5";
import AddItem from "./AddItem";

function DashboardBody(props) {
  function greetings() {
    const date = new Date();
    let hour = date.getHours();

    if (hour >= 0 && hour < 12) {
      return "Good Morning 🌄";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon ☀️";
    } else return "Good Evening 🌆";
  }
  return (
    <>
      <div className="dashbordBodyContainer">
        <div className="dashboardMainText">
          Hello, {props.name} 👋
          <div className="dashboardSubText">{greetings()}</div>
        </div>
        <div className="balanceView">
          <ViewBalance
            title="Total Balance"
            balance="920000"
            icon={<MdAccountBalanceWallet size={20} />}
          />
          <ViewBalance
            title="Total Available Balance"
            balance="200000"
            icon={<TbMoneybag size={20} />}
          />
          <ViewBalance
            title="Total Income"
            balance="800000"
            icon={<IoTrendingDownSharp size={20} />}
          />
          <ViewBalance
            title="Total Expense"
            balance="500000"
            icon={<IoTrendingUpSharp size={20} />}
          />
        </div>
        <div className="recent">
          <Track totalBalance="9000000" expense="5000000" income="8000000" />
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
