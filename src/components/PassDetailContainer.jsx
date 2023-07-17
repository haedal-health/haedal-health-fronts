import React, { useState } from "react";

import "../styles/ReservationDetails.scss";
export default function PassDetailContainer(
  passtypeText,
  text,
  date,
  time,
  trainer
) {
  const [isExpanded, setIsExpanded] = useState(false);

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
          <ul class="ReservationDetails-item-detail-text">
            <li>
              <span class="item-title">날짜</span>
              {date}
            </li>
            <li>
              <span class="item-title">예약 시간</span>
              {time}
            </li>
            <li>
              <span class="item-title">담당 선생님</span>
              {trainer} 트레이너
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
