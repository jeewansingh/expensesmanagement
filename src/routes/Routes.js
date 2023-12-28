import Login from "./../components/NewLogin";
import Signup from "./../components/Signup";
import Home from "../components/Home";
import { Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
export default Routing;
