// const { Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("a user connected:", socket.id);

//   socket.on("join_room", (roomId) => {
//     socket.join(roomId);
//     console.log(`User ${socket.id} joined room ${roomId}`);
//   });

//   socket.on("send_message", (message) => {
//     const { roomId } = message;
//     io.to(roomId).emit("receive_message", message);
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

// server.listen(3000, () => {
//   console.log("listening on *:3000");
// });
