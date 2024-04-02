import React, { useState } from "react";
import "../css/Download.css";
import SideNav from "../SideNav";
import TokenCheck from "../functions/TokenCheck";
import DashaboardTop from "../DashaboardTop";

function Download() {
  const [dayRange, setDayRange] = useState(30);
  const token = localStorage.getItem("token");
  const handleInputChange = (event) => {
    setDayRange(event.target.value); // Update dayRange state with user input
  };
  if (dayRange < 1) {
    setDayRange(1);
  }

  return (
    <>
      <TokenCheck token={token} />
      <div className="dashboardContainer">
        <SideNav />
        <div>
          <DashaboardTop title="Download" />
          <div className="download-box">
            <input
              className="input-box"
              type="number"
              value={dayRange}
              onChange={handleInputChange}
              placeholder="Enter number of days"
            />
            <a
              className="download-link"
              href={`http://localhost/test/pdf.php?token=${token}&day_range=${dayRange}`}
            >
              Download Transactions of last {dayRange} days
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Download;
