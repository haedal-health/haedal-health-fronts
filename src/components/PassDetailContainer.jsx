import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/ReservationDetails.scss";
import { useEffect } from "react";

export default function PassDetailContainer({ bookingData, pass }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, onChange] = useState(new Date());

  const passtypeText = bookingData ? "예약 중 - 필라테스 이용권1" : "예약 등록";
  const text = bookingData ? "삭제" : "등록";

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    console.log("들어온 bookingData");
    console.log(bookingData);
  }, [bookingData]);

  function formatDateTimeRange(start, end) {
    const [startYear, startMonth, startDay, startHour, startMinute] = start;
    const [endYear, endMonth, endDay, endHour, endMinute] = end;

    const formattedStartTime = `${String(startHour).padStart(2, "0")}:${String(
      startMinute
    ).padStart(2, "0")}`;
    const formattedEndTime = `${String(endHour).padStart(2, "0")}:${String(
      endMinute
    ).padStart(2, "0")}`;

    return `${formattedStartTime} ~ ${formattedEndTime}`;
  }

  function formatDate(start) {
    return `${start[0]}.${String(start[1]).padStart(2, "0")}.${String(
      start[2]
    ).padStart(2, "0")}`;
  }

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
              <span>
                {bookingData && bookingData.startTime
                  ? formatDate(bookingData.startTime)
                  : "달력으로 입력 필요"}
              </span>
            </li>
            {
              <li>
                <span className="item-title">예약 시간</span>
                <span>
                  {bookingData && bookingData.startTime && bookingData.endedTime
                    ? formatDateTimeRange(
                        bookingData.startTime,
                        bookingData.endedTime
                      )
                    : "입력 필요"}
                </span>
              </li>
            }
            {bookingData && bookingData.teacher && (
              <li>
                <span className="item-title">담당 선생님</span>
                <span>{bookingData.teacher} 트레이너</span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
