import React from "react";
import ReservationLists from "../components/ReservationLists";
import ReservationDetails from "../components/ReservationDetails";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

export default function MyPage() {
  return (
    <div>
      <div className="Main-wrapper">
        <Profile />
        <ReservationLists />
        <ReservationDetails />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
