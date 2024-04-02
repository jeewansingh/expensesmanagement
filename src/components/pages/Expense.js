import Transactions from "../Transactions";
import "react-toastify/dist/ReactToastify.css";
import TokenCheck from "../functions/TokenCheck";
function Expense() {
  const category = "expense";
  const token = localStorage.getItem("token");

  return (
    <>
      <TokenCheck token={token} />
      <Transactions title="expense" source={category} />
    </>
  );
}
export default Expense;
