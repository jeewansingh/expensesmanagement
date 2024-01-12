// import "./css/Recent.css";
import React from "react";

const itemData = [
  {
    title: "Salary",
    desc: "ABC Company",
    date: "Jan 1, 2024",
    cat: "Payable",
    balance: "90000",
  },
  {
    title: "Salary",
    desc: "ABC Company",
    date: "Jan 1, 2024",
    cat: "Income",
    balance: "90000",
  },
  {
    title: "Salary",
    desc: "ABC Company",
    date: "Jan 1, 2024",
    cat: "Expense",
    balance: "90000",
  },
  {
    title: "Salary",
    desc: "ABC Company",
    date: "Jan 1, 2024",
    cat: "Receive",
    balance: "90000",
  },
];

function Recent(props) {
  const items = itemData;
  return (
    <>
      <div className="recentContainer">
        <div className="recentTab">
          <p className="recentTitle">{props.title}</p>
          <div className="recentList">
            {items.map((item) => (
              <RecentItem
                title={item.title}
                desc={item.desc}
                date={item.date}
                cat={item.cat}
                balance={item.balance}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
function RecentItem(props) {
  function test() {
    if (props.cat === "Income") {
      return "#006400";
    } else if (props.cat === "Expense") {
      return "#8b0000";
    } else if (props.cat === "Payable") {
      return "#00008b";
    } else return "black";
  }
  return (
    <>
      <div className="recentItem">
        <div>
          <div className="recentItemTitle">{props.title}</div>
          <div className="recentItemDesc">{props.desc}</div>
          <div className="recentItemDate">{props.date}</div>
        </div>
        <div className="recentItemBalance">
          <div className="" style={{ color: test() }}>
            Rs. {props.balance}
          </div>
          <p className="" style={{ backgroundColor: test() }}>
            {props.cat}
          </p>
        </div>
      </div>
    </>
  );
}
export default Recent;
