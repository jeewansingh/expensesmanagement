import { useNavigate } from "react-router-dom";
import "./css/Dashboard.css";
import SideNav from "./SideNav";
import DashaboardTop from "./DashaboardTop";
import DashboardBody from "./DashboardBody";

function Dashboard() {
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
          <DashaboardTop />
          <DashboardBody name="Jeewan Singh" />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
