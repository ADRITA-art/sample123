const Image = require("../models/imageModels");

// Upload Image
const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const newImage = new Image({
      filename: req.file.filename,
      path: req.file.path,
    });

    await newImage.save();
    res.status(201).json({ message: "Image uploaded successfully", image: newImage });
  } catch (error) {
    res.status(500).json({ error: "Error uploading image", details: error.message });
  }
};

// Fetch all images
const getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images", details: error.message });
  }
};

module.exports = { uploadImage, getAllImages };
