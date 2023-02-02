import "./RoomPage.css";
import { Link } from "react-router-dom";
import React from "react";

function RoomPage(props) {
  return (
    <>
      <h1>Đây là trang RoomPage</h1>
      <Link to="/bookingPage">Booking Page</Link>
    </>
  );
}

export default RoomPage;
