import React from "react";

const linkButtonStyle = {
  background: "none",
  border: "none",
  padding: 0,
  color: "#0d6efd",
  cursor: "pointer",
  textAlign: "left",
  textDecoration: "none",
  lineHeight: "2.5",
};

const accountOpeningTopics = [
  "Online Account Opening",
  "Offline Account Opening",
  "Company, Partnership and HUF Account",
  "Opening",
  "NRI Account Opening",
  "Charges at Zerodha",
  "Zerodha IDFC FIRST Bank 3-in-1 Account",
  "Getting Started",
];

const ticketSections = new Array(6).fill("Account Opening");

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        {ticketSections.map((sectionTitle, sectionIndex) => (
          <div className="col-4 p-5 mt-2 mb-2" key={`${sectionTitle}-${sectionIndex}`}>
            <h4>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
              {sectionTitle}
            </h4>
            {accountOpeningTopics.map((topic) => (
              <React.Fragment key={`${sectionTitle}-${sectionIndex}-${topic}`}>
                <button type="button" style={linkButtonStyle}>
                  {topic}
                </button>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
