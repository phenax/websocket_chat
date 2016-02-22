var http= require('http');
var fs= require('fs');
var socket= require('socket.io');

var server= http.createServer((req,res,err)=> {
	res.write(fs.readFileSync('index.html', 'utf8'));
	res.end();
});

var io= socket(server);

io.on('connection', (socket)=> {
	socket.on('msg', (dat)=> {
		socket.broadcast.emit('msg',dat);
	});
});

server.listen(8080);