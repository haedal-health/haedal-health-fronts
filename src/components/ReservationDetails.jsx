import React from "react";

import "../styles/ReservationDetails.scss";
import PassDetailContainer from "./PassDetailContainer";

export default function ReservationDetails() {
  const text = "생성";
  const passtypeText = "예약 등록 - 필라테스 이용권1";
  const date = "2023-06-09";
  const time = "13:00~14:00";
  const trainer = "오영선";

  return (
    <div className="ReservationDetails-wrapper ">
      <div className="ReservationDetails-title align-center">
        <span className="ReservationDetails-text titlefont1">
          필라테스 이용권1 | 3/5 | 23.01.01 ~23.05.04
        </span>

        <button className="ReservationDetails-title-btn-groups"> 초기화</button>
      </div>

      {/* 모두 입력하면 자동으로 추가되게 만들어야함 */}
      {PassDetailContainer(passtypeText, text, date, time, trainer)}
      {PassDetailContainer(passtypeText, text, date, time, trainer)}
      {PassDetailContainer(passtypeText, text, date, time, trainer)}
    </div>
  );
}
