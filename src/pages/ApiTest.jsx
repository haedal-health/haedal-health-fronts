import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../components/cookieUtils"; // Import the getCookie function

// const response = await axios.post(
//   `${process.env.REACT_APP_BACKEND_ADDRESS}/access/login`,
//   data,
//   { withCredentials: true },
// );

const bookingDataDummy = [
  {
    bookingId: 0,
    endedTime: "2023-08-04T03:49:38.068Z",
    passId: 0,
    startTime: "2023-08-04T03:49:38.068Z",
    teacher: "string",
    userId: 0,
  },
];

const apiRoot = axios.create({
  baseURL: "http://localhost:8080/",
});
// const app = express();

export default function ApiTest() {
  // app.use(cors());
  const [hello, setHello] = useState("");
  const [bookingData, setBookingData] = useState([]); // Define bookingData state here

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiRoot.get("booking/api/hello", {
        withCredentials: true,
      });
      if (!response.data) {
        throw new Error("Failed to fetch data from the server");
      }
      console.log(response.data);
      setBookingData(response.data);
      // console.log(bookingData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Booking Data:</h2>
      {bookingData.length > 0 ? (
        <ul>
          <h1>{bookingData}</h1>
          {bookingDataDummy.map((booking, index) => (
            <li key={index}>
              <p>Booking ID: {booking.bookingId}</p>
              <p>Teacher: {booking.teacher}</p>
              <p>Start Time: {booking.startTime}</p>
              <p>End Time: {booking.endedTime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// export const getCompanyApi = async (companyId) => {
//   try {
//     const { data } = await apiRoot.get(`/${companyId}`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
