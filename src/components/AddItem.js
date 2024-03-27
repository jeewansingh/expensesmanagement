import "./css/AddItem.css";
import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./Schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";

function AddItem(props) {
  const source = props.source;

  // MUI-Start //
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // MUI-End //

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [remark, setRemark] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Title Validation
    if (title.trim() == "") {
      toast.error("Enter Title");
      return false;
    } else if (title.length < 3) {
      toast.error("Title Should be minimum 3 character.");
      return false;
    }
    // Description Validation
    if (description.trim() == "") {
      toast.error("Enter Description");
      return false;
    } else if (description.length < 5) {
      toast.error("Description Should be minimum 5 character.");
      return false;
    }
    // Date Validation
    if (date.trim() == "") {
      toast.error("Choose Date");
      return false;
    }
    if (date > "2025-01-01" || date < "2023-01-01") {
      toast.error("Choose Valid Date");
      return false;
    }
    // Amount Validation
    if (amount.trim() == "") {
      toast.error("Enter Amount");
      return false;
    } else if (amount <= 0) {
      toast.error("Amount Should be more than 0");
      return false;
    }

    const token = localStorage.getItem("token");
    setOpen(false);
    const url = "http://localhost/test/userincome.php";
    let fData = new FormData();
    fData.append("token", token);
    fData.append("title", title);
    fData.append("desc", description);
    fData.append("date", date);
    fData.append("amount", amount);
    fData.append("category", source);
    fData.append("remark", remark);
    axios
      .post(url, fData)
      .then((response) => toast.success(response.data.detail))
      .catch((error) => console.log(error));
    window.location.reload();
  };
  return (
    <>
      <div className="addItemList">
        {/* MUI-Start */}
        <div>
          <div onClick={handleClickOpen}>
            <AddItemInd title={props.title} />
          </div>

          <Dialog
            style={{ backdropFilter: "blur(2px)" }}
            open={open}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div style={{ width: "400px", padding: "10px" }}>
              <DialogTitle
                id="alert-dialog-title"
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: "#0575e6",
                }}
              >
                <span>Add {props.title}</span>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <form onSubmit={handleSubmit} className="addItemForm">
                    <div className="inputBox">
                      <label>Title</label>
                      <input
                        type="text"
                        placeholder="Title"
                        autoComplete="off"
                        name="name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="inputBox">
                      <label>Description</label>
                      <input
                        type="text"
                        placeholder="Description"
                        autoComplete="off"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="inputBox">
                      <label>Date</label>
                      <input
                        type="date"
                        placeholder="Date"
                        autoComplete="off"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div className="inputBox">
                      <label>Remark</label>
                      <input
                        type="text"
                        placeholder="Remark"
                        autoComplete="off"
                        name="remark"
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                      />
                    </div>
                    <div className="inputBox">
                      <label>Amount</label>
                      <input
                        type="number"
                        placeholder="Amount"
                        autoComplete="off"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <DialogActions className="inputBox2">
                      <Button onClick={handleClose}>Close</Button>
                      <Button type="submit">Add</Button>
                    </DialogActions>
                  </form>
                </DialogContentText>
              </DialogContent>
            </div>
          </Dialog>
        </div>

        {/* MUI-End */}
      </div>
    </>
  );
}
export default AddItem;
function AddItemInd(props) {
  return (
    <>
      <div className="addItemButton">
        <IoAddCircle size={20} style={{ color: "#fff" }} />
        &nbsp; Add {props.title}
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}
