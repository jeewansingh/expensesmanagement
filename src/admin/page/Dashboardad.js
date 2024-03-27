import "./css/dashboardadmin.css";
import AdminSideNav from "../components/AdminSideNav";
import TotalNumber from "../components/TotalNumber";
import AdminCheck from "../../admin/components/AdminCheck";
import { useState, useEffect } from "react";
import axios from "axios";

function DashboardAdmin() {
  const token = localStorage.getItem("token");

  const [totalUser, setTotalUser] = useState("");
  const [totalActiveUser, setTotalActiveUser] = useState("");
  const [totalTxn, setTotalTxn] = useState("");
  const [totalAdmin, setTotalAdmin] = useState("");

  const url = "http://localhost/test/admin/totaluser.php";
  useEffect(() => {
    const apiUrl = `${url}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setTotalUser(response.data.totalUser);
        setTotalActiveUser(response.data.totalActiveUser);
        setTotalTxn(response.data.totalTxn);
        setTotalAdmin(response.data.totalAdmin);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <>
      <AdminCheck token={token} />
      <div className="header">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="adminContainer">
        <div>
          <AdminSideNav />
        </div>
        <div className="totalData">
          <TotalNumber title="Total User" number={totalUser} />
          <TotalNumber title="Total Active User" number={totalActiveUser} />
          <TotalNumber title="Total Transactions" number={totalTxn} />
          <TotalNumber title="Total Admin" number={totalAdmin} />
        </div>
      </div>
    </>
  );
}
export default DashboardAdmin;
