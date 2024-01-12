import Login from "./../components/NewLogin";
import Signup from "./../components/Signup";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import Incomes from "../components/Incomes";
import Expense from "../components/Expense";
import { Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/incomes" element={<Incomes />} />
      <Route path="/expenses" element={<Expense />} />
    </Routes>
  );
}
export default Routing;
