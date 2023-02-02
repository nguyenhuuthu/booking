import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import { width } from "@mui/system";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import PostFiltersForm from "./PostFiltersForm/PostFiltersForm";

function Navbar(props) {
  const [cookies, setCookie] = useCookies(["Cookie"]);
  let id = cookies.userID;
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("hahahaah", data[0]);
        setDataUser(data[0]);
      });
  }, []);
  if (dataUser.length === 0) {
    return <div>loading...</div>;
  }
  function handleFiltersChange(newFilters) {
    console.log("new filters:", newFilters);
  }
  return (
    <>
      <div
        style={{ margin: "auto", padding: "0", width: "100%" }}
        class="container"
      >
        <div style={{ color: "red" }} class="row align-items-start">
          <div style={{ color: "red" }} className="col-2 ">
            <Link to="/" className="logo">
              {" "}
              <img
                style={{ width: "150px" }}
                src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
                alt=""
              />
            </Link>
          </div>
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              justifyContent: "space-around",
            }}
            className="col-8"
          >
            {/* <div className="search-input">
              {" "}
              <input
                style={{
                  width: "90%",
                  borderRadius: "20px",
                  height: "40px",
                  paddingLeft: "10px",
                }}
                className=""
                type="text"
                placeholder="Search"
              />
            </div> */}
            <PostFiltersForm onSubmit={handleFiltersChange} />
          </div>
          <div
            style={{ margin: "auto", textAlign: "center" }}
            className="col-2"
          >
            <div
              className="profile-user"
              style={{
                borderRadius: "50px",
                margin: "auto",
                textAlign: "center",
                justifyItems: "",
              }}
            >
              <Stack
                style={
                  {
                    //   border: "1px solid white",
                  }
                }
                direction="row"
                spacing={2}
              >
                <ul>
                  <li class="dropdown" style={{}}>
                    <a
                      //   class="dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      //   aria-expanded="false"
                    >
                      <ion-icon
                        style={{
                          paddingTop: "28px",
                          margin: "auto 0",
                          fontSize: "36px",
                          color: "white",
                        }}
                        name="reorder-four-outline"
                      ></ion-icon>
                    </a>
                    <ul style={{ minWidth: "250px" }} class="dropdown-menu">
                      <li>
                        <Link
                          id={dataUser.id}
                          class="dropdown-item"
                          to="/myprofile"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Tin nhắn
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Thông báo
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Tài khoản
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Tạo bài đăng mới
                        </a>
                      </li>

                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <Avatar
                  style={{ margin: "auto 0" }}
                  alt="Remy Sharp"
                  src={dataUser.avatar}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
