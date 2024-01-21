// import "./css/Recent.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Recent(props) {
  const [itemData, setItemData] = useState([]);
  const url = "http://localhost/test/recent.php";
  const token = localStorage.getItem("token");
  useEffect(() => {
    const apiUrl = `${url}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setItemData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [url]);
  const items = itemData;
  return (
    <>
      <div className="recentContainer">
        <div className="recentTab">
          <p className="recentTitle">{props.title}</p>
          <div className="recentList">
            {items.map((item) => (
              <RecentItem
                key={item.txn_id}
                title={item.title}
                desc={item.description}
                date={item.date}
                cat={item.category}
                balance={item.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
function RecentItem(props) {
  function color() {
    if (props.cat === "income") {
      return "#006400";
    } else if (props.cat === "expense") {
      return "#8b0000";
    } else if (props.cat === "payable-debts") {
      return "#00008b";
    } else return "black";
  }
  function category() {
    if (props.cat === "income") {
      return "income";
    } else if (props.cat === "expense") {
      return "expense";
    } else if (props.cat === "payable-debts") {
      return "payable";
    } else return "receivable";
  }
  return (
    <>
      <div className="recentItem">
        <div>
          <div className="recentItemTitle">{props.title}</div>
          <div className="recentItemDesc">{props.desc}</div>
          <div className="recentItemDate">{props.date}</div>
        </div>
        <div className="recentItemBalance">
          <div className="" style={{ color: color() }}>
            Rs. {props.balance}
          </div>
          <p className="" style={{ backgroundColor: color() }}>
            {category()}
          </p>
        </div>
      </div>
    </>
  );
}
export default Recent;
