import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteUser({ is_delete, user_id }) {
  const navigate = useNavigate();

  const handleAdmin = () => {
    const token = localStorage.getItem("token");

    const url = "http://localhost/test/admin/deleteuser.php";
    const apiUrl = `${url}?user_id=${user_id}&token=${token}`;
    axios
      .post(apiUrl)
      .then((response) => {
        toast.success(response.data.detail);
        navigate("/users");
      })
      .catch((error) => toast.error(error));
  };

  return (
    <>
      <button className="admin-button" onClick={handleAdmin}>
        Delete User
      </button>
      <ToastContainer />
    </>
  );
}
export default DeleteUser;
