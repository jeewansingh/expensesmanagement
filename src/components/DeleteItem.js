import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material/";
import axios from "axios";
function DeleteItem({ txn_id, title }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const url = "http://localhost/test/userincome.php";
    const apiUrl = `${url}?txn_id=${txn_id}`;
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
            <Button onClick={(handleClickClose, handleDelete)} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default DeleteItem;
