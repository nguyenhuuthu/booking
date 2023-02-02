const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");

router.post("/", bookingController.userBooking);

module.exports = router;