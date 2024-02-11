import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

const app = express();
const server = http.createServer(app); // Pass 'app' instead of 'http'
const io = new Server(server);

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
});

// Remove the duplicate server.listen to avoid EADDRINUSE error
server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
