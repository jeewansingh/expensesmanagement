import Login from "./../components/NewLogin";
import Signup from "./../components/Signup";
import Home from "../components/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
