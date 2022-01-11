import React from "react";
import Column from "../../assets/Bulma/Column";

const SingleEventView = ({ content, ...props }) => {
  return (
    <div className="event-modal">
      <div className="event-card-content">
        <Column md={3} lg={3} xs={11}>
          <div className="event-card-container">
            <span
              className="close-event-modal-button"
              onClick={() => props.closeModal()}
            >
              <i className="fal fa-times close-icon"></i>
            </span>
            {content.image ? <img alt="food" src={content.image}></img> : ""}

            <div>
              <div className="title-event-time-container">
                <h1 className="title">{content.title}</h1>
                <h2 className="event-time">{content.eventTime}</h2>
              </div>
              <div>
                <div className="description-and-menu-button">
                  <p className="description">{content.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Column>
      </div>
    </div>
  );
};

export default SingleEventView;
