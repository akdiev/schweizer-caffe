import React from "react";
import Column from "../assets/Bulma/Column";
import Columns from "../assets/Bulma/Columns";
import { formatWorkTime, getTodayWorktime } from "../utils/helpers";

const TimeOfWork = ({ workTime }) => {
  const [active, setActive] = React.useState(false);

  const formattedWorkTime = workTime ? formatWorkTime(workTime) : null;

  const todayWorkTime = formattedWorkTime
    ? getTodayWorktime(formattedWorkTime)
    : null;

  return (
    <div className={`time-of-work dropdown is-right ${active && "is-active"}`}>
      <div className={`dropdown-trigger ${active && "active"}`}>
        <button
          className="menu-button"
          aria-haspopup="true"
          aria-controls="dropdown-menu2"
          onClick={() => setActive(!active)}
        >
          <span>
            {todayWorkTime
              ? `IDAG: ${todayWorkTime}`
              : "Enligt överenskommelse"}
          </span>
          {formattedWorkTime && (
            <span className={`icon-24 ${active && "active"}`}>
              <img
                src="/images/icons/chevron-down-circle.svg"
                alt="Arrow down"
              />
            </span>
          )}
        </button>
      </div>
      {formattedWorkTime && (
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="time-of-work-content dropdown-content">
            <div className="dropdown-item">
              <p className="time-of-work-title has-font-14">
                ORDINARIE ÖPPETTIDER
              </p>
            </div>
            <hr className="dropdown-divider" />
            <Columns className="dropdown-item">
              <Column className="weekday">Måndag:</Column>
              <Column className="worktime">
                {formattedWorkTime["monday"]}
              </Column>
            </Columns>
            <Columns className="dropdown-item">
              <Column className="weekday">Tisdag:</Column>
              <Column className="worktime">
                {formattedWorkTime["tuesday"]}
              </Column>
            </Columns>
            <Columns className="dropdown-item">
              <Column className="weekday">Onsdag:</Column>
              <Column className="worktime">
                {formattedWorkTime["wednesday"]}
              </Column>
            </Columns>
            <Columns className="dropdown-item">
              <Column className="weekday">Torsdag:</Column>
              <Column className="worktime">
                {formattedWorkTime["thursday"]}
              </Column>
            </Columns>
            <Columns className="dropdown-item">
              <Column className="weekday">Fredag:</Column>
              <Column className="worktime">
                {formattedWorkTime["friday"]}
              </Column>
            </Columns>
            <Columns className="dropdown-item">
              <Column className="weekday">Lördag:</Column>
              <Column className="worktime">
                {formattedWorkTime["saturday"]}
              </Column>
            </Columns>
            <Columns className="dropdown-item">
              <Column className="weekday">Söndag:</Column>
              <Column className="worktime">
                {formattedWorkTime["sunday"]}
              </Column>
            </Columns>
            <hr className="dropdown-divider" />
            <div className="dropdown-item">
              <div className="time-of-work-title has-font-14 align-left">
                <span className="white-caution-circle">
                  <p className="caution-sign">!</p>
                </span>
                AVVIKANDE ÖPPETTIDER
              </div>
            </div>
            <hr className="dropdown-divider" />
            <div className="time-of-work-footer navbar-item">
              <p>20/01/2021 - 08:00 - 16:00</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeOfWork;
