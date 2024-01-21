import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GetName({ token }) {
  const [name, setName] = useState("");
  const url = "http://localhost/test/userinfo.php";
  useEffect(() => {
    const apiUrl = `${url}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);
  return <>{name}</>;
}

export default GetName;
