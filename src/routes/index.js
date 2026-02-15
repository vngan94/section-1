const express = require("express");
const statusRoutes = require("./status");

const router = express.Router();

router.use(statusRoutes);

module.exports = router;
