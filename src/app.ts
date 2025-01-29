import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: process.env.EMAIL || "developer.ndilionel@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/spykelionel/hng12-task1-profile.git",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
