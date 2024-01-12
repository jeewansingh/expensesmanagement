import "./css/AddItem.css";
import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function AddItem(props) {
  // MUI-Start //
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // MUI-End //

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
                  <form
                    method="post"
                    action=""
                    className="loginForm"
                    name="signup"
                  >
                    <div className="formMainHeading">Hello!</div>

                    <div>
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        autoComplete="off"
                        name="name"
                      ></input>
                    </div>
                    <div>
                      <label>Username</label>
                      <input
                        type="text"
                        placeholder="username"
                        autoComplete="off"
                        name="username"
                      ></input>
                      <span id="help_text_username"></span>
                    </div>
                    <div>
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        autocomplete="off"
                        name="passowrd"
                      ></input>
                    </div>
                    <div>
                      <label>Confirm Passowrd</label>
                      <input
                        type="password"
                        placeholder="Re-enter Password"
                        autoComplete="off"
                        name="cpassword"
                      ></input>
                    </div>
                  </form>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  style={{
                    color: "gray",
                  }}
                >
                  Close
                </Button>
                <Button onClick={handleClose} autoFocus>
                  Save
                </Button>
              </DialogActions>
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
    </>
  );
}
