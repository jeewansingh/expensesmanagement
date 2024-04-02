import Transactions from "../Transactions";
import "react-toastify/dist/ReactToastify.css";
import TokenCheck from "../functions/TokenCheck";

function Income() {
  const category = "income";
  const token = localStorage.getItem("token");

  return (
    <>
      <TokenCheck token={token} />
      <Transactions title="income" source={category} />
    </>
  );
}
export default Income;
