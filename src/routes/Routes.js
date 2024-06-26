import Login from "./../components/NewLogin";
import Signup from "./../components/Signup";
import Home from "../components/Home";
import Dashboard from "../components/pages/Dashboard";
import Incomes from "../components/pages/Incomes";
import Expense from "../components/pages/Expense";
import { Route, Routes } from "react-router-dom";
import ForbiddenPage from "../components/ForbiddenPage";
import DebtsPay from "../components/pages/DebtsPay";
import DebtsRec from "../components/pages/DebtsRec";
import Profile from "../components/pages/Profile";
import LoginAdmin from "../admin/page/Loginad";
import DashboardAdmin from "../admin/page/Dashboardad";
import Users from "../admin/page/Users";
import Admin from "../admin/page/Admin";
import UserDetails from "../admin/page/UserDetails";
import DeletedUsers from "../admin/page/DeletedUsers";
import Download from "../components/pages/Download";

function Routing() {
  const token = localStorage.getItem("token");
  // console.log(token);
  // token send
  // user id get
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/incomes" element={<Incomes />} /> */}
      <Route path="/adminlogin" element={<LoginAdmin />} />

      {token !== null && token !== "" ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/debtspayable" element={<DebtsPay />} />
          <Route path="/debtsreceivable" element={<DebtsRec />} />
          <Route path="/downloadtxn" element={<Download />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admindashboard" element={<DashboardAdmin />} />
          <Route path="/users" element={<Users />} />
          <Route path="/admins" element={<Admin />} />
          <Route path="/deletedusers" element={<DeletedUsers />} />
          <Route path="/users/:user_id" element={<UserDetails />} />
        </>
      ) : (
        <>
          <Route path="/dashboard" element={<Login />} />
          <Route path="/incomes" element={<Login />} />
          <Route path="/expenses" element={<Login />} />
          <Route path="/debtspayable" element={<Login />} />
          <Route path="/debtsreceivable" element={<Login />} />
          <Route path="/downloadtxn" element={<Login />} />
          <Route path="/profile" element={<Login />} />
          <Route path="/admindashboard" element={<LoginAdmin />} />
          <Route path="/users" element={<LoginAdmin />} />
          <Route path="/admins" element={<LoginAdmin />} />
          <Route path="/deletedusers" element={<LoginAdmin />} />
          <Route path="/users/:user_id" element={<LoginAdmin />} />
        </>
      )}
      <Route path="*" element={<ForbiddenPage />} />
    </Routes>
  );
}
export default Routing;
