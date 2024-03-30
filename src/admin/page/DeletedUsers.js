import AdminSideNav from "../components/AdminSideNav";
import AdminCheck from "../../admin/components/AdminCheck";
import axios from "axios";
import { useState, useEffect } from "react";
import "./css/users.css";

function DeletedUsers() {
  const token = localStorage.getItem("token");
  const [itemData, setItemData] = useState([]);

  const url = "http://localhost/test/admin/deleteduser.php";
  useEffect(() => {
    const apiUrl = `${url}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setItemData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  const items = itemData;
  const length = itemData.length;
  return (
    <>
      <AdminCheck token={token} />
      <div className="header">
        <h1>Deleted Users</h1>
      </div>
      <div className="userContainer">
        <div>
          <AdminSideNav />
        </div>
        <div class="userList">
          <h2>Deleted User List</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {length === 0 ? (
                <tr>
                  <td colSpan="2">No Data Found</td>
                </tr>
              ) : (
                items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.name}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default DeletedUsers;
