const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.userAuthentication = (req, res, next) => {
  try {
    const token = req.header("authentication");
    const user = jwt.verify(token, process.env.SECRET);
    User.findById(user?._id).then((user) => {
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(401).json({ success: false });
  }
};
