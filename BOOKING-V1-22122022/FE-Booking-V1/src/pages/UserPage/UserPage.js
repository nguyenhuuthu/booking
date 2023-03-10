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
import Myprofile from "../Myprofile/Myprofile";

export default function UserPage() {
  const [per, setPer] = useState([]);
  const [post, setPost] = useState([]);
  // const [follow, setFollow] = useState("Follow");
  // const [trangthai, setTrangthai] = useState(false);
  const [totalfollow, setTotalfollow] = useState(1);
  const [action, setAction] = useState("Follow");
  const params = useParams();
  const [cookies, setCookie] = useCookies(["Cookie"]);
  let id = cookies.userID;

  // const handleFollow = () => {
  //   if (follow === "Follow") {
  //     setFollow("UnFollow");
  //     // setTotal(total + 1);
  //   } else {
  //     setFollow("Follow");
  //     // setTotal(total - 1);
  //   }
  // };
  const handleSubmit = (e) => {
    // e.preventDefault();
    let dataFolow = {
      id_userfollow: params.id,
      id_userfollowed: id,
    };
    console.log(dataFolow);
    fetch(`http://127.0.0.1:3001/user/newFollow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataFolow),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log("dsfsssfs", data[0]);
      });
  };
  useEffect(() => {
    // preventDefault();
    // setTrangthai(true);
    fetch(`http://127.0.0.1:3001/user/personal/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPer(data[0][0]);
        setPost(data[1]);
        setTotalfollow(data[2].length);
        // setTrangthai(false);
        for (let i = 0; i < data[2].length; i++) {
          if (
            data[2][i].id_userfollow == params.id &&
            data[2][i].id_userfollowed == id
          ) {
            setAction(data[2][i].action);
          } else if (
            data[2][i].id_userfollow != params.id &&
            data[2][i].id_userfollowed != id
          ) {
            setAction("Follow");
          }
          // setTrangthai(true);
        }
      });
  }, []);

  return (
    <>
      {id === params.id ? (
        <Myprofile />
      ) : (
        <>
          <Navbar />
          <section style={{ background: "white" }}>
            <MDBContainer className="py-5">
              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody
                      // onSubmit={handleSubmit}
                      className="text-center"
                    >
                      <MDBCardImage
                        src={per.avatar}
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: "150px", height: "150px" }}
                        fluid
                      />

                      <form onSubmit={handleSubmit}>
                        <div
                          className="text-muted mb-1"
                          style={{ color: "red", fontSize: "30px" }}
                        >
                          {per.fistName}
                        </div>
                        <p className="text-muted mb-4">
                          Bay Area, San Francisco, CA
                        </p>
                        <div style={{ color: "black" }} className="">
                          <span className="text-primary font-italic me-1">
                            <ion-icon
                              style={{ color: "red" }}
                              name="heart-sharp"
                            ></ion-icon>
                          </span>
                          {totalfollow} flows
                        </div>
                        <div style={{ color: "black" }} className="">
                          <span className="text-primary font-italic me-1">
                            <ion-icon
                              style={{ color: "" }}
                              name="star-half-outline"
                            ></ion-icon>
                          </span>
                          10000 ????nh Gi??
                        </div>
                        <div style={{ color: "black" }} className="mb-4">
                          <span className="text-primary font-italic me-1">
                            <ion-icon name="shield-checkmark"></ion-icon>
                          </span>
                          ???? x??c minh danh t??nh
                        </div>
                        <div className="d-flex justify-content-center mb-2">
                          <MDBBtn>{action}</MDBBtn>
                        </div>
                      </form>
                      <MDBBtn outline className="ms-1">
                        Message
                      </MDBBtn>

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
                              Xin ch??o! T??i l?? {per.fistName}.
                            </div>
                            <div>B???t ?????u tham gia v??o 2021</div>
                            <div style={{ fontSize: "20px", color: "black" }}>
                              Gi???i thi???u
                            </div>
                          </MDBCardText>
                          <MDBCardText></MDBCardText>
                          <MDBCardText style={{ color: "black" }}>
                            Ch??ng t??i ???????c ch??o ????n v?? h??? tr??? b???i c??c nh??n vi??n
                            r???t th??n thi???n v?? tho???i m??i t???i xe c???m tr???i. Ch??? ???
                            r???t thanh b??nh, y??n b??nh v?? ri??ng t??. Quang c???nh
                            th???t ngo???n m???c. Xe c???m tr???i r???t s???ch s??? v?? cung c???p
                            c??c ti???n nghi thi???t y???u, v??? c?? b???n ch??ng t??i ch???
                            mang theo th???c ??n. Ph??ng t???m kh??ng t?? v???t! Nh??n
                            chung, ch???ng t??i v?? t??i ???? c?? th???i gian l??u tr?? r???t
                            tuy???t v???i. M???t cho nh???ng cu???n s??ch v?? l?? m???t k??? ni???m
                            c???t l??i cho m???i quan h??? c???a ch??ng ta. C???m ??n b???n Xe
                            c???m tr???i v?? Cabin
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
                              Nh??/ph??ng cho thu?? c???a
                            </span>{" "}
                            {per.fistName}
                          </MDBCardText>
                          <CarouselAlbum post={post} />
                        </MDBCardBody>
                        <MDBCardBody>
                          <MDBCardText
                            style={{ color: "black" }}
                            className="mb-4"
                          >
                            <span className="text-primary font-italic me-1">
                              <ion-icon name="star-half-outline"></ion-icon>
                            </span>
                            10000 ????nh Gi??
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
      )}
    </>
  );
}
