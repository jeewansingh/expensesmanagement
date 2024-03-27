import AdminSideNav from "../components/AdminSideNav";
import AdminCheck from "../../admin/components/AdminCheck";
import axios from "axios";
import { useState, useEffect } from "react";
import "./css/users.css";
function Users() {
  const token = localStorage.getItem("token");
  const [itemData, setItemData] = useState([]);

  const url = "http://localhost/test/admin/users.php";
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
  console.log(items);
  const length = itemData.length;
  return (
    <>
      <AdminCheck token={token} />
      <div className="header">
        <h1>Users</h1>
      </div>
      <div className="userContainer">
        <div>
          <AdminSideNav />
        </div>
        <div class="userList">
          <h2>User List</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Status</th>
                <th>Joined On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {length === 0 ? (
                <tr>
                  <td colSpan="5">No Data Found</td>
                </tr>
              ) : (
                items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.name}</td>
                    <td>{item.is_active == "1" ? "Active" : "Not Active"}</td>
                    <td>{item.date_created}</td>
                    <td>
                      <a href="#" className="edit-link">
                        Toggle
                      </a>
                      &nbsp;|&nbsp;
                      <a href="#" className="delete-link">
                        Delete
                      </a>
                    </td>
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
export default Users;
