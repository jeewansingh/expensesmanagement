import "./css/DashaboardTop.css";
import Search from "./Search";
import UserIcon from "./UserIcon.js";
import { useState, useEffect } from "react";
import axios from "axios";

function DashaboardTop({ title }) {
  const [name, setName] = useState("");

  const token = localStorage.getItem("token");

  const url = "http://localhost/test/userinfo.php";

  useEffect(() => {
    const apiUrl = `${url}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        console.error(error.response.data.detail);
      });
  }, [url]);
  return (
    <>
      <div className="dashboardTop">
        <UserIcon name={name} />
        <div className="pageTitle">{title}</div>
      </div>
    </>
  );
}
export default DashaboardTop;
