
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie"; //import cookie để dùng
function LoginPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["Cookie"]); //hbjbhjnjbjmbn
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let handleUserChange = (e) => {
    e.preventDefault();
    setEmail({
      email: e.target.value,
    });
  };
  let handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword({ password: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      email: email.email,
      password: password.password,
    };
    // console.log("handleSubmit",newUser);
    fetch(`http://127.0.0.1:3001/user/loginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("day la post",data);
        setMessage(data.message);
        if (data.message === "Login seccessfully") {
          console.log("dang nhap thanh cong");
          setCookie("userID", data.userId);

          window.location.href = "http://localhost:3000/";
        }
      });
  };

  return (
    <>
      <div>
        <div className="header">
          <div className="header-main">
            <h1>Booking House Login</h1>
            <div className="header-bottom">
              <div className="header-right w3agile">
                <div className="header-left-bottom agileinfo">
                  <form action="#" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      onChange={handleUserChange}
                    />

                    <div style={{ margin: "0 0 10px 0", color: "red" }}>
                      {message === "Email is not exits" ||
                      message === "Invalid email" ? (
                        <div>{message}</div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <input
                      type="password"
                      name="password"
                      onChange={handlePasswordChange}
                    />
                    <div style={{ margin: "0 0 0 0", color: "red" }}>
                      {message !== "Email is not exits" &&
                      message !== "Invalid email" &&
                      message !== "Login seccessfully" ? (
                        <div>{message}</div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div className="remember">
                      <span className="checkbox1">
                        <label className="checkbox">
                          <input type="checkbox" name="" />
                          <i> </i>Remember me
                        </label>
                      </span>
                      <div className="forgot">
                        <h6>
                          <Link to="/forgetpassword">
                            <a>Forgot Password?</a>
                          </Link>
                        </h6>
                      </div>
                      <div className="clear"> </div>
                    </div>
                    <input type="submit" value="Login" />
                  </form>
                  <div className="header-left-top">
                    <div className="sign-up">
                      <h2>or</h2>
                    </div>
                  </div>
                  <div className="header-social wthree">
                    <Link to="/register">
                      {" "}
                      <input type="submit" value="Register" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;


