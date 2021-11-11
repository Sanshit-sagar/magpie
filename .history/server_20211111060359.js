const express = require("express");
const path = require("path");
const WebSocket = require("ws");


const app = express(); 
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
}); 

const socketServer = new WebSocket.Server({
    port: 3030 
}); 

const messages = ['Welcome to the WebSockets Demo'];

socketServer.on('connection', (socketClient) => {
    console.log('connected');
    console.log('client Set Length: ' + socketServer.clients.size);
    socketClient.send()

    socketClient.on('close', (socketClient) => {
        console.log('closed');
        console.log('Number of clients: ' + socketServer.clients.size); 
    })
})