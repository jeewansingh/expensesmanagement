import "./css/Income.css";
import "./css/PageNavigate.css";
import "./css/TxnFeature.css";
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
// import PageNavigate from "./PageNavigate";
import { ToastContainer, toast } from "react-toastify";
import { IoSearch } from "react-icons/io5";

function Transactions({ title, source }) {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemData, setItemData] = useState([]);
  const category = source;
  const url = "http://localhost/test/userincome.php";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const apiUrl = `${url}?category=${category}&page=${1}&token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setItemData(response?.data?.data); //Transactions
        setTotalPage(response?.data?.total_page);
        setCurrentPage(response?.data?.current_page);
      })
      .catch((error) => console.log(error.response.data.detail));
  }, [url]);

  const [totalincome, setTotalincome] = useState("");
  const [totalexpense, setTotalexpense] = useState("");
  const [totalreceive, setTotalreceive] = useState("");
  const [totalpay, setTotalpay] = useState("");
  const [totalbalance, setTotalbalance] = useState("");
  const [totalsaving, setTotalsaving] = useState("");

  const url1 = "http://localhost/test/totalbalance.php";
  useEffect(() => {
    const apiUrl = `${url1}?token=${token}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setTotalincome(response.data.totalIncome);
        setTotalexpense(response.data.totalExpense);
        setTotalreceive(response.data.totalReceive);
        setTotalpay(response.data.totalPay);
        setTotalsaving(response.data.totalSaving);
        setTotalbalance(response.data.totalBalance);
      })
      .catch((error) => console.log(error.response.data.detail));
  }, [url1]);

  // Search
  const [search, setSearch] = useState("");
  const [nodata, setNoData] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    // const url2 = "http://localhost/test/userincome.php";
    const apiUrl2 = `${url}?category=${category}&page=${1}&token=${token}&search=${search}`;
    axios
      .get(apiUrl2)
      .then((response) => {
        setItemData(response?.data?.data); //Transactions
        setTotalPage(response?.data?.total_page);
        setCurrentPage(response?.data?.current_page);
      })
      .catch((error) => {
        setNoData(error.response.data.detail);
        setItemData("");
      });
  };

  /////
  // Date Filter
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleDateFilter = (e) => {
    e.preventDefault();
    if (from == "" || to == "") {
      toast.error("Select date range");
      return 0;
    }
    const apiUrl = `${url}?category=${category}&page=${1}&token=${token}&from=${from}&to=${to}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setItemData(response?.data?.data); //Transactions
        setTotalPage(response?.data?.total_page);
        setCurrentPage(response?.data?.current_page);
      })
      .catch((error) => {
        setNoData(error.response.data.detail);
        setItemData("");
      });
  };

  const length = itemData.length;

  // Sort
  // const [sort, setSort] = useState("");
  // const handleSort = (e) => {
  //   e.preventDefault();
  //   setSort(e.target.value);
  //   console.log(sort);
  //   const apiUrl = `${url}?category=${category}&page=${1}&token=${token}&sort=${sort}`;
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       setItemData(response?.data?.data); //Transactions
  //       setTotalPage(response?.data?.total_page);
  //       setCurrentPage(response?.data?.current_page);
  //     })
  //     .catch((error) => {
  //       setNoData(error.response.data.detail);
  //       setItemData("");
  //     });
  // };
  ///// PAGE NAVIGATE

  const [step, setStep] = useState(1);
  function handleNext() {
    if (step < totalPage) {
      setStep((s) => s + 1);

      const apiUrl = `${url}?category=${category}&page=${
        step + 1
      }&token=${token}`;
      axios
        .get(apiUrl)
        .then((response) => {
          setItemData(response?.data?.data); //Transactions
          setTotalPage(response?.data?.total_page);
          setCurrentPage(response?.data?.current_page);
        })
        .catch((error) => toast.error(error.response.data.detail));
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
      const apiUrl = `${url}?category=${category}&page=${
        step - 1
      }&token=${token}`;
      axios
        .get(apiUrl)
        .then((response) => {
          setItemData(response?.data?.data); //Transactions
          setTotalPage(response?.data?.total_page);
          setCurrentPage(response?.data?.current_page);
        })
        .catch((error) => toast.error(error.response.data.detail));
    }
  }
  ////////////////
  function ItemHead() {
    return (
      <>
        <div className="balanceView">
          <AddItem title={title} source={source} />
          <ViewBalance
            title={`Total ${title}`}
            // balance={totalexpense}
            balance={
              title === "expense"
                ? totalexpense
                : title === "income"
                ? totalincome
                : title === "payable-debts"
                ? totalpay
                : title === "receivable-debts"
                ? totalreceive
                : null
            }
            icon={<IoTrendingDownSharp size={20} />}
          />
          <ViewBalance
            title="Total Balance"
            balance={totalbalance}
            icon={<MdAccountBalanceWallet size={20} />}
          />
          <ViewBalance
            title="Total Available Balance"
            balance={totalsaving}
            icon={<TbMoneybag size={20} />}
          />
        </div>
        {/* Search */}
        <div className="txnFeature">
          <div className="search">
            <form>
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />

              <button type="submit" onClick={handleSearch}>
                <IoSearch className="searchIcon" />
              </button>
            </form>
          </div>
          {/* Date Filter */}
          <div>
            <form className="filter">
              <label>From: </label>
              <input type="date" onChange={(e) => setFrom(e.target.value)} />
              <label>To: </label>
              <input type="date" onChange={(e) => setTo(e.target.value)} />
              <button
                type="submit"
                onClick={handleDateFilter}
                className="filterbtn"
              >
                Go
              </button>
            </form>
          </div>
          {/* Sort By */}
          {/* <div>
            <form className="sort">
              <label>Sort By: </label>
              <select value={sort} onChange={handleSort}>
                <option value="">Latest Added</option>
                <option onChange={(e) => setSort(e.target.value)} value="title">
                  Title
                </option>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
              {/* <button type="submit">Search</button> 
            </form>
          </div> */}
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
            {length === 0 ? (
              <p>No Data Found</p>
            ) : (
              <div>
                {items.map((item) => (
                  <ItemList
                    key={item.txn_id}
                    txn_id={item.txn_id}
                    title={item.title}
                    desc={item.description}
                    date={item.date}
                    remark={item.remark}
                    balance={item.amount}
                    cat={source}
                  />
                ))}
                <div className="step">
                  <div className="message">Step : {step}</div>
                  <div className="numbers">
                    {Array.from({ length: totalPage }, (_, index) => (
                      <div
                        key={index}
                        className={`${step === index + 1 ? "active" : ""}`}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  <div className="stepButtons">
                    <button className="button" onClick={handlePrevious}>
                      Previous
                    </button>
                    <button className="button" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Transactions;
