import "./css/SideNav.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import SideNavOption from "./SideNavOption";
import { IoMdHome, IoMdTrendingDown, IoMdLogOut } from "react-icons/io";
import {
  GiReceiveMoney,
  GiPayMoney,
  GiTakeMyMoney,
  GiMoneyStack,
} from "react-icons/gi";
// //////////////////////////
const SideNav = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

  const handleDash = () => {
    navigate("/");
  };
  //////////////////////////
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
            url="/dashboard"
          />
          <SideNavOption
            name="Receivable&nbsp;Debts"
            icon={<GiMoneyStack size={20} />}
            url="/dashboard"
          />
        </div>
      </div>
      <div className="sideNavBottom">
        {/* <SideNavOption name="Logout" icon={<IoMdLogOut size={20} />} url="/" /> */}
        <Button onClick={handleClickOpen}>
          <IoMdLogOut size={20} style={{ color: "#fff" }} />
          <p style={{ color: "#fff", fontSize: "16px" }}>&nbsp;Logout</p>
        </Button>

        <Dialog
          style={{ backdropFilter: "blur(2px)" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure want to Log Out ?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={(handleClose, handleDash)} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default SideNav;
