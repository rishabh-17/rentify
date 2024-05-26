const router = require("express").Router();
const { homeController } = require("../controllers");
const { AuthMiddleware } = require("../middleware");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/home/add",
  AuthMiddleware.userAuthentication,
  upload.single("file"),
  homeController.createHome
);

router.get("/homes", homeController.getHomes);
router.get("/home/:id", homeController.getHome);
router.put("/home/:id", homeController.updateHome);
router.delete("/home/:id", homeController.deleteHome);
router.get("/myhomes", homeController.getMyHomes);
router.put(
  "/home/like/:id",
  AuthMiddleware.userAuthentication,
  homeController.likeHome
);
router.put(
  "/home/dislike/:id",
  AuthMiddleware.userAuthentication,
  homeController.dislikeHome
);

router.post(
  "/seller/detail",
  AuthMiddleware.userAuthentication,
  homeController.getSellerDetail
);

module.exports = router;
