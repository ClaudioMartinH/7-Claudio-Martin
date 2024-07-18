import express from "express";
import http from "http";
import {Server} from "socket.io"


const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`)
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});