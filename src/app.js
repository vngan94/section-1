const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use("/api", routes);

// Error handler
app.use((err, res) => {
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

module.exports = app;
