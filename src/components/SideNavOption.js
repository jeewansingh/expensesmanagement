import "./css/SideNav.css";
import { Link } from "react-router-dom";

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
export default SideNavOption;
