import React from "react";
import Datetime from "./Datetime";

function Introduce(props) {
  let { data, startDate, endDate } = props;

  return (
    <>
      <div className="container-2">
        <div className="dear">
          <div className="dear-1">
            <div>
              <h2>
                Toàn bộ nhà nghỉ thôn dã. {data.fistName} {data.lastName}
              </h2>
              <p>
                {data.phongKhach} khách ·{data.phongNgu} phòng ngủ ·
                {data.giuong} giường ·{data.phongTam} phòng tắm
              </p>
            </div>
            <div>
              <img className="dear-1-img" src={data.avatar} alt="" />
            </div>
          </div>
          <div className="dear-2">
            <div className="dear-2-1">
              <i className="fa-solid fa-handshake fa-icon"></i>
              <div>
                <h3>Không gian riêng để làm việc</h3>
                <p>Một phòng riêng có Wi-fi, phù hợp để làm việc.</p>
              </div>
            </div>
            <div className="dear-2-1">
              <i className="fa-solid fa-medal fa-icon"></i>
              <div>
                <h3>
                  {data.fistName}
                  {data.lastName} là Chủ nhà siêu cấp
                </h3>
                <p>
                  Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh
                  giá cao và là những người cam kết mang lại quãng thời gian ở
                  tuyệt vời cho khách.
                </p>
              </div>
            </div>
            <div className="dear-2-1">
              <i className="fa-solid fa-key fa-icon"></i>
              <div>
                <h3>Trải nghiệm nhận phòng tuyệt vời</h3>
                <p>
                  95% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.
                </p>
              </div>
            </div>
          </div>
          <div className="dear-3">
            <div className="dear-3-1">
              <h2 className="dear-3-1-air">AIR</h2>
              <h2>COVER</h2>
            </div>
            <div className="dear-3-2">
              <p>
                Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà
                hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn
                đề khác như sự cố trong quá trình nhận phòng.
              </p>
            </div>
            <div className="dear-3-3">
              <h4>Tìm hiểu thêm</h4>
            </div>
          </div>
          <div className="dear-4">
            <i className="fa-solid fa-language"></i> Một số thông tin được hiển
            thị ở ngôn ngữ gốc. <b className="dich">Dịch</b>
            <p>Kailash view cottage bhimtal</p>
          </div>
          <div className="dear-5">
            <div>
              <h2>Nơi này có những gì cho bạn</h2>
            </div>
            <div className="dear-5-2">
              <div>
                <i className="fa-solid fa-synagogue fa-icon-2"></i> Hướng nhìn
                ra núi <br />
                <i class="fa-solid fa-utensils fa-icon-2"></i> Bếp <br />
                <i className="fa-solid fa-handshake fa-icon-2"></i> Không gian
                riêng để làm việc : {data.phongLamViec === 1 ? "Có" : "Không"}
                <br />
                <i className="fa-regular fa-tv fa-solid fa-icon-2"></i> HDTV với
                truyền hình cáp : {data.tivi === 1 ? "Có" : "Không"}
                <br />
                <i className="fa-solid fa-mattress-pillow fa-icon-2"></i> Máy
                phát hiện khí CO
                <br />
              </div>
              <div>
                <i className="fa-solid fa-water fa-icon-2"></i> Lối ra hồ
                <br />
                <i className="fa-solid fa-wifi fa-icon-2"></i> Wifi
                <br />
                <i className="fa-solid fa-car fa-icon-2"></i> Chỗ đỗ xe miễn phí
                tại nơi ở
                <br />
                <i className="fa-solid fa-video fa-icon-2"></i> Camera an ninh
                trong nhà
                <br />
                <i className="fa-solid fa-volcano fa-icon-2"></i> Máy báo khói
              </div>
            </div>
            <div className="dear-5-3">
              <h4>Hiện thị tất cả các tiện nghi</h4>
            </div>
          </div>
        </div>
        <div className="pay">
          <div className="pay-home">
            <div className="pay-home-1">
              <div className="pay-home-1-1">
                <div>
                  <span className="price">$1.507</span>
                  <span>đêm</span>
                </div>
                <div>
                  <i className="fa-sharp fa-solid fa-star small"></i> 5,0 ·13
                  đánh giá
                </div>
              </div>
              <div className="pay-home-1-2">
                <div className="pay-home-1-2-1">
                  <div className="pay-home-time pay-left">
                    <p>Nhận phòng</p>
                    <p>{startDate}</p>
                  </div>
                  <div className="pay-home-time">
                    <p>Trả phòng</p>
                    <p>{endDate}</p>
                  </div>
                </div>
                <div className="pay-home-guest">
                  <p>Bao nhiêu khách cũng được</p>
                </div>
              </div>
              <div className="pay-home-1-3">
                <h3>Đặt phòng</h3>
              </div>
            </div>
            <div className="pay-home-2">
              <div className="pay-home-2-1">
                <p className="category">$60 x 6 đêm</p>
                <p>$360</p>
              </div>
              <div className="pay-home-2-1">
                <p className="category">Phí vệ sinh</p>
                <p>$5</p>
              </div>
              <div className="pay-home-2-1">
                <p className="category">Phí dịch vụ</p>
                <p>$52</p>
              </div>
            </div>
            <div className="pay-home-3">
              <h4>Tổng trước thuế</h4>
              <h4>$417</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduce;
