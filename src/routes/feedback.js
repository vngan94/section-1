const express = require("express");

const router = express.Router();

const feedbackController = require("../controllers/feedbackController.js");

router.post("/feedback", feedbackController.createFeedback);
router.get("/feedback", feedbackController.getAllFeedback);

module.exports = router;
