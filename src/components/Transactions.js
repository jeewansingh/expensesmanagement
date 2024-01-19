import "./css/Income.css";
import SideNav from "./SideNav";
import DashaboardTop from "./DashaboardTop";
import React from "react";
import ItemList from "./ItemList";
import ViewBalance from "./ViewBalance";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoTrendingDownSharp } from "react-icons/io5";
import AddItem from "./AddItem";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavigate from "./PageNavigate";

function Transactions({ title, source }) {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemData, setItemData] = useState([]);
  const category = source;
  const url = "http://localhost/test/userincome.php";
  useEffect(() => {
    const apiUrl = `${url}?category=${category}&page=${1}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setItemData(response.data.data);
        setTotalPage(response.data.total_page);
        setCurrentPage(response.data.current_page);
      })
      .catch((error) => alert(error));
  }, [url]);
  function ItemHead() {
    return (
      <>
        <div className="balanceView">
          <AddItem title={title} source={source} />
          <ViewBalance
            title="Total Expense"
            balance="800000"
            icon={<IoTrendingDownSharp size={20} />}
          />
          <ViewBalance
            title="Total Balance"
            balance="920000"
            icon={<MdAccountBalanceWallet size={20} />}
          />
          <ViewBalance
            title="Total Available Balance"
            balance="200000"
            icon={<TbMoneybag size={20} />}
          />
        </div>

        <div className="itemListHead">
          <div className="listHead">Particulars</div>
          <div className="listHead">Date</div>
          <div className="listHead">Amount</div>
          <div className="listHead">Remark</div>
          <div className="listHead">Action</div>
        </div>
      </>
    );
  }
  const items = itemData;
  return (
    <>
      <div className="dashboardContainer">
        <SideNav />
        <div>
          <DashaboardTop title={title} />
          <div className="itemBodyContainer">
            {ItemHead()}
            {items.map((item) => (
              <ItemList
                txn_id={item.txn_id}
                title={item.title}
                desc={item.description}
                date={item.date}
                remark={item.remark}
                balance={item.amount}
                cat={source}
              />
            ))}
          </div>
          <PageNavigate />
        </div>
      </div>
    </>
  );
}
export default Transactions;
