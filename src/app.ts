import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "social.lionel@gmail.com",
    current_datetime: new Date().toISOString().slice(0, 19) + "Z",
    github_url: "https://github.com/spykelionel/hng12-task1-profile",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
