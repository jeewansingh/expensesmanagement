import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MakeAdmin({ admin, user_id }) {
  const [newAdmin, setNewAdmin] = useState(parseInt(admin));
  const handleAdmin = () => {
    const token = localStorage.getItem("token");
    const updatedAdmin = newAdmin === 1 ? 0 : 1;
    setNewAdmin(updatedAdmin);

    const url = "http://localhost/test/admin/makeadmin.php";
    const apiUrl = `${url}?user_id=${user_id}&token=${token}`;
    axios
      .post(apiUrl)
      .then((response) => {
        toast.success(response.data);
      })
      .catch((error) => toast.error(error));
  };

  return (
    <>
      <p>
        <strong>Role: </strong>
        {newAdmin === 1 ? "Admin" : "User"}
      </p>
      {newAdmin === 1 ? (
        <button className="admin-button" onClick={handleAdmin}>
          Remove Admin
        </button>
      ) : (
        <button className="notadmin-button" onClick={handleAdmin}>
          Make Admin
        </button>
      )}
    </>
  );
}
export default MakeAdmin;
