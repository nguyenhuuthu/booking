import React from "react";
import GoogleMapReact from "google-map-react";
import { useState, useEffect } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 21.0244246,
      lng: 105.7938072,
    },
    zoom: 11,
  };
  const [showPopup, togglePopup] = React.useState(false);
  const [address, setaddress] = useState("");
  const addressdata = [
    { id: 1, address: "207 Bui xuong trach, thanh xuan , Ha noi" },
  ];
  return (
    <>
      <div className="map">
        <div className="map-1">
          <h3>Nơi bạn sẽ đến</h3>
        </div>
        <div style={{ height: "60vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyC92fWfjVRM1Y8i1afMmPbFDzEEMMYY3_E",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <div className="map-3">
          <h3>TIME CITY, Vĩnh Tuy, Hai Bà Trưng, Hà Nội, Việt Nam</h3>
        </div>
      </div>
    </>
  );
}
