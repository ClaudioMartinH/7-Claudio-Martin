import express from "express";
import http from "http";
import {Server} from "socket.io"
import  path from "path";


const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => { 
    console.log("Usuario se ha conectado")
    
    socket.on("message", (msg) => {
        console.log("Recibimos el mensaje: ", msg);
        io.emit("message", msg);
    });
    socket.on("disconnect", () => {
        console.log("Usuario se ha desconectado")
    });
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,`../client/index.html`))
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});