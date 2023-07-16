import React from "react";

import "../styles/ReservationDetails.scss";

export default function ReservationDetails() {
  return (
    <div className="ReservationDetails-wrapper ">
      <div className="ReservationDetails-title align-center">
        <span className="ReservationDetails-text titlefont1">
          필라테스 이용권1 | 3/5 | 23.01.01 ~23.05.04
        </span>

        <button className="ReservationDetails-title-btn-groups"> 초기화</button>
      </div>

      <div className="ReservationDetails-container">
        <div className="ReservationDetails-title-groups ">
          <span className="ReservationDetails-item-title-text"></span>
          <button className="ReservationDetails-item-btn">
            <span className="ReservationDetails-item-btn-text"></span>
          </button>
        </div>

        <div className="ReservationDetails-item-groups">
          <ul className="ReservationDetails-item-detail-text">
            <li>날짜</li>

            <li>예약 시간</li>

            <li>담당 선생님</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
