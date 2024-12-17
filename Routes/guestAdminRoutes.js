const express = require("express");
const { addGuest, getGuests } = require("../controllers/guestAdminController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/guests", protect, addGuest);
router.get("/guests", protect, getGuests);

module.exports = router;
