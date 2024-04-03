import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ActiveUser({ status, user_id }) {
  const [newStatus, setNewStatus] = useState(parseInt(status));

  const handleActive = () => {
    const token = localStorage.getItem("token");
    const updatedStatus = newStatus === 1 ? 0 : 1;
    setNewStatus(updatedStatus);

    const url = "http://localhost/test/admin/activeuser.php";
    const apiUrl = `${url}?user_id=${user_id}&token=${token}`;
    axios
      .post(apiUrl)
      .then((response) => {
        toast.success(response.data.detail);
      })
      .catch((error) => toast.error(error));
  };

  return (
    <>
      <p>
        <strong>Status: </strong>
        {newStatus === 1 ? "Active" : "Not Active"}
      </p>
      {newStatus === 1 ? (
        <button className="admin-button" onClick={handleActive}>
          Deactivate User
        </button>
      ) : (
        <button className="notadmin-button" onClick={handleActive}>
          Activate User
        </button>
      )}
      <ToastContainer />
    </>
  );
}
export default ActiveUser;
