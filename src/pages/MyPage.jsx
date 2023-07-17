import React from "react";
import ReservationLists from "../components/ReservationLists";
import ReservationDetails from "../components/ReservationDetails";
import Footer from "../components/Footer";

export default function MyPage() {
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
