import "./css/DashaboardTop.css";
import Search from "./Search";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

function DashaboardTop(props) {
  // MUI-Start //
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // MUI-End //
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  const letter = "JS";
  const name = "Jeewan Singh";
  const username = "jeewan";
  const status = "Active";
  return (
    <>
      <div className="dashboardTop">
        {/* MUI-Start */}
        <div>
          <Button onClick={handleClickOpen}>
            <p className="user">{letter}</p>
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
                {"User Information"}
              </DialogTitle>
              <DialogContent style={{ textAlign: "center" }}>
                <DialogContentText id="alert-dialog-description">
                  <div className="photoCenter">
                    <p className="user userInfo">{letter}</p>
                  </div>
                  <span
                    style={{
                      color: "#000",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    {name} <br />
                  </span>
                  <span>
                    username:
                    <span style={{ color: "#000" }}> {username}</span> <br />
                  </span>
                  <span>
                    Joined date:
                    <span style={{ color: "#000" }}> {date}</span> <br />
                  </span>
                  <span>
                    Status: <span style={{ color: "green" }}>{status}</span>
                    <br />
                  </span>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Close
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </div>
        {/* MUI-End */}
        <Search />
      </div>
    </>
  );
}
export default DashaboardTop;
