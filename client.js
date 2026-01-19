// client.js
const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected");
  socket.emit("message", "Hello from Node client");
});

socket.on("message", console.log);

