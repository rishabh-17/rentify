const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const firstName = req.body.firstName;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const lastName = req.body.lastName;
    const phone = req.body.phone;

    const userCheck = await User.findOne({ email: email });
    if (userCheck) {
      res.json({ msg: "email already exist", success: false });
    } else {
      const hashed = await bcrypt.hash(password, 10);
      const user = new User({
        firstName: firstName,
        email: email,
        password: hashed,
        role: role,
        lastName: lastName,
        phone: phone,
      });
      await user.save();
      res.json({ msg: "signup Successful", success: true });
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "something went wrong", success: false });
  }
};

exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email: email });
    if (user) {
      bcrypt
        .compare(password, user.password)
        .then((e) => {
          if (e) {
            console.log(e, "password match");
            res.json({
              msg: "login successful",
              login: true,
              role: user.role,
              id: user._id,
              token: getAccessToken(
                user.id,
                user.firstName,
                user.lastName,
                user.email,
                user.role,
                user.phone
              ),
            });
          } else {
            res.json({ err: "Enter correct password", success: false });
          }
        })
        .catch((err) => {
          res.json({ err: "Error logging in", success: false });
        });
    } else {
      res.json({ err: "user not found", success: false });
    }
  } catch (error) {
    console.log("login error", error);
    res.json({ err: "something went wrong", success: false });
  }
};

function getAccessToken(id, firstname, lastname, email, role, phone) {
  return jwt.sign(
    {
      _id: id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      role: role,
      phone: phone,
    },
    process.env.SECRET
  );
}
