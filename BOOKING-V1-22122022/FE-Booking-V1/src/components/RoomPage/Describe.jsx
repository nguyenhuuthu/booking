import React from "react";

function Describe(props) {
  let { data } = props;

  return (
    <>
      <div className="container">
        <div className="hotel">
          <h2 className="address">{data.nameHouse}</h2>
        </div>
        <div>
          <span>
            <i className="fa-sharp fa-solid fa-star small"></i>
            <a className="small-1">5.0 . 7 đánh giá</a>
            <i className="fa-solid fa-house-user small"></i>chủ nhà siêu cấp
            <i className="fa-solid fa-location-dot small"></i>
            <a className="small-1">{data.diaDiem}</a>
          </span>
        </div>
        <div className="container-image">
          <div className="image-big">
            <img className="image-home" src={data.pic1} alt="" />
          </div>
          <div className="image-mall">
            <div className="image-home-small">
              <div>
                <img
                  className="image-detail image-detail-1"
                  src={data.pic2}
                  alt=""
                />
              </div>
              <div>
                <img className="image-detail" src={data.pic3} alt="" />
              </div>
            </div>
            <div className="image-home-small">
              <div>
                <img
                  className="image-detail image-detail-1"
                  src={data.pic4}
                  alt=""
                />
              </div>
              <div>
                <img className="image-detail" src={data.pic5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Describe;
