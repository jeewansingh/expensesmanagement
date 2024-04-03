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
  const [list, setList] = useState([]);

  // const url = "http://localhost/test/itemlist.php";
  // const apiUrl = `${url}?category=${source}`;
  // axios
  //   .post(apiUrl)
  //   .then((response) => {
  //     setList(response.data.detail);
  //   })
  //   .catch((error) => toast.error(error));

  // MUI-Start //
  const [open, setOpen] = useState(false);
  const handleClickOpen = async () => {
    setOpen(true);
    const url = "http://localhost/test/itemlist.php";
    const apiUrl = `${url}?category=${source}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setList(response.data.list);
      })
      .catch((error) => console.log(error));

    // try {
    //   const response = await axios.get(apiUrl);
    //   setList(response.data.list);
    //   console.log(response.data.list);
    // } catch (error) {
    //   toast.error(error);
    // }
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
      toast.error("Choose a category");
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

    var now = new Date();
    var aWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    var inputDate = new Date(date);

    if (inputDate <= aWeekAgo || inputDate >= now) {
      toast.error("Date must be between now and 7 days before from now");
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
                      <label>Choose Category</label>
                      <select
                        className="dropdown"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      >
                        <option value="">Select an item</option>
                        {list.map((item, index) => (
                          <option
                            className="optionDrop"
                            key={index}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {/* <input
                        type="text"
                        placeholder="Title"
                        autoComplete="off"
                        name="name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      /> */}
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
