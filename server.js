const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/ping', (req, res) => {
	res.status(200).end();
});

app.get('/download2', (req, res) => {
	res.sendFile('a big file');
});

app.get('/download1', (req, res) => {
	res.sendFile('a small file');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});