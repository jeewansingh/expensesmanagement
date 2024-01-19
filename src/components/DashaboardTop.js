import "./css/DashaboardTop.css";
import Search from "./Search";
import UserIcon from "./UserIcon.js";
import { useState, useEffect } from "react";
import axios from "axios";

function DashaboardTop(props) {
  const [name, setName] = useState("");

  const username = localStorage.getItem("username");

  const url = "http://localhost/test/userinfo.php";

  let fData = new FormData();

  useEffect(() => {
    const apiUrl = `${url}?username=${username}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  }, [url]);
  return (
    <>
      <div className="dashboardTop">
        <UserIcon name={name} />
        <div className="pageTitle">{props.title}</div>
      </div>
    </>
  );
}
export default DashaboardTop;
