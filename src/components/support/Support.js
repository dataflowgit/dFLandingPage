import React from "react";
import SupportCards from "../support-cards/SupportCards";
import img3 from "./images/DataFlow-Service-Desk-min.png";
import img1 from "./images/Check-Support-Status-min.png";
import img2 from "./images/Raise-Support-Ticket-min.png";
import "./support.css";
const Support = () => {
  return (
    <div className="container support">
      <div className="support-section">
        <div className="support-sec-title">
          <h1 style={{ color: "#495057"}}>
            Our <span style={{ color: "#048c7f" }}>Support</span> Service
          </h1>
        </div>
        <div className="support-sec-text">
          <p style={{ color: "#495057",fontSize: '14px',lineHeight: '21.875px'}}>
            Please note that in order to submit a support request, you will need
            to create a separate login on this support portal using the sign up
            option, if you have not already done so.
          </p>
        </div>
        <div className="cards">
          <SupportCards
            img={img1}
            title="Check existing support request"
            cardText="Check the status or follow-up on a support request you have previously submitted."
            btnText="FOLLOW-UP ON EXISTING REQUEST"
          />

          <SupportCards
            img={img2}
            title="Submit a support request"
            cardText="If you have an enquiry regarding your verification, create a support request so our team can assist you."
            btnText="CREATE A SUPPORT REQUEST"
          />

          <SupportCards
            img={img3}
            title="Find nearest DataFlow Service Desk"
            cardText="If you want to do in-person applications, visit your nearest service desk for assistance."
            btnText="SEE SERVICE DESK LOCATIONS"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
