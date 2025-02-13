const express = require("express");
const multer = require("multer");
const { uploadImage, getAllImages } = require("../controllers/uploadController");

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Images will be stored in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), uploadImage);
router.get("/images", getAllImages);

module.exports = router;

