import { Route, Routes } from "react-router-dom";
import LoginAdmin from "../page/Loginad";
import DashboardAdmin from "../page/Dashboardad";

function RoutingAd() {
  const token = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/adminlogin" element={<LoginAdmin />} />
      <Route path="/admindashboard" element={<DashboardAdmin />} />
    </Routes>
  );
}
export default RoutingAd;
