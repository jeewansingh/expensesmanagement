import "./css/totalNumber.css";

function TotalNumber(props) {
  return (
    <>
      <div className="tab">
        <div>
          <p className="title">{props.title}</p>
          <p className="titleicon">{props.icon}</p>
        </div>
        <p className="number">{props.number}</p>
      </div>
    </>
  );
}
export default TotalNumber;
