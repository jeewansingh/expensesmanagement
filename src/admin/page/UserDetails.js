import { useParams } from "react-router-dom";
import "./css/userdetails.css";
import AdminCheck from "../../admin/components/AdminCheck";
import AdminSideNav from "../components/AdminSideNav";
import ItemList from "../components/ItemList";
const token = localStorage.getItem("token");

function UserDetails() {
  const { user_id } = useParams();
  return (
    <>
      <AdminCheck token={token} />
      <div className="header">
        <h1>Details</h1>
      </div>
      <div className="detailsContainer">
        <div>
          <AdminSideNav />
        </div>

        <div>
          {/* <UserProfile /> */}
          <ItemList user_id={user_id} />
        </div>
      </div>
    </>
  );
}

export default UserDetails;
