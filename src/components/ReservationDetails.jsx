import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/ReservationDetails.scss";
import PassDetailContainer from "./PassDetailContainer";
import JsonBookingResource from "../apis/axiosBookingApi";

console.log("bookingCheck");
const bookingData = await JsonBookingResource.fetchBooking();
const bookingDataArray = await JsonBookingResource.fetchBookingAry();
console.log("Booking Data:", bookingData);
console.log("Booking Array:", bookingDataArray);

export default function ReservationDetails() {
  const URL = "booking/";

  useEffect(() => {
    setBookingDataAry(bookingDataArray);
  }, []);

  const [bookingData, setBookingData] = useState([]);
  const [bookingDataAry, setBookingDataAry] = useState([]);

  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState([]);
  const [passtypeText, setPasstypeText] = useState([]);

  useEffect(() => {}, [loading]);

  const text = "생성";
  const date = "2023-06-09";
  const time = "13:00~14:00";
  const trainer = "오영선";

  return (
    <div className="ReservationDetails-wrapper ">
      <div className="ReservationDetails-title align-center">
        <span className="ReservationDetails-text titlefont1">{text}</span>

        <button className="ReservationDetails-title-btn-groups"> 초기화</button>
      </div>
      {bookingDataAry !== null && (
        <div>
          <PassDetailContainer bookingData={bookingDataAry[0]} />
          <PassDetailContainer bookingData={bookingDataAry[1]} />
        </div>
      )}
    </div>
  );
}
