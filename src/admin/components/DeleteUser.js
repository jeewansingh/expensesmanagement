import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material/";
import "./css/deleteUser.css";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteUser({ user_id }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };
  const token = localStorage.getItem("token");

  const handleDeleteUser = () => {
    const url = "http://localhost/test/admin/users.php";
    const apiUrl = `${url}?user_id=${user_id}&token=${token}`;
    axios
      .delete(apiUrl)
      .then((response) => {
        toast.success(response.data.detail);
        setOpen(false);
      })
      .catch((error) => toast.error(error));
    window.location.reload();
  };
  return (
    <>
      <div onClick={handleClickOpen}>
        <MdDeleteForever
          size={20}
          color="orangered"
          style={{ cursor: "pointer" }}
        />
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
            {"Are you sure want to Delete this item ?"}
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
            <Button onClick={(handleClickClose, handleDeleteUser)} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default DeleteUser;
