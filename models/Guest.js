const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  uniqueCode: { type: String, unique: true },
  qrCodeUrl: { type: String },
});

module.exports = mongoose.model("Guest", guestSchema);
