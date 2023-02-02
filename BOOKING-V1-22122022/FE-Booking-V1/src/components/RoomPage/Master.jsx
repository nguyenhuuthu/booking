import React from "react";

function Master(props) {
  let { data } = props;
  console.log("props", props.data);

  return (
    <>
      <div className="master-master">
        <div className="master-name">
          <div className="master-name-1">
            <img className="master-img" src={data.avatar} alt="" />
          </div>
          <div className="master-name-2">
            <h2>
              {data.fistName}
              {data.lastName}
            </h2>
            <p>Đã tham gia vào tháng 2 năm 2016</p>
          </div>
        </div>
        <div className="master-content">
          <div>
            <i class="fa-sharp fa-solid fa-star small"></i>401 đánh giá
            <i class="fa-sharp fa-solid fa-square-check"></i> Đã xác minh danh
            tính
          </div>
          <div className="master-feedback">
            <p className="master-feedback">Tỉ lệ phản hồi: 50%</p>
            <p className="master-feedback">
              Thời gian phản hồi: trong vòng một ngày
            </p>
          </div>
          <div className="contact">
            <h4>Liên hệ với chủ nhà</h4>
          </div>
          <div className="guard">
            <i class="fa-solid fa-person-military-pointing guard-guard"></i>
            <p>
              Để bảo vệ khoản thanh toán của bạn, tuyệt đối không chuyển tiền
              hoặc liên lạc bên ngoài trang web hoặc ứng dụng Airbnb.
            </p>
          </div>
        </div>
        <div className="necessary">
          <div>
            <h2>Những Điều Cần Biết</h2>
          </div>
          <div className="necessary-2">
            <div className="necessary-2-1">
              <h4>Nội quy nhà</h4>
              <p>Nhận phòng sau 15:00</p>
              <p>Trả phòng trước 11:00</p>
              <p>Tối đa 10 khách</p>
              <p className="extend">Hiện thị thêm</p>
            </div>
            <div className="necessary-2-1">
              <h4>An toàn và chỗ ở</h4>
              <p>
                Chưa có thông tin về việc có máy phát hiện <br></br>khí CO
              </p>
              <p>Chưa có thông tin về việc có máy báo khói</p>
              <p>Phải leo cầu thang</p>
              <p className="extend">Hiện thị thêm</p>
            </div>
            <div className="necessary-2-1">
              <h4>Chính sách hủy</h4>
              <p>Hủy miễn phí trong 48 giờ.</p>
              <p>
                Hãy đọc toàn bộ chính sách hủy của <br></br>Chủ nhà/Người tổ
                chức được áp dụng ngay cả khi bạn <br></br>hủy vì ốm bệnh hoặc
                gián đoạn do dịch COVID-19.
              </p>
              <p className="extend">Hiện thị thêm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Master;
