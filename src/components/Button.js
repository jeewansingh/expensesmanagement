import "./css/Button.css";
const Button = ({ btnName, onClick }) => {
  return (
    <>
      <button className="Button" onClick={onClick}>
        {btnName}
      </button>
    </>
  );
};

export default Button;
