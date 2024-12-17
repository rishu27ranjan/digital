const Guest = require("../models/Guest");
const QRCode = require("qrcode");

exports.addGuest = async (req, res) => {
  const { name, email, phone } = req.body;

  const uniqueCode = Date.now().toString(); // Unique code based on timestamp
  const qrCodeUrl = await QRCode.toDataURL(uniqueCode); // Generate QR code

  const guest = new Guest({ name, email, phone, uniqueCode, qrCodeUrl });
  await guest.save();

  res.status(201).json({ message: "Guest added successfully", qrCodeUrl });
};

exports.getGuests = async (req, res) => {
  const guests = await Guest.find();
  res.json(guests);
};
