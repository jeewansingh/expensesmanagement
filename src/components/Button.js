import "./css/Button.css";
const Button = ({ btnName }) => {
  return (
    <>
      <button className="Button">{btnName}</button>
    </>
  );
};

export default Button;
