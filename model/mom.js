const { default: mongoose } = require("mongoose");

const momSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "MOM title is Required"],
  },
  paragraph: {
    type: String,
    required: [true, "MOM Paragraph is Required"],
  },
  image: {
    type: String,
    required: [true, "Image Url must be entered"],
  },
});
module.exports = mongoose.model("mom", momSchema);
