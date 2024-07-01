const express = require("express");
const chats = require("./data/data");
const app = express();
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("home page of the chat app");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  //   console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
app.listen(PORT, () => console.log(`The server is running on port${PORT}`));
