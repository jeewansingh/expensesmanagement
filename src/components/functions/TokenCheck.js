import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TokenCheck({ token }) {
  const url1 = "http://localhost/test/checkuser.php";
  const navigate = useNavigate();
  useEffect(() => {
    const apiUrl = `${url1}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        if (!response.data.status) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url1]);
  return <></>;
}
export default TokenCheck;
