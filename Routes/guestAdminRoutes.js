const express = require("express");
const { addGuest, getGuests } = require("../Controller/guestAdminController.js");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/guests", protect, addGuest);
router.get("/guests", protect, getGuests);

module.exports = router;
