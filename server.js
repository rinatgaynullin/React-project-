const express = require('express');
const fs = require ('fs')
const app = express();
const router = express.Router()

app.use(express.json())
app.use(express.static(__dirname + '/static/build/'));


app.get('/', (req, res) => {
	res.sendFile('index', { root : __dirname +'/static/build'});
});

app.get('/api/chats', (req, res) => {
	fs.readFile('api/chats.json', 'utf-8', (err,data) => {
		if (err) {
			res.sendStatus(404, JSON.stringify({result:0, text:err}));
		} else {
			res.send(data)
		}
	})	
})
app.get('/api/profile', (req, res) => {
	fs.readFile('api/profile.json', 'utf-8', (err,data) => {
		if (err) {
			res.sendStatus(404, JSON.stringify({result:0, text:err}));
		} else {
			res.send(data)
		}
	})	
})
let port = 5001;
app.listen(port, () => {
	console.log(__dirname);
	console.log("Listening Port " + port);
});

