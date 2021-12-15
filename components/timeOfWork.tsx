import React from "react";
import { formatWorkTime, getTodayWorktime } from "../utils/helpers";

const TimeOfWork = ({ workTime }) => {
  const [active, setActive] = React.useState(false);

  const formattedWorkTime = workTime ? formatWorkTime(workTime) : null;

  const todayWorkTime = formattedWorkTime
    ? getTodayWorktime(formattedWorkTime)
    : null;

  return (
    <div className={`time-of-work dropdown is-right ${active && "is-active"}`}>
      <div className="dropdown-trigger">
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
            <span className="icon-24">
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
            <div className="dropdown-item">
              <p className="weekday">Måndag:</p>
              <p className="worktime">{formattedWorkTime["monday"]}</p>
            </div>
            <div className="dropdown-item">
              <p className="weekday">Tisdag:</p>
              <p className="worktime">{formattedWorkTime["tuesday"]}</p>
            </div>
            <div className="dropdown-item">
              <p className="weekday">Onsdag:</p>
              <p className="worktime">{formattedWorkTime["wednesday"]}</p>
            </div>
            <div className="dropdown-item">
              <p className="weekday">Torsdag:</p>
              <p className="worktime">{formattedWorkTime["thursday"]}</p>
            </div>
            <div className="dropdown-item">
              <p className="weekday">Fredag:</p>
              <p className="worktime">{formattedWorkTime["friday"]}</p>
            </div>
            <div className="dropdown-item">
              <p className="weekday">Lördag:</p>
              <p className="worktime">{formattedWorkTime["saturday"]}</p>
            </div>
            <div className="dropdown-item">
              <p className="weekday">Söndag:</p>
              <p className="worktime">{formattedWorkTime["sunday"]}</p>
            </div>
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
