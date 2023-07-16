import React, { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ReservationLists.scss";
import renderPassType from "./PassType";

export default function ReservationLists() {
  const passTypeName1 = "헬스 이용권 1";
  const passTypeName2 = "헬스 이용권 2";
  const passTypeName3 = "헬스 이용권 3";
  const passTypeName4 = "헬스 이용권 4";
  const passTypeName5 = "헬스 이용권 5";

  return (
    <div className="ReservationList-wrapper">
      <button className="ReservationList-leftBtn ReservationList">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button className="ReservationList-rightBtn ReservationList">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <div className="ReservationList-container">
        {renderPassType(passTypeName1)}
        {renderPassType(passTypeName2)}
        {renderPassType(passTypeName3)}
        {renderPassType(passTypeName4)}
        {renderPassType(passTypeName5)}
      </div>
    </div>
  );
}
