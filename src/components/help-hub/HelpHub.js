import React from "react";
import HelpHubCards from "./helphub-cards/HelpHubCards";
import "./helpHub.css";

const HelpHub = () => {
  return (
    <div className="container help-section">
      <div className="help-sec-title">
        <h1 style={{ color: "#495057" }}>
          Brows through our{" "}
          <span style={{ color: "#048c7f" }}>Self Help Hub</span>
        </h1>
      </div>

      <div className="help-hub-cards-sec">
        <HelpHubCards 
        title='How To Apply'
        cardText='Select a regulator for more information on their requirements.'/>
        <HelpHubCards 
        title='Submit Missing Document / Information'
        cardText='Learn how to upload missing information or documentation to complete your verification.'/>
        <HelpHubCards 
        title='Apply for Report Transfer'
        cardText='Learn how to transfer your existing DataFlow report from one regulator to another.'/>
        <HelpHubCards 
        title='Check Status / Download Report'
        cardText='Quick guide on how to download your report or check your DataFlow case status.'/>
        <HelpHubCards 
        title='Apply for Appeal / Re-verification'
        cardText='Submit an appeal request to re-verify your previously submitted documents.'/>
        <HelpHubCards 
        title='Submit Additional Document for Verification'
        cardText='Select a regulator to learn more.'/>
      </div>
    </div>
  );
};

export default HelpHub;
