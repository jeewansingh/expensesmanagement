import { useState, useEffect } from "react";
import axios from "axios";
import Transactions from "./Transactions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Income() {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemData, setItemData] = useState([]);
  const category = "income";
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
      .catch((error) => toast.error(error));
  }, [url]);
  return (
    <>
      <Transactions
        title="income"
        source="income"
        items={itemData}
        total_page={totalPage}
        current_page={currentPage}
      />
    </>
  );
}
export default Income;
