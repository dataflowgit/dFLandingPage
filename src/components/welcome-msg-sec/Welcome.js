import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="container welcome">
      <div className="welcome-msg-sec">
        <h4>
          <span style={{ color: "#495057" }}>Welcome to the</span>
          <span style={{ color: "#048c7f" }}> Data Flow Support Centre</span>
        </h4>
        <p style={{ color: "#495057" }}>
          {" "}
          Whether you want to contact our applicant support team, or need to
          access our self-service support resource - we're here to assist you.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
