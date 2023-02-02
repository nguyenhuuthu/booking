const db = require("../config/db");

module.exports = {
  login: (req, res) => {
    let { email, password } = req.body;
    if (!email) {
      return res.status(500).json({
        message: "Invalid email",
      });
    }
    if (!password) {
      return res.status(500).json({
        message: "Invalid password",
      });
    }

    db.execute("SELECT*FROM users WHERE email=?", [email]).then((data) => {
      let find = data[0][0];
      if (!find) {
        res.status(404).json({
          message: "Email is not exits",
        });
      } else {
        if (!find.password) {
          res.status(404).json({
            message: "Wrong password",
          });
        } else if (find.password !== password) {
          res.status(200).json({
            status: "wrong",
            message: "Wrong passsword",
          });
        } else {
          // res.cookie("userId", find.id, { signed: true });
          // res.cookie("userEmail", find.email, { signed: true });
          // res.cookie("role", find.role, { signed: true });
          // db.execute(`SELECT * FROM users `)
          //   .then((data) => {
          //     console.log("data", data[0][0]);

          //   })
          //   .catch((err) => console.log(err));
          res.status(200).json({
            status: "success",
            message: "Login seccessfully",
            userId: find.id,
            userEmail: find.email,
            role: find.role,
          }); //gửi dữ liệu lên cho FE
        }
      }
    });
  },
  createUser: (req, res) => {
    let { email, password, userName, fistName, lastName, avatar } = req.body;
    if (!userName) {
      return res.status(500).json({
        message: "Invalid username enough",
      });
    } else if (!email) {
      return res.status(500).json({
        message: "Invalid email enough",
      });
    } else if (!password) {
      return res.status(500).json({
        message: "Invalid password enough",
      });
    } else {
      if (!strongRegex.test(password)) {
        return res.status(500).json({
          message: "Password is not strong enough",
        });
      } else {
        let id = Math.floor(Math.random() * 10000000);

        db.execute("SELECT*FROM users WHERE email=?", [email])
          .then((data) => {
            let [rows] = data;
            if (rows.length > 0) {
              return Promise.reject("Email alreadey exits");
            } else {
              return db.execute("INSERT INTO users VALUES(?,?,?,?,?,?,?) ", [
                id,
                email,
                password,
                null,
                null,
                null,
                1,
              ]);
            }
          })
          .then((data) => {
            return res.status(200).json({
              message: "creat one successfully",
            });
          })
          .catch((err) => {
            return res.status(500).json({
              err: err,
            });
          });
      }
    }
  },
  resetPassword: (req, res) => {
    let { email } = req.body;
    if (!email) {
      return res.status(500).json({
        message: "Invalid email",
      });
    }
    db.execute("SELECT*FROM users WHERE email=?", [email]).then((data) => {
      let find = data[0][0];
      if (!find) {
        res.status(404).json({
          message: "Email is not exits",
        });
      } else {
        console.log("hien thi ra trang reset password");
        res.status(200).json({
          status: "success",
          message: "Email is exits",
        });
      }
    });
  },
  newPassword: (req, res) => {
    // console.log("newpassword");
  },
  updateUser: (req, res) => {
    //   console.log("update");
    let { id } = req.params;
    let { password, fistName, lastName, avatar } = req.body;
    db.execute(
      "UPDATE users SET password=?,fiStName=?,lastName=?,avatar=? WHERE id=?",
      [password, fistName, lastName, avatar, id]
    )
      .then((data) => {
        //   console.log(data);
        res.status(200).json({
          message: "update one successfully",
        });
      })
      .catch((err) => console.log(err));
  },
  getAll: (req, res) => {
    db.execute("SELECT*FROM users ")
      .then((data) => {
        // console.log(data[0]);
        res.send(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getUserLogin: (req, res) => {
    let id = req.params.id;
    // console.log(id);
    db.execute("SELECT*FROM users ")
      .then((data) => {
        // console.log(data[0]);
        let dataPersonal = [];
        for (let i = 0; i < data[0].length; i++) {
          if (data[0][i].id == id) {
            dataPersonal.push(data[0][i]);
          }
        }
        // console.log("day la auser", dataPersonal);   
        res.send(dataPersonal);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getAllPosts: (req, res) => {
    db.execute(
      `SELECT  b.id,b.id_user, b.nameHouse,b.gia, a.pic1, a.pic2, a.pic3, a.pic4, a.pic5, c.phongKhach, c.phongNgu, c.phongBep,c.phongWC,c.khuDexe,c.hoBoi,c.tivi, d.email,d.avatar,d.fistName,d.lastName, e.diaDiem
              FROM
              
              hotel_booking.house AS b,
              hotel_booking.media AS a,
              hotel_booking.tinhnang AS c,
              hotel_booking.users AS d  ,
              hotel_booking.diadiem AS e
              WHERE ( b.id_media= a.id)
              AND (b.id_tinhnang = c.id)
              AND (b.id_user = d.id)
              AND (b.id_diadiem=e.id);`
    )
      .then((data) => {
        res.send(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPostsMB: (req, res) => {
    db.execute(
      `SELECT  b.id,b.id_user, b.nameHouse,b.gia, a.pic1, a.pic2, a.pic3, a.pic4, a.pic5, c.phongKhach, c.phongNgu, c.phongBep,c.phongWC,c.khuDexe,c.hoBoi,c.tivi, d.email,d.avatar,d.fistName,d.lastName, e.diaDiem,e.khuVuc
              FROM
              
              hotel_booking.house AS b,
              hotel_booking.media AS a,
              hotel_booking.tinhnang AS c,
              hotel_booking.users AS d  ,
              hotel_booking.diadiem AS e
              WHERE ( b.id_media= a.id)
              AND (b.id_tinhnang = c.id)
              AND (b.id_user = d.id)
              AND (b.id_diadiem=e.id);`
    )
      .then((data) => {
        // console.log("day la ábđjábá", data);
        let dataMB = [];
        for (let i = 0; i < data[0].length; i++) {
          if (data[0][i].khuVuc == "Miền Bắc") {
            dataMB.push(data[0][i]);
          }
        }
        res.send(dataMB);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPostsMN: (req, res) => {
    db.execute(
      `SELECT  b.id,b.id_user, b.nameHouse,b.gia, a.pic1, a.pic2, a.pic3, a.pic4, a.pic5, c.phongKhach, c.phongNgu, c.phongBep,c.phongWC,c.khuDexe,c.hoBoi,c.tivi, d.email,d.avatar,d.fistName,d.lastName, e.diaDiem,e.khuVuc
              FROM
              
              hotel_booking.house AS b,
              hotel_booking.media AS a,
              hotel_booking.tinhnang AS c,
              hotel_booking.users AS d  ,
              hotel_booking.diadiem AS e
              WHERE ( b.id_media= a.id)
              AND (b.id_tinhnang = c.id)
              AND (b.id_user = d.id)
              AND (b.id_diadiem=e.id);`
    )
      .then((data) => {
        let dataMB = [];
        for (let i = 0; i < data[0].length; i++) {
          if (data[0][i].khuVuc == "Miền Nam") {
            dataMB.push(data[0][i]);
          }
        }
        res.send(dataMB);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPostsMT: (req, res) => {
    db.execute(
      `SELECT  b.id,b.id_user, b.nameHouse,b.gia, a.pic1, a.pic2, a.pic3, a.pic4, a.pic5, c.phongKhach, c.phongNgu, c.phongBep,c.phongWC,c.khuDexe,c.hoBoi,c.tivi, d.email,d.avatar,d.fistName,d.lastName, e.diaDiem,e.khuVuc
              FROM
              
              hotel_booking.house AS b,
              hotel_booking.media AS a,
              hotel_booking.tinhnang AS c,
              hotel_booking.users AS d  ,
              hotel_booking.diadiem AS e
              WHERE ( b.id_media= a.id)
              AND (b.id_tinhnang = c.id)
              AND (b.id_user = d.id)
              AND (b.id_diadiem=e.id);`
    )
      .then((data) => {
        let dataMT = [];
        for (let i = 0; i < data[0].length; i++) {
          if (data[0][i].khuVuc == "Miền Trung") {
            dataMT.push(data[0][i]);
          }
        }
        res.send(dataMT);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPostsKhac: (req, res) => {
    db.execute(
      `SELECT  b.id,b.id_user, b.nameHouse,b.gia, a.pic1, a.pic2, a.pic3, a.pic4, a.pic5, c.phongKhach, c.phongNgu, c.phongBep,c.phongWC,c.khuDexe,c.hoBoi,c.tivi, d.email,d.avatar,d.fistName,d.lastName, e.diaDiem,e.khuVuc
              FROM
              
              hotel_booking.house AS b,
              hotel_booking.media AS a,
              hotel_booking.tinhnang AS c,
              hotel_booking.users AS d  ,
              hotel_booking.diadiem AS e
              WHERE ( b.id_media= a.id)
              AND (b.id_tinhnang = c.id)
              AND (b.id_user = d.id)
              AND (b.id_diadiem=e.id);`
    )
      .then((data) => {
        let dataMT = [];
        for (let i = 0; i < data[0].length; i++) {
          if (
            data[0][i].khuVuc != "Miền Trung" &&
            data[0][i].khuVuc != "Miền Nam" &&
            data[0][i].khuVuc != "Miền Bắc"
          ) {
            dataMT.push(data[0][i]);
          }
        }
        res.send(dataMT);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getDetail: (req, res) => {
    let id = req.params.id;
    db.execute(
      `SELECT b.id,b.id_user, b.nameHouse, a.pic1, a.pic2, a.pic3, a.pic4, a.pic5, 
                  c.phongKhach, c.phongNgu, c.phongBep,c.phongWC,c.khuDexe,c.hoBoi,c.tivi, 
                  d.email,d.avatar,d.fistName,d.lastName, e.diaDiem
              FROM
                  hotel_booking.house AS b,
                  hotel_booking.media AS a,
                  hotel_booking.tinhnang AS c,
                  hotel_booking.users AS d  ,
                  hotel_booking.diadiem AS e
                  WHERE ( b.id_media= a.id)
                  AND (b.id_tinhnang = c.id)
                  AND (b.id_user = d.id)
                  AND (b.id_diadiem=e.id);`
    )
      .then((data) => {
        // console.log("day la ábđjábá", data);
        for (let i = 0; i < data[0].length; i++) {
          if (id == data[0][i].id) {
            res.send(data[0][i]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPersonal: (req, res) => {
    let id = req.params.id; //id của thằng chủ
    let bigdata = [];
    db.execute(
      `SELECT  b.id,b.id_user,  b.nameHouse,b.gia, a.pic1, a.pic2, a.pic3, a.pic4, a.pic5, c.phongKhach, c.phongNgu, c.phongBep,c.phongWC,c.khuDexe,c.hoBoi,c.tivi, e.diaDiem,e.khuVuc
                FROM
                
                hotel_booking.house AS b,
                hotel_booking.media AS a,
                hotel_booking.tinhnang AS c,
                hotel_booking.users AS d  ,
                hotel_booking.diadiem AS e
                WHERE ( b.id_media= a.id)
                AND (b.id_tinhnang = c.id)
                AND (b.id_user = d.id)
                AND (b.id_diadiem=e.id)
                AND b.id_user = ${id}   `
    )
      .then((data) => {
        let dataPersonal = [];
        for (let i = 0; i < data[0].length; i++) {
          if (data[0][i].id_user == id) {
            dataPersonal.push(data[0][i]);
          }
        }
        db.execute(`SELECT * FROM users`).then((dataUser) => {
          let User = [];

          for (let i = 0; i < dataUser[0].length; i++) {
            if (id == dataUser[0][i].id) {
              User.push(dataUser[0][i]);
            }
          }
          db.execute(`SELECT * FROM follow`).then((dataFollow) => {
            // console.log(dataFollow[0]);
            let totalFollow = [];
            for (let i = 0; i < dataFollow[0].length; i++) {
              if (id == dataFollow[0][i].id_userfollow) {
                totalFollow.push(dataFollow[0][i]);
              }
            }
            // console.log(totalFollow.length);
            bigdata.push(User);
            bigdata.push(dataPersonal);
            bigdata.push(totalFollow);
            res.send(bigdata);
          });

          //
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  newFollow: (req, res) => {
    let { id_userfollow, id_userfollowed } = req.body;
    console.log(id_userfollow, id_userfollowed); //ok
    let id = Math.floor(Math.random() * 10000000);
    db.execute(
      "SELECT * FROM follow WHERE id_userfollow=? AND id_userfollowed=?",
      [id_userfollow, id_userfollowed]
    )
      .then((data) => {
        let [rows] = data;
        if (rows.length > 0) {
          return db.execute(
            `DELETE FROM follow WHERE id_userfollow=? AND id_userfollowed=?`,
            [id_userfollow, id_userfollowed]
          );
        } else {
          return db.execute("INSERT INTO follow VALUES(?,?,?,?) ", [
            id,
            id_userfollow,
            id_userfollowed,
            "UnFollow",
          ]);
        }
      })
      .then((data) => {
        console.log(data[0]);
        return res.status(200).json({
          message: "creat Follow successfully",
          action: "unfolow"
        });
      })
      .catch((err) => {
        return res.status(500).json({
          err: err,
        });
      });
  },
};
