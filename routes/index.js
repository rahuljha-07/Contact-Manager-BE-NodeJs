const express = require("express");
const contactRoutes = require("./contactRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

// Route definitions
router.use("/contacts", contactRoutes);
router.use("/users", userRoutes);

module.exports = router;
