import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselAlbum.css";
import { Link } from "react-router-dom";

export default class CarouselAlbum extends Component {
  state = {
    display: true,
    width: 600,
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    let handleClick = (e) => {
      console.log(e.target);
      //  setId(e.target.id.split("_")[1])
    };
    let post = this.props.post;
    return (
      <div>
        <div
          style={{
            maxWidth: "1000px",
          }}
        >
          
          <Slider {...settings}>
            {post.map((e) => (
              <Link to={`/detailpage/${e.id}`}>
                <h3 style={{ width: "95%" }}>
                  <img
                    onClick={handleClick}
                    id={e.id}
                    style={{
                      borderRadius: "10px",
                      width: "370px",
                      height: "250px",
                    }}
                    src={e.pic1}
                    alt=""
                  />
                </h3>
                <h3 style={{ fontSize: "15px" }}>
                  <ion-icon
                    style={{ color: "red" }}
                    name="star-outline"
                  ></ion-icon>{" "}
                  5 <span>(100)</span>
                </h3>
                <h3 style={{ fontSize: "20px" }}>{e.nameHouse}</h3>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
