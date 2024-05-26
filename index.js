const express = require("express");
const app = express();
const { AuthMiddleware } = require("./middleware");
const { connectDB } = require("./utils");
const cors = require("cors");
const { userRouter, homeRouter } = require("./routes");
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/client/build"));
const path = require("path");

app.use("/files", express.static(path.join(__dirname, "/uploads")));
app.use("/api/user", userRouter);
app.use("/api/home", AuthMiddleware.userAuthentication, homeRouter);

app.get("/", (req, res) => {
  console.log("working");
  console.log(`client/build/${req.url !== "/" ? req.url : "index.html"}`);
  res.sendFile(
    path.join(
      __dirname,
      `client/build/${req.url !== "/" ? req.url : "index.html"}`
    )
  );
});

app.listen(8000, () => connectDB(process.env.MONGO_URI));
