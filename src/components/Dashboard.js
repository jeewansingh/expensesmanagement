import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token == null || token == undefined) {
    navigate("/login");
  }
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
export default Dashboard;
