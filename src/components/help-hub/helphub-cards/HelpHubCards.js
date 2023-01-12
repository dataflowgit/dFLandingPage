import React from 'react'
import './helpHubCards.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const HelpHubCards = (props) => {
  return (
    <div className='container help-hub-cards'>
        <div className="cards">
        <Card style={{ width: "22rem",borderRadius:'5px',boxShadow: '0px 0px 9px -2px #00000080'}}>
          {/* <Card.Icon
          /> */}
          <Card.Body>
            <Card.Title
              style={{
                color: "#495057",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "22px",
              }}
            >
              {props.title}
            </Card.Title>
            <Card.Text
              style={{
                paddingBottom: "20px",
                color: "#495057",
                fontSize: "14px",
                lineHeight: "21.875px",
              }}
            >
              {props.cardText}
            </Card.Text>
            <Button
              variant="primary"
              style={{
                cursor: "pointer",
                fontSize: "14px",
                backgroundColor: "#048c7f",
                fontWeight: "600",
                padding: "12px 25px",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
              }}
            >
              {props.btnText}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default HelpHubCards