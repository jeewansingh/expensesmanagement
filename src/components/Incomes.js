import "./css/Income.css";
import SideNav from "./SideNav";
import DashaboardTop from "./DashaboardTop";
import React from "react";
import ItemList from "./ItemList";
import ViewBalance from "./ViewBalance";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoTrendingDownSharp, IoTrendingUpSharp } from "react-icons/io5";
import AddItem from "./AddItem";

const itemData = [
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
  {
    title: "Salary",
    desc: "December Month from ABC Company",
    date: "2024-01-10",
    remark: "No dues",
    balance: "32000",
  },
];

function ItemHead() {
  return (
    <>
      <div className="balanceView">
        <AddItem title="Income" />
        <ViewBalance
          title="Total Income"
          balance="800000"
          icon={<IoTrendingDownSharp size={20} />}
        />
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
      </div>

      <div className="itemListHead">
        <div className="listHead">Particulars</div>
        <div className="listHead">Date</div>
        <div className="listHead">Amount</div>
        <div className="listHead">Remark</div>
        <div className="listHead">Action</div>
      </div>
    </>
  );
}

function Incomes() {
  const items = itemData;

  return (
    <>
      <div className="dashboardContainer">
        <SideNav />
        <div>
          <DashaboardTop />
          <div className="itemBodyContainer">
            {ItemHead()}
            {items.map((item) => (
              <ItemList
                title={item.title}
                desc={item.desc}
                date={item.date}
                remark={item.remark}
                balance={item.balance}
                cat="income"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Incomes;
