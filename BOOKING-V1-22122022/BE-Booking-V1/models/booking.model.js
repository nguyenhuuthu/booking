const db = require("../config/db");

module.exports.userBooking = (req, res) => {
    let { id,
        start,
        end,
        status,
        id_user,
        id_house, } = req.body;
        console.log(typeof id,
          typeof start,
          typeof end,
          typeof status,
          typeof id_user,
          typeof id_house);
    db.execute("INSERT INTO booking VALUES(?,?,?,?,?,?) ", [
        id,
        id_user,
        id_house,
        status,
        start,
        end,
      ])
      .then((data) => {
        // console.log(data[0]);
        res.send(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };