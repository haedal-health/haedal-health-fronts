import React from "react";
import ReservationLists from "../components/ReservationLists";
import ReservationDetails from "../components/ReservationDetails";

import "../styles/index.scss";

export default function Login() {
  return (
    <div className="Main-wrapper">
      <ReservationLists />
      <ReservationDetails />
    </div>
  );
}
