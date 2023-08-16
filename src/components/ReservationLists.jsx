import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ReservationLists.scss";
import renderPassType from "./PassType";
import JsonPassResource from "../apis/axiosPassApi";

const pass = await JsonPassResource.fetchPassContent();

export default function ReservationLists() {
  const URL = "booking/";
  const [passes, setPass] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPass((pre) => pass);
    console.log(passes);
  }, []);

  return (
    <div className="ReservationList-wrapper">
      <button className="ReservationList-leftBtn ReservationList">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button className="ReservationList-rightBtn ReservationList">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <div className="ReservationList-container">
        {pass.map((item, index) => (
          <div key={index}>{renderPassType(item.name)}</div>
        ))}
      </div>
    </div>
  );
}
