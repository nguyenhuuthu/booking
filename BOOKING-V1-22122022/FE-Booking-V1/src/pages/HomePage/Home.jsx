import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import ShareIcon from "@mui/icons-material/Share";
import Typography from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
// import Navbar from "../../components/navbar/Navbar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button, Space } from "antd";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";//cookie
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const tabs = ["all", "mn", "mb", "mt","khac"];
export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [id, setId] = useState("");
  const [idPer, setIdPer] = useState("");
  const [users, setUsers] = useState([]);
  const [type, setType] = useState("all");

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/user/posts/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [type]);
  let handleClick = (e) => {
    // console.log(e.target.id);
    console.log(e.target.id.split("_")[1]);
    setId(e.target.id.split("_")[1]);
  };
  let handleClickPer = (e) => {
    setIdPer(e.target.id.split("_")[1]);
    console.log(e.target);
  };
  if (users === "") {
    return <div>loading....</div>;
  }
  console.log(Cookie.get("userID"));
  return (
    <div>
      <div style={{}}>
        <Space className="site-button-ghost-wrapper" wrap>
          <Button type="primary" ghost onClick={() => setType("all")}>
            Tất cả
          </Button>
          {/* dashed */}
          <Button type="primary" danger ghost onClick={() => setType("mb")}>
            Miền Bắc
          </Button>
          <Button type="primary" danger ghost onClick={() => setType("mn")}>
            Miền Nam
          </Button>
          <Button type="primary" danger ghost onClick={() => setType("mt")}>
            Miền Trung
          </Button>
          <Button type="primary" danger ghos onClick={() => setType("khac")}>
            Khác
          </Button>
        </Space>

        {/* {tabs.map((tab)=>(
            <button key={tab} onClick={()=>setType(tab)}>
                {tab}
            </button>
        ))}  */}
      </div>
      <div className="all-posts">
        {users.map((e) => (
          <Card
            id={e.id}
            className="one-post"
            style={{ borderRadius: "10px" }}
            sx={{ maxWidth: 320 }}
          >
            <Link
              style={{ color: "black" }}
              onClick={handleClickPer}
              to={`/userPage/${e.id_user}`}
            >
              <div id={`personal${e.id_user}`}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={e.avatar}
                        alt=""
                      />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={e.fistName}
                  subheader="September 14, 2016"
                />
              </div>
            </Link>

            <Link
              to={`/detailpage/${e.id}`}
              id={`album${e.id}`}
              onClick={handleClick}
            >
              <div className="post">
                <div
                  id={`carouselExampleCaptions-${e.id}`}
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="3"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="4"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval="10000"
                    >
                      <img
                        style={{ borderRadius: "10px", height: "300px" }}
                        id={`img1_${e.id}`}
                        src={e.pic1}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img
                        style={{ borderRadius: "10px", height: "300px" }}
                        id={`img2_${e.id}`}
                        src={e.pic2}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        style={{ borderRadius: "10px", height: "300px" }}
                        id={`img3_${e.id}`}
                        src={e.pic3}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        style={{ borderRadius: "10px", height: "300px" }}
                        id={`img4_${e.id}`}
                        src={e.pic4}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        style={{ borderRadius: "10px", height: "300px" }}
                        id={`img5_${e.id}`}
                        src={e.pic5}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carouselExampleCaptions-${e.id}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carouselExampleCaptions-${e.id}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </Link>
            <CardContent style={{ maxHeight: "120px" }}>
              <h1 style={{ fontSize: "20px" }}>{e.diaDiem}</h1>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ maxHeight: "20px" }}
              >
                Được xem 86400 lần trong tuần trước
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ maxHeight: "20px" }}
              >
                Ngày 10-Ngày 15 tháng 12
              </Typography>

              <h1 style={{ marginTop: "10px", fontSize: "20px" }}>
                ${e.gia} đêm
              </h1>
            </CardContent>
            <CardActions
              style={{ justifyContent: "space-between" }}
              disableSpacing
            >
              <div>
                {" "}
                <IconButton
                  style={{ color: "red" }}
                  aria-label="add to favorites"
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>
              <div>
                <h1 style={{ fontSize: "20px" }}>
                  5
                  <ion-icon
                    style={{ fontSize: "20px" }}
                    name="star-outline"
                  ></ion-icon>
                </h1>
              </div>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}
