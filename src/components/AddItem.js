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
  /////////////
  const handleSave = () => {
    if (
      values.title == "" ||
      values.desc == "" ||
      values.amount == "" ||
      values.date == ""
    ) {
      setOpen(true);
    } else {
      const token = localStorage.getItem("token");
      setOpen(false);
      const url = "http://localhost/test/userincome.php";
      let fData = new FormData();
      fData.append("token", token);
      fData.append("title", values.title);
      fData.append("desc", values.desc);
      fData.append("date", values.date);
      fData.append("amount", values.amount);
      fData.append("category", source);
      fData.append("remark", values.remark);
      axios
        .post(url, fData)
        .then((response) => toast.success(response.data.detail))
        .catch((error) => alert(error));
      window.location.reload();
    }
  };

  // MUI-End //
  // Formik //
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        title: "",
        desc: "",
        date: "",
        amount: "",
        remark: "",
        category: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // console.log("Test");
        // action.resetForm();
        // setOpen(false);
        // const url = "http://localhost/test/userincome.php";
        // let fData = new FormData();
        // fData.append("title", values.title);
        // fData.append("desc", values.desc);
        // fData.append("date", values.date);
        // fData.append("amount", values.amount);
        // fData.append("category", props.source);
        // fData.append("remark", values.remark);
        // fData.append("user_id", props.user_id);
        // axios
        //   .post(url, fData)
        //   .then((response) => toast.success(response.data.detail))
        //   .catch((error) => alert(error));
        // window.location.reload();
      },
    });

  return (
    <>
      <div className="addItemList">
        {/* MUI-Start */}
        <div>
          <Button onClick={handleClickOpen} style={{ padding: "0px" }}>
            <AddItemInd title={props.title} />
          </Button>

          <Dialog
            style={{ backdropFilter: "blur(2px)" }}
            open={open}
            onClose={handleClose}
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
                        autoComplete="off"
                        name="title"
                        placeholder="Title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.title && touched.title ? (
                        <p className="addItemError">{errors.title}</p>
                      ) : null}
                    </div>
                    <div className="inputBox">
                      <label>Description</label>
                      <input
                        type="text"
                        autoComplete="off"
                        name="desc"
                        placeholder="Descriptin"
                        value={values.desc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.desc && touched.desc ? (
                        <p className="addItemError">{errors.desc}</p>
                      ) : null}
                    </div>
                    <div className="inputBox">
                      <label>Date</label>
                      <input
                        type="date"
                        name="date"
                        max="9999-12-31"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.date && touched.date ? (
                        <p className="addItemError">{errors.date}</p>
                      ) : null}
                    </div>
                    <div className="inputBox">
                      <label>Remark</label>
                      <input
                        type="text"
                        name="remark"
                        autoComplete="off"
                        placeholder="Remark"
                        value={values.remark}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.remark && touched.remark ? (
                        <p className="addItemError">{errors.remark}</p>
                      ) : null}
                    </div>
                    <div className="inputBox">
                      <label>Amount</label>
                      <input
                        type="number"
                        autoComplete="off"
                        name="amount"
                        placeholder="Amount"
                        value={values.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.amount && touched.amount ? (
                        <p className="addItemError">{errors.amount}</p>
                      ) : null}
                    </div>
                    <DialogActions className="inputBox2">
                      <Button
                        onClick={handleClose}
                        style={{
                          color: "gray",
                        }}
                      >
                        Close
                      </Button>
                      <Button type="submit" onClick={handleSave}>
                        Save
                      </Button>
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
      <button className="addItemButton">
        <IoAddCircle size={20} style={{ color: "#fff" }} />
        &nbsp; Add {props.title}
      </button>
      <ToastContainer theme="dark" />
    </>
  );
}
