import React from "react";
import ReservationLists from "../components/ReservationLists";
import ReservationDetails from "../components/ReservationDetails";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Admin_createPass from "../components/Admin_createPass";

export default function MyPage() {
  return (
    <div>
      <div className="Main-wrapper">
        <Profile />
        <ReservationLists />
        <Admin_createPass />
        {/* <ReservationDetails /> */}
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
