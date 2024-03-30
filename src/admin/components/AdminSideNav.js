import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import "./css/sideNav.css";

const AdminSideNav = () => {
  return (
    <div className="sideNavContainer">
      <div className="sideNav">
        <div className="sideNavLogo">Logo</div>
        <div className="sideNavList">
          <SideNavOption
            name="Home"
            icon={<IoMdHome size={20} />}
            url="/admindashboard"
          />
          <SideNavOption
            name="Users"
            icon={<IoMdHome size={20} />}
            url="/users"
          />
          <SideNavOption
            name="Admins"
            icon={<IoMdHome size={20} />}
            url="/admins"
          />
          <SideNavOption
            name="Deleted"
            icon={<IoMdHome size={20} />}
            url="/deletedusers"
          />
        </div>
      </div>
    </div>
  );
};

const SideNavOption = (props) => {
  return (
    <>
      <div className="sideNavItem">
        <Link to={props.url} className="sideNavListText">
          <p className="sideNavIcon">{props.icon}</p>
          <div>{props.name}</div>
        </Link>
      </div>
    </>
  );
};

export default AdminSideNav;
