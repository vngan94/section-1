const feedbackStore = [];
let currentId = 1;

const createFeedback = (feedbackData) => {
  const feedback = {
    id: currentId++,
    name: feedbackData.name.trim(),
    email: feedbackData.email.trim().toLowerCase(),
    message: feedbackData.message.trim(),
    createdAt: new Date().toISOString(),
  };

  feedbackStore.push(feedback);
  return feedback;
};

const getAllFeedback = () => {
  return feedbackStore;
};

module.exports = {
  createFeedback,
  getAllFeedback,
};
