import Transactions from "./Transactions";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function DebtsPay() {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemData, setItemData] = useState([]);
  const category = "payable-debts";
  const url = "http://localhost/test/userincome.php";
  useEffect(() => {
    const apiUrl = `${url}?category=${category}`;
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
        title="payable-debts"
        source="payable-debts"
        items={itemData}
        total_page={totalPage}
        current_page={currentPage}
      />
    </>
  );
}
export default DebtsPay;
