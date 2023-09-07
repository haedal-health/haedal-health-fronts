import React, { useState, useCallback, useEffect } from "react";
import "../styles/ReservationLists.scss";
import ReservationDetails from "./ReservationDetails";
import JsonPassResource from "../apis/axiosPassApi";
import axios from "axios";

export default function PassType(props) {
  const [clicked, setClicked] = useState();
  const handleClick = () => {
    setClicked(!clicked);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `/pass/${props.item.passId}`;
    // console.log(apiUrl);
    axios
      .get(apiUrl)
      .then((response) => {
        // console.log("트레이너명" + response.data.name);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // 리팩토링 예정
  // const passName = JsonPassResource.fetchPassById(props.item.passId);
  // console.log(props.item.passId + "passName" + passName);

  return (
    <div>
      <div className="ReservationList-item align-center ">
        <span className="ReservationList-item-text font1">{data.name}</span>
        <button
          className={`ReservationList-item-btn-groups ${
            clicked ? "active" : ""
          }`}
          onClick={handleClick}
        >
          <span className="ReservationList-item-btn-text font2">예약 조회</span>
        </button>
      </div>

      {clicked && <ReservationDetails passType={data} />}
    </div>
  );
}
