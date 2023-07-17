import React from "react";

import "../styles/ReservationDetails.scss";
export default function PassDetailContainer(
  passtypeText,
  text,
  date,
  time,
  trainer
) {
  return (
    <div className="ReservationDetails-container">
      <div className="ReservationDetails-title-groups align-center">
        <span className="ReservationDetails-item-title titlefont2 align-center">
          {passtypeText}
        </span>
        <button className="ReservationDetails-item-btn btnfont1 align-center">
          {text}
        </button>
      </div>

      <div class="ReservationDetails-item-groups">
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
    </div>
  );
}
