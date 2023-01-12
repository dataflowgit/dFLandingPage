import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner" id="banner">
        <div className="banner-title-and-searchbar">
          <div className="banner-title">
            <h1>How can we help you today?</h1>
          </div>
          <div className="banner-serchbar" id="banner-searchbar">
            <InputGroup size="large" className="mb-3">
              <Form.Control
                placeholder="Enter your search term here..."
                aria-describedby="basic-addon2"
                style={{
                  width: "700px",
                  padding: "10px",
                  borderBottomLeftRadius: "5px",
                  borderTopLeftRadius: "5px",
                  border: "none",
                  outline: "none",
                }}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                style={{
                  padding: "10px",
                  borderBottomRightRadius: "5px",
                  borderTopRightRadius: "5px",
                  border: "none",
                  background: "#048c7f",
                  color: "#ffff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                SEARCH
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
