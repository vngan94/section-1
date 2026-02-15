const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = (email) => emailRegex.test(email);

const validateFeedback = (name, email, message) => {
  if (!name || !email || !message) {
    return {
      isValid: false,
      error: "Missing required fields",
    };
  }

  if (!isValidEmail(email)) {
    return {
      isValid: false,
      error: "Invalid email format",
    };
  }

  if (message.length < 6) {
    return {
      isValid: false,
      error: "Message must be at least 10 characters",
    };
  }

  return { isValid: true };
};

module.exports = { validateFeedback };
