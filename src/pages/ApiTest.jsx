import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "booking/";

const apiRoot = axios.create({
  baseURL: "http:localhost:3000/",
  withCredentials: true,
});

export default function ApiTest() {
  const [bookingData, setBookingData] = useState([]);
  const [bookingDataAry, setBookingDataAry] = useState([]);
  const [pass, setPass] = useState([]);
  const [loading, setLoading] = useState(false);

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
      console.log("bookingDataAry");
      console.log(bookingDataAry);
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

  const PostData = async () => {
    try {
      const data = {
        passId: 3,
        userId: 1,
      };

      const res = await axios.post(URL, data, {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Booking Data: {bookingDataAry.bookingId}</h2>
      <div> 백엔드에서 가져온 데이터입니다 pass : {pass.content.id}</div>
      {bookingDataAry.map((bookingData, index) => (
        <li key={index}>
          <p>Booking ID: {bookingData.bookingId}</p>
          <p>Teacher: {bookingData.teacher}</p>
          <p>Start Time: {bookingData.startTime}</p>
          <p>End Time: {bookingData.endedTime}</p>
        </li>
      ))}

      <button onClick={PostData}>POST Data</button>
      {/* /{bookingData.bookingId > 0 ? (
        <ul>
          <div> 백엔드에서 가져온 데이터입니다 hello : {hello}</div>
          <div> 백엔드에서 가져온 데이터입니다 check : {check}</div>
          {bookingData.map((bookingData, index) => (
            <li key={index}>
              <p>Booking ID: {bookingData.bookingId}</p>
              <p>Teacher: {bookingData.teacher}</p>
              <p>Start Time: {bookingData.startTime}</p>
              <p>End Time: {bookingData.endedTime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
}
