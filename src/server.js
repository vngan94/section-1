require("dotenv").config();

const app = require("./app");
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`\nServer running on http://localhost:${PORT}`);
  console.log("Available endpoints:");
  console.log("  GET  /api/status");
  console.log("  POST /api/feedback");
  console.log("  GET  /api/feedback");
});

module.exports = server;
