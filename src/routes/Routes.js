import Login from "./../components/NewLogin";
import Signup from "./../components/Signup";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import { Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default Routing;
