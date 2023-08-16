import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "booking/";

const JsonBookingResource = (() => {
  // const [bookingData, setBookingData] = useState([]);
  // const [bookingDataAry, setBookingDataAry] = useState([]);
  // const [loading, setLoading] = useState(false);

  const instance = axios.create({
    baseURL: "/booking",
    withCredentials: true,
  });

  // useEffect(() => {
  //   fetchBooking();
  // }, []);

  const fetchBooking = async () => {
    return (await instance.get("/booking")).data;
    // try {
    //   // setBookingData(bookingData);
    //   // setBookingDataAry(bookingData.content);

    //   console.log(bookingData);
    //   // console.log(bookingDataAry);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const fetchBookingAry = async () => {
    return (await instance.get("/booking")).data.content;
  };

  return {
    booking: fetchBooking,
    bookingAry: fetchBookingAry,
  };
})();

export default JsonBookingResource;
