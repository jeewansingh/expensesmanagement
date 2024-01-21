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
import { useState, useEffect } from "react";
import axios from "axios";

function Routing() {
  const data = localStorage.getItem("token");

  // token send
  // user id get
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/incomes" element={<Incomes />} />
      {data !== null && data !== "" ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/debtspayable" element={<DebtsPay />} />
          <Route path="/debtsreceivable" element={<DebtsRec />} />
          <Route path="/profile" element={<Profile />} />
          {/* <PrivateRoute /> */}
        </>
      ) : (
        <>
          <Route path="/dashboard" element={<Login />} />
          <Route path="/incomes" element={<Login />} />
          <Route path="/expenses" element={<Login />} />
          <Route path="/debtspayable" element={<Login />} />
          <Route path="/debtsreceivable" element={<Login />} />
          <Route path="/profile" element={<Login />} />
        </>
      )}
      <Route path="*" element={<ForbiddenPage />} />
    </Routes>
  );
}
export default Routing;
