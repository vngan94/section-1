const express = require("express");
const statusRoutes = require("./status");
const feedbackRoutes = require("./feedback");

const router = express.Router();

router.use(statusRoutes);
router.use(feedbackRoutes);

module.exports = router;
