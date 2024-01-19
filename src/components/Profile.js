import DashaboardTop from "./DashaboardTop";
import "./css/Profile.css";
import SideNav from "./SideNav";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const username = localStorage.getItem("username");

  const url = "http://localhost/test/userinfo.php";

  useEffect(() => {
    const apiUrl = `${url}?username=${username}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setName(response.data.name);
        setDate(response.data.date);
        setStatus(response.data.status);
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  }, [url]);

  const img_src = "https://picsum.photos/200";

  return (
    <>
      <div className="dashboardContainer">
        <SideNav />
        <div>
          <DashaboardTop title="Profile" />
          <div className="profileBodyContainer">
            <div>
              <img
                src={img_src}
                alt="User Profile Image"
                className="profileImage"
              />
            </div>
            <div>
              <div className="profileName">Name: {name}</div>
              <div className="profileUsername">Username: {username}</div>
              <div className="profileDate">Date: {date}</div>
              <div className="profileStatus">Status: {status}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
