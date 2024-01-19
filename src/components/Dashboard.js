import { useNavigate } from "react-router-dom";
import "./css/Dashboard.css";
import SideNav from "./SideNav";
import DashaboardTop from "./DashaboardTop";
import DashboardBody from "./DashboardBody";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [name, setName] = useState("");

  const username = localStorage.getItem("username");

  const url = "http://localhost/test/userinfo.php";

  let fData = new FormData();

  useEffect(() => {
    const apiUrl = `${url}?username=${username}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  }, [url]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token == null || token == undefined) {
    navigate("/login");
  }

  return (
    <>
      <div className="dashboardContainer">
        <SideNav />
        <div>
          <DashaboardTop name={name} />
          <DashboardBody name={name} />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
