import "./css/DashboardBody.css";
import React from "react";

function ViewBalance(props) {
  return (
    <>
      <div className="balaceTab">
        <div>
          <p className="balanceTitle">{props.title}</p>
          <p className="balanceTitleIcon">{props.icon}</p>
        </div>
        <p className="balanceNumber">Rs. {props.balance}</p>
      </div>
    </>
  );
}
export default ViewBalance;
