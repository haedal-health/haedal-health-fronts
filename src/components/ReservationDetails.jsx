import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/ReservationDetails.scss";
import PassDetailContainer from "./PassDetailContainer";
import JsonBookingResource from "../apis/axiosBookingApi";
import JsonPassResource from "../apis/axiosBookingApi";

console.log("bookingCheck");
const bookingData = await JsonBookingResource.fetchBooking();
const bookingDataArray = await JsonBookingResource.fetchBookingAry();
const bookingPassAry = await JsonBookingResource.fetchBookingPassAry(1);
const User = await JsonBookingResource.fetchBookingUserAry(1);
console.log("Booking Data:", bookingData);
console.log("Booking Array:", bookingDataArray);
console.log("Booking PassArray:", bookingPassAry);
console.log("Booking User:", User);

export default function ReservationDetails() {
  useEffect(() => {
    setBookingDataAry(bookingDataArray);
    setBookingPassAry(bookingPassAry);
    setBookingPassAry(User);
  }, []);

  const [bookingData, setBookingData] = useState([]);
  const [bookingDataAry, setBookingDataAry] = useState([]);
  const [bookingPassAry, setBookingPassAry] = useState([]);
  const [User, setUser] = useState([]);

  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState([]);
  const [passtypeText, setPasstypeText] = useState([]);

  // useEffect(() => {}, [loading]);

  const text = "생성";

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
          <PassDetailContainer bookingData={bookingDataAry[2]} />
        </div>
      )}
    </div>
  );
}
