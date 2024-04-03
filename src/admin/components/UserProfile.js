import ActiveUser from "./ActiveUser";
import DeleteUser from "./DeleteUser";
import MakeAdmin from "./MakeAdmin";
import "./css/userprofile.css";

function Profile({ name, username, date, status, admin, user_id, is_delete }) {
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
          <DeleteUser is_delete={is_delete} user_id={user_id} />{" "}
        </div>
        <div className="profile-action">
          <div>
            <ActiveUser status={status} user_id={user_id} />
          </div>
          <div>
            <MakeAdmin admin={admin} user_id={user_id} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
