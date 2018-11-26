const express = require('express');
const app = express();
const path = require('path');


app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/assets/index.html'));
});

app.listen(3000, () => console.log('app listening on port 3000'))