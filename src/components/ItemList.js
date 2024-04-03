import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
function ItemList(props) {
  function color() {
    if (props.cat === "income") {
      return "green";
    } else if (props.cat === "expense") {
      return "red";
    } else if (props.cat === "payable-debts") {
      return "blue";
    } else return "black";
  }
  return (
    <>
      <div className="itemList">
        <div>
          <div className="itemTitle">{props.title}</div>
          <div className="itemDesc">{props.desc}</div>
        </div>
        <div className="itemDate">{props.date}</div>
        <div className="itemBalance" style={{ color: color() }}>
          Rs. {props.balance}
        </div>
        <p className="itemRemark">{props.remark}</p>
        <div className="itemRemark">
          <EditItem
            title={props.title}
            txn_id={props.txn_id}
            source={props.cat}
          />
          <DeleteItem txn_id={props.txn_id} title={props.title} />
          {/* <EditItem2 title={props.title} txn_id={props.txn_id} /> */}
        </div>
      </div>
    </>
  );
}
export default ItemList;
