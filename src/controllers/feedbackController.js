const { validateFeedback } = require("../ultilities/feedbackValidator");
const feedbackService = require("../services/feedbackService");

exports.createFeedback = (req, res) => {
  try {
    const { name, email, message } = req.body;

    const validation = validateFeedback(name, email, message);
    if (!validation.isValid) {
      return res.status(400).json({
        error: validation.error,
      });
    }

    const feedback = feedbackService.createFeedback({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Failed to create feedback",
    });
  }
};

exports.getAllFeedback = (req, res) => {
  try {
    const feedbacks = feedbackService.getAllFeedback();
    res.json({
      count: feedbacks.length,
      data: feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Failed to retrieve feedback",
    });
  }
};
