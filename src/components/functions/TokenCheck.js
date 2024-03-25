import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TokenCheck({ token }) {
  const url = "http://localhost/test/checkuser.php";
  const navigate = useNavigate();
  useEffect(() => {
    const apiUrl = `${url}?token=${token}`;
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
  }, [url]);
  return <></>;
}
export default TokenCheck;
