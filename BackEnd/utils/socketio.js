import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT

// Socket.IO
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle joining a room (could be a private chat or a group chat)
  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  // Handle sending a message
  socket.on("send_message", (data) => {
    // Broadcast the message to the room
    io.to(data.roomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

