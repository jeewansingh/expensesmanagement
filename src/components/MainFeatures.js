import "./css/Features.css";
import Features from "./Features";
function MainFeatures() {
  return (
    <>
      <div className="featuresContainer">
        <Features
          featureName="Mobile Accessibility"
          featureDesc="Develop mobile applications or ensure the system is 
accessible through mobile browsers for on-the-go management."
        />
        <Features
          featureName="Real-Time Updates"
          featureDesc="Ensure that the system provides real-time updates on financial 
transactions and account balances."
        />
        <Features
          featureName="Security Measures"
          featureDesc="Implement robust security measures to protect user data, 
including encryption and secure login protocols."
        />
        <Features
          featureName="Accuracy in Recording"
          featureDesc="Ensure precise and accurate recording of financial transactions, minimizing errors in income and expense tracking."
        />
      </div>
    </>
  );
}

export default MainFeatures;
