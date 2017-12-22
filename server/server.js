let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');
let {Todo} = require('./models/todo.js');
let {User} = require('./models/user.js');

let app = express();

app.use(bodyParser.json());

app.post('/todos', function(req, res) {
	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then(function(doc) {
		res.send(doc)
	}, function(e) {
		res.status(400).send(e);
	});
});

app.listen(3000, function() {
	console.log('Server started on port 3000');
});

module.exports = {
	app: app
}