import React from "react";
import ReservationLists from "../components/ReservationLists";
import ReservationDetails from "../components/ReservationDetails";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

import LoginComponents from "../components/LoginComponent";

import "../styles/index.scss";

export default function Login() {
  return (
    <div>
      <div className="Main-wrapper">
        <Profile />
        {/* <ReservationLists /> */}
        <LoginComponents />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
