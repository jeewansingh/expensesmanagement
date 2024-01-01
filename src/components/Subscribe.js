import "./css/Subscribe.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Button";
import React, { useState } from "react";
import axios from "axios";

function Subscribe() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();

    if (email.trim() == "") {
      toast.error("Enter email");
      return false;
    }

    const url = "http://localhost/test/emailsubs.php";
    let fData = new FormData();
    fData.append("email", email);
    axios
      .post(url, fData)
      .then((response) => {
        toast.success(response.data.detail);
      })
      .catch((error) => {
        toast.error(error.response.data.detail);
      });
  }
  return (
    <>
      <form onSubmit={handleSubscribe}>
        <div className="subs">
          <div className="subsDetails">
            Enter your email address for our mailing Promo or other interesting
            things
          </div>
          <div className="subSubmit">
            <input
              type="email"
              placeholder="Enter your email"
              className="subsSubmitEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="subBtn">
              <Button type="submit" btnName="Submit"></Button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
export default Subscribe;
