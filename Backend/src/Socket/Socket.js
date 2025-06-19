import { Server } from "socket.io";
import http from "http";
import express from "express";
//In the context of Socket.IO, the cors import is not needed, as Socket.IO handles cross-origin requests automatically. T
export const app = express();

export const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});
const Usersid = {};
export const Getsocketid = (reciverid) => {
  return Usersid[reciverid];
};
io.on("connection", (socket) => {
  console.log("User socket id is", socket.id);
  console.log(socket?.handshake?.query?.userid);
  const userid = socket?.handshake?.query?.userid;
  if (userid !== "undefined") {
    Usersid[userid] = socket.id;
  }
  io.emit("Onlineusers", Object.keys(Usersid));

  socket.on("disconnect", () => {
    delete Usersid[userid];
    io.emit("Onlineusers", Object.keys(Usersid));
  });
});
