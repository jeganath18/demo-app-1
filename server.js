const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    service: "ArchPilot Test Application",
    architecture: process.arch,
    platform: process.platform,
    message: "Successfully deployed!"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`ArchPilot test app listening on port ${PORT}`);
});
