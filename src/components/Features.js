import "./css/Features.css";

function Features({ featureName, featureDesc }) {
  return (
    <>
      <div className="feature">
        <h3 className="feature-name heading-3">{featureName}</h3>
        <div className="feature-text">{featureDesc}</div>
      </div>
    </>
  );
}

export default Features;
