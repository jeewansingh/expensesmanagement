import "../css/Dashboard.css";
import SideNav from "../SideNav";
import DashaboardTop from "../DashaboardTop";
import DashboardBody from "../DashboardBody";
import { useState, useEffect } from "react";
import axios from "axios";
import TokenCheck from "../functions/TokenCheck";

function Dashboard() {
  const [name, setName] = useState("");
  const token = localStorage.getItem("token");

  // TOKEN CHECK ///

  // const url1 = "http://localhost/test/checkuser.php";
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const apiUrl = `${url1}?token=${token}`;
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       if (!response.data.status) {
  //         navigate("/login");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [url1]);

  // GET NAME
  const url = "http://localhost/test/userinfo.php";
  useEffect(() => {
    const apiUrl = `${url}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {});
  }, [url]);

  return (
    <>
      <TokenCheck token={token} />
      <div className="dashboardContainer">
        <SideNav />
        <div>
          <DashaboardTop />
          <DashboardBody name={name} />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
