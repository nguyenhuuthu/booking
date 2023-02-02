import React, { Component } from "react";
// import Describe from "../components/Describe";
import Describe from "./Describe";
import Master from "./Master";
import Introduce from "./Introduce";
import Evaluate from "./Evaluate";
import Map from "./Map";
import Datetime from "./Datetime";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Theend from "./Theend";
// import Map2 from "../components/Map2";
import "./RoomPage.css";

function Total() {
  let params = useParams();
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("**/**/****");
  const [endDate, setEndDate] = useState("**/**/****");
  useEffect(() => {
    // let link = window.location.href;
    // let newLink = link.replace("http://localhost:8000/hotel/", "");
    // console.log("newLink", newLink);
    const fetchData = async () => {
      const res = await fetch(`http://127.0.0.1:3001/user/detail/${params.id}`);
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fetchData().catch(console.error);
  }, []);
  if (data.length === 0) {
    return <div>loading...</div>;
  }
  const handleDateChange = (e) => {
    console.log(e);
    let datePicker1 = e[0].$d;
    let datePicker2 = e[1].$d;
    let firstFullDayTime = datePicker1.toLocaleString("en-GB", {
      timeZone: "UTC",
    });
    let secondFullDayTime = datePicker2.toLocaleString("en-GB", {
      timeZone: "UTC",
    });
    let dateTimeSplit1 = firstFullDayTime.split(",");
    let dateTimeSplit2 = secondFullDayTime.split(",");
    let startDate = dateTimeSplit1[0];
    let endDate = dateTimeSplit2[0];
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <>
      <div className="total">
        <Describe data={data} />
        <Introduce data={data} startDate={startDate} endDate={endDate} />
        <Datetime handleDateChange={handleDateChange} />
        <Evaluate />
        {/* <Map /> */}
        {/* <Map2 /> */}
        <Master data={data} />
      </div>
      <Theend />
    </>
  );
}

export default Total;
