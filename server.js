const express = require("express");
const path = require("path");

const app = express();
const PORT = 80; // یا هر پورتی که می‌خواهید

// تنظیم پوشه بیلد
app.use(express.static(path.join(__dirname, "build")));

// مسیر پیش‌فرض برای برنامه React
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// راه‌اندازی سرور
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://<your-ip-address>:${PORT}`);
});
