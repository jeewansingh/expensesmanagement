import Transactions from "./Transactions";
import "./css/PageNavigate.css";
import { useState } from "react";

function PageNavigate(props) {
  const [step, setStep] = useState(1);
  console.log(step);
  function handleNext() {
    if (step < 5) setStep((s) => s + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <>
      <div className="step">
        <div className="message">Step : {step}</div>
        <div className="numbers">
          <div className={`${step === 1 ? "active" : ""}`}>1</div>
          <div className={`${step === 2 ? "active" : ""}`}>2</div>
          <div className={`${step === 3 ? "active" : ""}`}>3</div>
          <div className={`${step === 4 ? "active" : ""}`}>4</div>
          <div className={`${step === 5 ? "active" : ""}`}>5</div>
        </div>
        <div className="stepButtons">
          <button className="button" onClick={handlePrevious}>
            Previous
          </button>
          <button className="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default PageNavigate;
