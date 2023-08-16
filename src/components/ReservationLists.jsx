import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ReservationLists.scss";
import renderPassType from "./PassType";

export default function ReservationLists() {
  const URL = "booking/";
  const [pass, setPass] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bookingData, setBookingData] = useState([]);
  const [bookingDataAry, setBookingDataAry] = useState([]);

  useEffect(() => {
    // fetchData();
    // fetchDataPass();
    // console.log(bookingData);
  }, [loading]);

  async function fetchDataPass() {
    console.log("Fetching data...");
    try {
      const instance = axios.create({
        baseURL: "/booking",
        withCredentials: true,
      });

      const response = await axios.get("/pass?page=1&size=4&sort=startedDay", {
        withCredentials: true,
      });

      if (!response.data) {
        throw new Error("Failed to fetch data from the server");
      }
      setPass((predata) => response.data);
      console.log("pass");
      console.log(pass);
      setLoading((preloading) => true);
    } catch (error) {
      console.error(error);
    }
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
