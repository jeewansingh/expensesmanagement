import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Incomes from "../components/Incomes";
import Expense from "../components/Expense";

const PrivateRoute = () => {
  return (
    <>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/incomes" element={<Incomes />} />
      <Route path="/expenses" element={<Expense />} />
    </>
  );
};

export default PrivateRoute;
