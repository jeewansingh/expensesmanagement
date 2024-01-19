import "./css/SideNav.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavOption from "./SideNavOption";
import { IoMdHome } from "react-icons/io";
import {
  GiReceiveMoney,
  GiPayMoney,
  GiTakeMyMoney,
  GiMoneyStack,
} from "react-icons/gi";

const SideNav = () => {
  return (
    <div className="container">
      <div className="sideNavTop">
        <div className="sideNavLogo">Logo</div>
        <div className="sideNavList">
          <SideNavOption
            name="Home"
            icon={<IoMdHome size={20} />}
            url="/dashboard"
          />
          <SideNavOption
            name="Incomes"
            icon={<GiReceiveMoney size={20} />}
            url="/incomes"
          />
          <SideNavOption
            name="Expenses"
            icon={<GiPayMoney size={20} />}
            url="/expenses"
          />
          <SideNavOption
            name="Payable&nbsp;Debts"
            icon={<GiTakeMyMoney size={20} />}
            url="/debtspayable"
          />
          <SideNavOption
            name="Receivable&nbsp;Debts"
            icon={<GiMoneyStack size={20} />}
            url="/debtsreceivable"
          />
        </div>
      </div>
    </div>
  );
};
export default SideNav;
