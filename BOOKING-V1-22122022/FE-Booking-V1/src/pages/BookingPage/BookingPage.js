import React from "react";
import "./BookingPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/navbar/Navbar";
import Theend from "../../components/RoomPage/Theend";

function BookingPage() {
    let URL = "http://127.0.0.1:3001/booking/"

    //Fake data:
    let nameHost = "Mạnh";//
    let bookingDateStart = "27/12/2022";//
    let bookingDateEnd = "29/12/2022";//
    let unitPriceBefore = 1000;//
    let day = 2;//
    let id_house = 1;

    let unitPrice = comma(unitPriceBefore);
    let totalPrice = comma(unitPriceBefore*day);
    let feeSeviceBefore = Math.ceil(unitPriceBefore*0.1);
    let feeSevice = comma(Math.ceil(unitPriceBefore*0.1));
    let totalPriceAfter = comma(unitPriceBefore*day + feeSeviceBefore);

    let data = {
        id : Math.floor(Math.random()*100),
        start: bookingDateStart,
        end: bookingDateEnd,
        status: 1,
        id_user: 1,
        id_house,
    }

    // const notify = () => toast("Đặt phòng thành công!")
    const handleOnClick = () => {

        toast.success('Đặt phòng thành công!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        // console.log("hello", data);
        fetch(`${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
            // toast.success("Thêm vào giỏ hàng thành công", {
            //     autoClose: 1000,
            //     hideProgressBar: true,
            //   });

        })
        .catch((error) => {
            console.error('Error:', error);
        })
    };


    function comma(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }


    return (
        <div className='BookingPage'>
            
            <div className="header">{<Navbar/>}</div>

            <ToastContainer/>
            <div className="confirm">
                <div className="icon"><ion-icon name="chevron-back-outline"></ion-icon></div>
                <div className="confirm-content">Xác nhận và thanh toán • Airbnb</div>
            </div>
            <div className="body">
                <div className="body-left">
                    <div className="note">
                        <div className="infor">
                            <div className="left">
                                <div className="first">Nơi này rất hiếm khi còn chỗ.</div>
                                <div className="second">Nhà/phòng cho thuê của {nameHost} thường kín phòng.</div>
                            </div>
                            <div className="right">
                                <ion-icon name="diamond-outline"></ion-icon>
                            </div>
                            
                        </div>
                    </div>
                    <div className="trip">Chuyến đi của bạn</div>
                    <div className="date">
                        <div className="infor-2">
                            <div>Ngày</div>
                            <div>{bookingDateStart} - {bookingDateEnd}</div>
                        </div>
                        <div className="edit-infor-data">Chỉnh sửa</div>
                    </div>
                    <div className="date">
                        <div className="infor-2">
                            <div>Khách</div>
                            <div>1 khách</div>
                        </div>
                        <div className="edit-infor-data">Chỉnh sửa</div>
                    </div>

                    <div className="payment">
                        <div className="trip">Thanh toán bằng</div>

                        <div className="input-value">

                            <div className="car-type">
                                <div className="card-outline">
                                    <ion-icon name="card-outline"></ion-icon>
                                    <div>Thẻ tín dụng hoặc thẻ ghi nợ</div>
                                </div>
                                <div className="caret-down-outline">
                                    <ion-icon name="chevron-down-outline"></ion-icon>
                                </div>
                            </div>

                            <div className="code">
                                <span>Mã bưu chính</span>
                            </div>
                            <div className="car-type-contry">
                                <div className="card-outline-contry">
                                    <span className="area">Quốc gia/ Khu vực</span>
                                    <span className="area-name">Việt Nam</span>
                                </div>
                                <div className="caret-down-outline">
                                    <ion-icon name="chevron-down-outline"></ion-icon>
                                </div>
                            </div>
                        </div>

                        <div className="input-code">Nhập mã giảm giá</div>
                    </div>

                    <div className="request">
                        <div className="title">Bắt buộc cho chuyến đi của bạn</div>
                        <div className="add-number">
                            <div className="add-number-left">
                                <div className="number">Số điện thoại</div>
                                <div className="title-number">Thêm và xác nhận số điện thoại của bạn để nhận thông tin cập nhật về chuyến đi.</div>
                            </div>
                            <button className="add-number-right">Thêm</button>
                        </div>
                    </div>
                    <hr className="line"></hr>
                    <div className="cancel">
                        <div className="title">Chính sách hủy</div>
                        <div className="content"><span>Hủy miễn phí trước {bookingDateStart}.</span> Bạn được hoàn tiền một phần nếu hủy trước {bookingDateStart}. <span>Tìm hiểu thêm</span></div>
                    </div>
                    <hr></hr>
                    <div className="confirm1">
                        <div className="note">
                            Bằng việc chọn nút bên dưới, tôi đồng ý với 
                            <span>Nội quy nhà của Chủ nhà, Quy chuẩn chung đối với khách, Chính sách đặt lại và hoàn tiền của Airbnb,</span>
                            và đồng ý rằng Airbnb có thể 
                            <span>tính phí vào phương thức thanh toán của tôi nếu tôi</span> 
                            phải chịu trách nhiệm về thiệt hại.
                         </div>
                         <button onClick={handleOnClick}>Xác nhận và thanh toán . Airbnb</button>

                    </div>
                </div>


                <div className="body-right">
                    <div className="card">
                        <div className="first-infor">
                            <div className="pic">
                                <img src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?aki_policy=large" alt=""/>
                            </div>
                            <div className="infor">
                                <div className="house-infor">Aura House 2bds Eco Bamboo House, Pool, River View</div>
                                <div className="house-rate">
                                    <div className="rate">
                                        <span className="icon"><ion-icon name="star-outline"></ion-icon></span>
                                        <span>4,88</span>
                                        <span> (169 đánh giá)</span>
                                    </div>
                                    <span className="dot">.</span>
                                    <div className="rate">
                                        <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                                        <span>Chủ nhà siêu cấp</span>
                                    </div>
                                    <div className="host"></div>
                                </div>
                            </div>
                        </div>
                        <div className="booking-inf">Đặt phòng của bạn được bảo vệ bởi <strong>AirCover</strong></div>
                        <div className="detail">Chi tiết đánh giá</div>
                        <div className="price">
                            <div className="unit-price">${unitPrice} x {day} ngày</div>
                            <div className="amount-price">${totalPrice}</div>
                        </div>
                        <div className="sevice-fee">
                            <div className="sevice">Phí dịch vụ</div>
                            <div className="fee">${feeSevice}</div>
                        </div>
                        <div className="total-fee">
                            <div className="feeUSD">Tổng (USD)</div>
                            <div className="totao-price">${totalPriceAfter}</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer">{<Theend/>}</div>
        </div>
    );
  }
  
  export default BookingPage;