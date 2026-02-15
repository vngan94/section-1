const express = require("express");

const router = express.Router();

const statusController = require("../controllers/status.js");

router.get("/status", statusController.getStatus);

module.exports = router;
