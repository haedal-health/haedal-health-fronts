import React, { useState } from "react";

import "../styles/ReservationDetails.scss";

export default function PassDetailContainer(passtypeText, text) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [date, setDate] = useState(false);
  const [name, setName] = useState(false);
  const [time, setTime] = useState(false);

  /*
  Long id;
  String name;
  Integer count;
  Integer price;
  LocalDateTime startedDay;
  LocalDateTime endedDay;
*/

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="ReservationDetails-container">
      <div className="ReservationDetails-title-groups align-center">
        <span className="ReservationDetails-item-title titlefont2 align-center">
          {passtypeText}
        </span>
        <button
          className="ReservationDetails-item-btn btnfont1 align-center"
          onClick={handleToggle}
        >
          {text}
        </button>
      </div>

      {isExpanded && (
        <div
          className={`ReservationDetails-item-groups ${
            isExpanded ? "expanded" : ""
          }`}
        >
          <ul className="ReservationDetails-item-detail-text">
            <li>
              <span className="item-title">날짜</span>
              <input
                type="text"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  console.log("변경:", e.target.value);
                }}
              />
            </li>
            <li>
              <span className="item-title">예약 시간</span>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </li>
            <li>
              <span className="item-title">담당 선생님</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
              트레이너
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
