import DashaboardTop from "../DashaboardTop";
import "../css/Profile.css";
import SideNav from "../SideNav";
import { useState, useEffect } from "react";
import axios from "axios";
import TokenCheck from "../functions/TokenCheck";

function Profile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const url = "http://localhost/test/userinfo.php";
  const token = localStorage.getItem("token");
  useEffect(() => {
    const apiUrl = `${url}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setName(response.data.name);
        setDate(response.data.date);
        setUsername(response.data.username);
        setStatus(response.data.status);
      })
      .catch((error) => {
        console.log(error.response.data.detail);
      });
  }, [url]);

  const img_src = "https://picsum.photos/200";

  return (
    <>
      <TokenCheck token={token} />
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
