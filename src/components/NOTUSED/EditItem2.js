// import "./css/AddItem.css";
import { MdEdit } from "react-icons/md";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../Schemas";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function EditItem(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [remark, setRemark] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const txn_id = props.txn_id;
  // MUI-Start //
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    // // const [txnid, setTxnid] = useState(20);
    // const url = "http://localhost/test/edititem.php";
    // let fData = new FormData();
    // fData.append("txn_id", txn_id);
    // axios
    //   .post(url, fData)
    //   .then((response) => {
    //     setTitle(response.data.title);
    //     setDate(response.data.date);
    //     setRemark(response.data.remark);
    //     setDescription(response.data.description);
    //     setAmount(response.data.amount);
    //   })
    //   .catch((error) => alert(error));

    const url = "http://localhost/test/edititem.php";
    const token = localStorage.getItem("token");
    const apiUrl = `${url}?txn_id=${txn_id}&token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setTitle(response.data.title);
        setDate(response.data.date);
        setRemark(response.data.remark);
        setDescription(response.data.description);
        setAmount(response.data.amount);
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    setOpen(false);

    const url = "http://localhost/test/updateitem.php";
    let fData = new FormData();
    fData.append("title", values.title);
    fData.append("desc", values.desc);
    fData.append("date", values.date);
    fData.append("amount", values.amount);
    fData.append("category", props.source);
    fData.append("remark", values.remark);
    fData.append("user_id", props.user_id);
    fData.append("txn_id", txn_id);
    axios
      .post(url, fData)
      .then((response) => {
        toast.success(response.data.detail);
        setTitle(response.data.title);
        setDate(response.data.date);
        setRemark(response.data.remark);
        setDescription(response.data.description);
        setAmount(response.data.amount);
      })
      .catch((error) => alert(error));
    window.location.reload();
  };
  // MUI-End //
  // Formik //
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        title: title,
        desc: description,
        date: date,
        amount: amount,
        remark: remark,
        category: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // action.resetForm();
        // setOpen(false);
        // const url = "http://localhost/test/updateitem.php";
        // let fData = new FormData();
        // fData.append("title", values.title);
        // fData.append("desc", values.desc);
        // fData.append("date", values.date);
        // fData.append("amount", values.amount);
        // fData.append("category", props.source);
        // fData.append("remark", values.remark);
        // fData.append("user_id", props.user_id);
        // fData.append("txn_id", txn_id);
        // axios
        //   .post(url, fData)
        //   .then((response) => {
        //     toast.success(response.data.detail);
        //     setTitle(response.data.title);
        //     setDate(response.data.date);
        //     setRemark(response.data.remark);
        //     setDescription(response.data.description);
        //     setAmount(response.data.amount);
        //   })
        //   .catch((error) => alert(error));
        // window.location.reload();
      },
    });

  return (
    <>
      <div className="addItemList">
        {/* MUI-Start */}
        <div>
          <div onClick={handleClickOpen}>
            <MdEdit
              size={20}
              color="blue"
              style={{ cursor: "pointer", marginRight: "12px" }}
            />
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
                <span>Edit {props.title}</span>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <form
                    onSubmit={handleSubmit}
                    method=""
                    action=""
                    className="addItemForm"
                  >
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
                      <Button type="submit" onClick={handleUpdate}>
                        Update
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
export default EditItem;
