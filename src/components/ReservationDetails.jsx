import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/ReservationDetails.scss";
import PassDetailContainer from "./PassDetailContainer";

export default function ReservationDetails() {
  const URL = "booking/";

  const [bookingData, setBookingData] = useState([]);
  const [bookingDataAry, setBookingDataAry] = useState([]);

  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState([]);

  async function fetchDataPass() {
    console.log("Fetching data...");
    try {
      const response = await axios.get("/pass?page=1&size=4&sort=startedDay", {
        withCredentials: true,
      });

      if (!response.data) {
        throw new Error("Failed to fetch data from the server");
      }
      setPass((predata) => response.data);
      console.log("pass check");
      console.log(pass);
      setLoading((preloading) => true);
    } catch (error) {
      console.error(error);
    } ///
  }

  async function fetchData() {
    console.log("Fetching data...");
    try {
      const response = await axios.get(URL, {
        withCredentials: true,
      });

      if (!response.data) {
        throw new Error("Failed to fetch data from the server");
      }
      const data = response.data.content;
      setBookingData((predata) => response.data);
      setBookingDataAry((predata) => response.data.content);
      // console.log("bookingDataAry check");
      // console.log(bookingDataAry);
      setLoading((preloading) => true);
    } catch (error) {
      console.error(error);
    } ///
  }

  useEffect(() => {
    fetchData();
    // fetchDataCheck();
    fetchDataPass();
    console.log(bookingData);
  }, [loading]);

  const text = "생성";
  const passtypeText = "예약 등록 - 필라테스 이용권1";
  const date = "2023-06-09";
  const time = "13:00~14:00";
  const trainer = "오영선";

  return (
    <div className="ReservationDetails-wrapper ">
      <div className="ReservationDetails-title align-center">
        <span className="ReservationDetails-text titlefont1">
          {passtypeText}
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
