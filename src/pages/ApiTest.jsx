import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "kakkoLogin/booking/";

// const bookingDataDummy = [
//   {
//     bookingId: 0,
//     endedTime: "2023-08-04T03:49:38.068Z",
//     passId: 0,
//     startTime: "2023-08-04T03:49:38.068Z",
//     teacher: "string",
//     userId: 0,
//   },
// ];

const apiRoot = axios.create({
  baseURL: "http:localhost:3000/",
  withCredentials: true, // Set this to true to include credentials (cookies) in the request 여기 추가함
});

export default function ApiTest() {
  const [bookingData, setBookingData] = useState([]);
  const [check, setCheck] = useState("");
  const [hello, setHello] = useState("");

  useEffect(() => {
    // fetchDataCheck();
    fetchData(); // proxy확인용
  }, []);

  /* 체크용 코드 */
  // useEffect(() => {
  //   // 실제 URL로 대체
  //   const apiUrl = "http://localhost:3000/booking/api/hello";

  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       if (response.status === 302) {
  //         // 리다이렉션 처리
  //         const newUrl = response.headers["location"];
  //         axios
  //           .get(newUrl)
  //           .then((newResponse) => {
  //             setCheck(newResponse.data);
  //           })
  //           .catch((error) => {
  //             console.error(
  //               "리다이렉트된 데이터를 가져오는 중 오류 발생:",
  //               error
  //             );
  //           });
  //       } else {
  //         setCheck(response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("데이터를 가져오는 중 오류 발생:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("booking/api/hello")
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  const fetchDataCheck = async () => {
    try {
      const response = axios.get("/booking/api/hello", {
        withCredentials: true,
      });
      if (!response.data) {
        throw new Error("Failed to fetch data from the server");
      }
      setCheck(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    console.log("hi1");
    try {
      const response = await axios.get(URL, {
        withCredentials: true,
      });
      console.log(response.data);
      if (!response.data) {
        throw new Error("Failed to fetch data from the server");
      }
      console.log(response.data);
      setBookingData(response.data);
    } catch (error) {
      console.log("error");
      console.error(error);
    }
  };

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
      <h2>Booking Data:</h2>
      <button onClick={PostData}>POST Data</button>
      {bookingData.length > 0 ? (
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
      )}
    </div>
  );
}
