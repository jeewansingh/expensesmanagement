import ActiveUser from "./ActiveUser";
import MakeAdmin from "./MakeAdmin";
import "./css/userprofile.css";

function Profile({ name, username, date, status, admin, user_id }) {
  return (
    <>
      <div className="userprofile-container">
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Username:</strong> {username}
          </p>
          <p>
            <strong>Joined Date:</strong> {date}
          </p>
          <p>
            <strong>Status:</strong> {status === "1" ? "Active" : "Not Active"}
          </p>
          <ActiveUser status={status} user_id={user_id} />
          <MakeAdmin admin={admin} user_id={user_id} />
        </div>
        <div>
          {/* <p>
            {admin === "1" ? (
              <button className="admin-button">Remove Admin</button>
            ) : (
              <button className="notadmin-button">Make Admin</button>
            )}
          </p> */}
        </div>
      </div>
    </>
  );
}
export default Profile;
