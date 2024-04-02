import { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "../components/UserProfile";
import "./css/itemList.css";
import SearchUser from "./SearchUser";

function ItemList(props) {
  const [itemData, setItemData] = useState([]);
  const [user, setUser] = useState([]);

  const url = "http://localhost/test/admin/userdetails.php";
  useEffect(() => {
    const apiUrl = `${url}?user_id=${props.user_id}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setItemData(response.data.data);
        setUser(response.data.user);
      })
      .catch((error) => console.log(error));
  }, [url]);

  const items = itemData;
  const length = itemData.length;
  console.log(user.name);
  console.log(user.is_admin);
  return (
    <>
      <UserProfile
        name={user.name}
        username={user.username}
        date={user.date_created}
        status={user.is_active}
        admin={user.is_admin}
        user_id={props.user_id}
      />
      <SearchUser />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {length === 0 ? (
            <tr>
              <td colSpan="6">No Data Found</td>
            </tr>
          ) : (
            items.map((item, index) => (
              <>
                <tr key={item.index}>
                  <td>{item.date}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>Rs. {item.amount}</td>
                  <td>{item.category}</td>
                  <td>{item.remark}</td>
                </tr>
              </>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
export default ItemList;
