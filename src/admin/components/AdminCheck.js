import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminCheck({ token }) {
  const url = "http://localhost/test/admin/checkadmin.php";
  const navigate = useNavigate();
  useEffect(() => {
    const apiUrl = `${url}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        if (!response.data.status) {
          navigate("/adminlogin");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);
  return <></>;
}

export default AdminCheck;
