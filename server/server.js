let express = require('express');
let bodyParser = require('body-parser');
let {ObjectID} = require('mongodb');

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

app.get('/todos', function(req, res) {
	Todo.find().then( function(todos) {
		res.send({
			todos,

		});
	}, function(e) {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', function(req, res) {
	let id =  req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then(function(todo) {
		if (todo) {
			return res.status(200).send({todo});
		} else {
			return res.status(404).send();
		}
		
	}).catch(function(e) {
		res.status(400).send();
	});
});

module.exports = {
	app: app
}