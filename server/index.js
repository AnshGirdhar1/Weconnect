const {Server} = require('socket.io');

const io = new Server(5000);

io.on('connection', (socket) => {
    console.log('Socket connected', socket.id);
});