const { Router } = require("express");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.get("/", userController.getAll);
router.get("/:id", userController.getUserLogin);
router.get("/posts/all", userController.getAllPosts);
router.get("/posts/mb", userController.getPostsMB);
router.get("/posts/mt", userController.getPostsMT);
router.get("/posts/mn", userController.getPostsMN);
router.get("/posts/khac", userController.getPostsKhac);
router.get("/detail/:id", userController.getDetail);
router.get("/personal/:id", userController.getPersonal);
// router.get("/per/:id", userController.getPer);

router.post("/loginUser", userController.login); //nhận thôngh tin về để đối chiếu database
router.post("/createUser", userController.createUser); //nhận thông tin về để so sánh và xử lý trong database
router.post("/resetPassword", userController.resetPassword);
router.post("/newPassword", userController.newPassword);
// router.put("/:id", userController.updateUser);
router.post("/newFollow", userController.newFollow);

module.exports = router;
