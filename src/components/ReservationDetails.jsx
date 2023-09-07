import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/ReservationDetails.scss";
import PassDetailContainer from "./PassDetailContainer";
import JsonBookingResource from "../apis/axiosBookingApi";
import JsonPassResource from "../apis/axiosBookingApi";
import { genComponentStyleHook } from "antd/es/theme/internal";

console.log("bookingCheck");
const bookingData = await JsonBookingResource.fetchBooking();
// const bookingDataArray = await JsonBookingResource.fetchGetBookingtoUserAry(
//   props.passType.id,
//   1
// );
const bookingPassAry = await JsonBookingResource.fetchBookingPassAry(1);
const User = await JsonBookingResource.fetchBookingUserAry(1);

export default function ReservationDetails(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `/booking?pass=${props.passType.id}&&user=${1}`;
    // console.log("apiUrl" + apiUrl);
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("트레이너명" + response.data.content);
        const bookingDataArray = response.data.content;
        setData(response.data.content);
        setBookingDataAry(bookingDataArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setBookingPassAry(bookingPassAry);
    setBookingPassAry(User);
  }, []);

  // console.log("props" + props.passType.id);
  const [bookingData, setBookingData] = useState([]);
  const [bookingDataAry, setBookingDataAry] = useState([]);
  const [bookingPassAry, setBookingPassAry] = useState([]);
  const [User, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState([]);
  const [passtypeText, setPasstypeText] = useState([]);

  // useEffect(() => {}, [loading]);
  const text = "생성";
  // 종료된 개수를 빼서 남은 예약권을 계산한다.

  return (
    <div className="ReservationDetails-wrapper ">
      <div className="ReservationDetails-title align-center">
        <span className="ReservationDetails-text titlefont1">
          {props.passType.name} | 0/{props.passType.count} |{" "}
          {props.passType.startedDay[0]}.{props.passType.startedDay[1]}.
          {props.passType.startedDay[2]} ~ {props.passType.endedDay[0]}.
          {props.passType.endedDay[1]}.{props.passType.endedDay[2]}
        </span>

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
