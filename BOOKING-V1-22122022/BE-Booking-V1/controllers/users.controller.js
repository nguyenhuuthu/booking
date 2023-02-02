const usersModel = require("../models/users.model");

// let strongRegex = new RegExp(
//   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// );

//getall

module.exports.login = usersModel.login;
module.exports.createUser = usersModel.createUser;
module.exports.resetPassword = usersModel.resetPassword;
module.exports.newPassword = usersModel.newPassword;
module.exports.getUserLogin = usersModel.getUserLogin;
// module.exports.newPassword = usersModel.updateUser;
//hompage
module.exports.getAll = usersModel.getAll;
module.exports.getAllPosts = usersModel.getAllPosts;
module.exports.getPostsMB = usersModel.getPostsMB;
module.exports.getPostsMN = usersModel.getPostsMN;
module.exports.getPostsMT = usersModel.getPostsMT;
module.exports.getPostsKhac = usersModel.getPostsKhac;
module.exports.getDetail = usersModel.getDetail;
module.exports.getPersonal = usersModel.getPersonal;
// folow
module.exports.newFollow = usersModel.newFollow;
