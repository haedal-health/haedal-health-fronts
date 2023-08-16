import React, { useState } from "react";
import "../styles/ReservationLists.scss";
import ReservationDetails from "./ReservationDetails";

export default function PassType(passType) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div className="ReservationList-item align-center ">
        <span className="ReservationList-item-text font1">{passType}</span>
        <button
          className={`ReservationList-item-btn-groups ${
            clicked ? "active" : ""
          }`}
          onClick={handleClick}
        >
          <span className="ReservationList-item-btn-text font2">예약 조회</span>
        </button>
      </div>

      {clicked && <ReservationDetails />}
    </div>
  );
}
