const express = require("express");
const connectDB = require("./config/db");
const adminRoutes = require("./Routes/adminRoutes.js");
const guestAdminRoutes = require("./Routes/guestAdminRoutes.js");

require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/guest-admin", guestAdminRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
