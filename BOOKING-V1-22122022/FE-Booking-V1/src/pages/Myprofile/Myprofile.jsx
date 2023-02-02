import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useCookies } from "react-cookie";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import CarouselAlbum from "../HomePage/CarouselAlbum";

export default function Myprofile() {
  const [per, setPer] = useState([]);
  const [post, setPost] = useState([]);
  let params = useParams();

  const [cookies, setCookie] = useCookies(["Cookie"]);
  let id = cookies.userID;

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user/personal/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPer(data[0][0]);
        setPost(data[1]);
      });
  }, {});
  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   let dataFolow = {
  //     id_userfollow: params.id,
  //     id_userfollowed: id,
  //   };
  //   console.log(dataFolow);
  //   fetch(`http://127.0.0.1:3001/user/newFollow`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(dataFolow),
  //   })
  //     .then((res) => res.json)
  //     .then((data) => {
  //       console.log("dsfsssfs", data[0]);
  //     });
  // };
  return (
    <>
      <Navbar />
      <section style={{ background: "white" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={per.avatar}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px", height: "150px" }}
                    fluid
                  />
                  <div
                    className="text-muted mb-1"
                    style={{ color: "red", fontSize: "30px" }}
                  >
                    {per.fistName}
                  </div>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div style={{ color: "black" }} className="">
                    <span className="text-primary font-italic me-1">
                      <ion-icon
                        style={{ color: "red" }}
                        name="heart-sharp"
                      ></ion-icon>
                    </span>
                    1.000.000 flows
                  </div>
                  <div style={{ color: "black" }} className="">
                    <span className="text-primary font-italic me-1">
                      <ion-icon
                        style={{ color: "" }}
                        name="star-half-outline"
                      ></ion-icon>
                    </span>
                    10000 Đánh Giá
                  </div>

                  <div style={{ color: "black" }} className="mb-4">
                    <span className="text-primary font-italic me-1">
                      <ion-icon name="shield-checkmark"></ion-icon>
                    </span>
                    Đã xác minh danh tính
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    {/* <MDBBtn>Follow</MDBBtn>
                    <MDBBtn outline className="ms-1">
                      Message
                    </MDBBtn> */}
                  </div>
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem
                      style={{ marginTop: "30px" }}
                      className="d-flex justify-content-between align-items-center p-3"
                    >
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>https://mdbootstrap.com</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="github fa-lg"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <MDBCardText>@mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="facebook fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="12">
                      <MDBCardText>
                        {" "}
                        <div style={{ fontSize: "40px", color: "black" }}>
                          My profile!
                          {/* {per.fistName}. */}
                        </div>
                        <div>Bắt đầu tham gia vào 2021</div>
                        <div style={{ fontSize: "20px", color: "black" }}>
                          Giới thiệu
                        </div>
                      </MDBCardText>
                      <MDBCardText></MDBCardText>
                      <MDBCardText style={{ color: "black" }}>
                        Chúng tôi được chào đón và hỗ trợ bởi các nhân viên rất
                        thân thiện và thoải mái tại xe cắm trại. Chỗ ở rất thanh
                        bình, yên bình và riêng tư. Quang cảnh thật ngoạn mục.
                        Xe cắm trại rất sạch sẽ và cung cấp các tiện nghi thiết
                        yếu, về cơ bản chúng tôi chỉ mang theo thức ăn. Phòng
                        tắm không tì vết! Nhìn chung, chồng tôi và tôi đã có
                        thời gian lưu trú rất tuyệt vời. Một cho những cuốn sách
                        và là một kỷ niệm cốt lõi cho mối quan hệ của chúng ta.
                        Cảm ơn bạn Xe cắm trại và Cabin
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {per.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Bay Area, San Francisco, CA
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="12">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText
                        className="mb-4"
                        style={{ fontSize: "30px" }}
                      >
                        <span
                          style={{ fontSize: "30px" }}
                          className="text-primary font-italic me-1"
                        >
                          Nhà/phòng cho thuê của tôi
                        </span>{" "}
                        {/* {per.fistName} */}
                      </MDBCardText>
                      <CarouselAlbum post={post} />
                    </MDBCardBody>
                    <MDBCardBody>
                      <MDBCardText style={{ color: "black" }} className="mb-4">
                        <span className="text-primary font-italic me-1">
                          <ion-icon name="star-half-outline"></ion-icon>
                        </span>
                        10000 Đánh Giá
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Web Design
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={80}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Website Markup
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={72}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        One Page
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={89}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Mobile Template
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={55}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Backend API
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
