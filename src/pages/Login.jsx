import React from "react";
import ReservationLists from "../components/ReservationLists";
import ReservationDetails from "../components/ReservationDetails";
import Footer from "../components/Footer";

import "../styles/index.scss";

export default function Login() {
  return (
    <div>
      <div className="Main-wrapper">
        <ReservationLists />
        <ReservationDetails />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
