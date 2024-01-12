import { MdEdit, MdDeleteForever } from "react-icons/md";
function ItemList(props) {
  return (
    <>
      <div className="itemList">
        <div>
          <div className="itemTitle">{props.title}</div>
          <div className="itemDesc">{props.desc}</div>
        </div>
        <div className="itemDate">{props.date}</div>
        <div
          className="itemBalance"
          style={props.cat == "income" ? { color: "green" } : { color: "red" }}
        >
          Rs. {props.balance}
        </div>
        <p className="itemRemark">{props.remark}</p>
        <div className="itemRemark">
          <MdEdit size={20} color="blue" />
          <MdDeleteForever size={20} color="orangered" />
        </div>
      </div>
    </>
  );
}
export default ItemList;
