import * as React from "react";
import "./css/DashaboardTop.css";
import {
  Popover,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material/";
import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserIcon({ name }) {
  const img_src = "https://picsum.photos/200";
  // POP-UP
  const [anchorEl, setAnchorEl] = useState(null);
  const popOpen = Boolean(anchorEl);
  const id = popOpen ? "simple-popover" : undefined;
  const handlePopClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopClose = () => {
    setAnchorEl(null);
  };

  ///////////DIALOG INSIDE
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleProfileOpen = () => {
    navigate("/profile");
  };

  const handleClickClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
    localStorage.removeItem("token");
  };

  return (
    <div>
      <Button aria-describedby={id} onClick={handlePopClick}>
        <img className="userImg userImg-small" alt="User Icon" src={img_src} />
      </Button>
      <Popover
        style={{ backdropFilter: "blur(2px)" }}
        id={id}
        open={popOpen}
        anchorEl={anchorEl}
        onClose={handlePopClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "left",
          horizontal: "right",
        }}
      >
        <>
          <Typography sx={{ p: 2 }} style={{ backgroundColor: "#293233" }}>
            <div className="userInfo">
              <div className="userProfile" onClick={handleProfileOpen}>
                <img className="userImg" alt="User Image" src={img_src} />
                <button className="logoutButton">
                  <span>{name}</span>
                </button>
              </div>
              <div className="userProfile" onClick={handleClickOpen}>
                <IoMdLogOut className="userImg" />
                <button className="logoutButton">
                  <p>Logout</p>
                </button>
              </div>
            </div>
            <div>
              <Dialog
                style={{ backdropFilter: "blur(2px)" }}
                open={open}
                onClose={handleClickClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Are you sure want to Log Out ?"}
                </DialogTitle>
                <DialogActions>
                  <Button
                    onClick={handleClickClose}
                    style={{
                      color: "gray",
                    }}
                  >
                    No
                  </Button>
                  <Button
                    onClick={(handleClickClose, handleRedirect)}
                    autoFocus
                  >
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Typography>
        </>
      </Popover>
    </div>
  );
}
export default UserIcon;
