import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ReservationLists.scss";
import PassType from "./PassType";
import JsonBookingResource from "../apis/axiosBookingApi";

//Id로 가져오도록 바꿈
const pass = await JsonBookingResource.fetchBookingUserAry(1);

export default function ReservationLists() {
  const [passes, setPass] = useState([]);

  useEffect(() => {
    setPass((pre) => pass);
    console.log("passes 업데이트 완료후 종료됩니다");
    console.log(passes);
  }, [passes]);

  return (
    <div className="ReservationList-wrapper">
      <button className="ReservationList-leftBtn ReservationList">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button className="ReservationList-rightBtn ReservationList">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="ReservationList-container">
        {/* <PassType item={passes} /> */}
        {passes.map((item, index) => (
          <div key={index}>{<PassType item={item} />}</div>
        ))}
      </div>
    </div>
  );
}
