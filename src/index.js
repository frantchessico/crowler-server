const express = require('express');
require('./database');
const router = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(express.json())
const server = require('http').Server(app);
const io = require('socket.io')(server)


app.use((req, res, next) => {
    req.io = io;
    next()
});

io.on('connection', function(socket) {
    console.log('user connected');
    socket.emit('crawler', 'Hey')
})
app.use(cors())


 app.use('/api',router);

 app.set('port', process.env.PORT || 3333)

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
