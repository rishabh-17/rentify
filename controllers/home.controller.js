const { Home } = require("../models");
const { User } = require("../models");
require("dotenv").config();
const nodemailer = require("nodemailer");

const sendMail = (mailId, mailBody) => {
  let mailTransporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rishabh2560@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailDetails = {
    from: "rishabh2560@gmail.com",
    to: mailId,
    subject: "Rentify - Home Details",
    text: mailBody,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err);
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};

exports.createHome = async (req, res) => {
  try {
    const { description, location, price, type } = req.body;
    const user = req.user._id;
    const home = new Home({
      description,
      location,
      price,
      type,
      user,
      image: req.file.filename,
      likes: [],
    });
    await home.save();
    res.json(home);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getHomes = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = 10;
    const skip = (page - 1) * limit;
    let homes;
    const filter = req.query.filter || "";
    if (filter) {
      homes = await Home.find({
        $or: [
          { description: { $regex: filter, $options: "i" } },
          { location: { $regex: filter, $options: "i" } },
        ],
      })
        .limit(limit)
        .skip(skip);
    } else {
      homes = await Home.find().limit(limit).skip(skip);
    }
    res.json({ homes, page, limit });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteHome = async (req, res) => {
  try {
    const home = await Home.findByIdAndDelete(req.params.id);
    if (!home) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.json(home);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateHome = async (req, res) => {
  try {
    console.log(req);
    const home = await Home.findByIdAndUpdate(req.params.id, req.body);
    if (!home) {
      return res.status(404).json({ error: "Home not found" });
    }
    await home.save();
    res.json(home);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getHome = async (req, res) => {
  try {
    const home = await Home.findById(req.params.id);
    if (!home) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.json(home);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getMyHomes = async (req, res) => {
  try {
    const homes = await Home.find({ user: req.user._id });
    res.json(homes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.likeHome = async (req, res) => {
  try {
    const home = await Home.findById(req.params.id);
    if (!home) {
      return res.status(404).json({ error: "Home not found" });
    }
    const userId = req.user._id;
    if (home.likes.includes(userId)) {
      return res.status(400).json({ error: "You already liked this home" });
    }
    home.likes.push(userId);
    await home.save();
    res.json(home);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.dislikeHome = async (req, res) => {
  try {
    const home = await Home.findById(req.params.id);
    if (!home) {
      return res.status(404).json({ error: "Home not found" });
    }
    const userId = req.user._id;
    if (!home.likes.includes(userId)) {
      return res.status(400).json({ error: "You didn't like this home" });
    }
    console.log(home.likes, userId);
    home.likes = home.likes.filter(
      (id) => JSON.stringify(id) !== JSON.stringify(userId)
    );
    console.log(home.likes, userId);
    await home.save();
    res.json(home);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSellerDetail = async (req, res) => {
  try {
    const sellerId = req.body.sellerId;
    console.log(req.body, sellerId);
    const seller = await User.findById(sellerId);
    if (!seller) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = req.user;
    await sendMail(
      seller.email,
      `hello, \n here is someone who is interested in your property, \n Name: ${
        user.firstname + " " + user.lastname
      } \n Email: ${user.email} \n Phone: ${user.phone}`
    );
    // res.json(sendMail);
    res.json({
      firstname: seller.firstName,
      lastname: seller.lastName,
      email: seller.email,
      phone: seller.phone,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
