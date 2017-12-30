const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = "5a408768b6697413fb5b2336";
let userId = "5a3c6caaa49d94177c3f6342";

if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
}

Todo.find({
	_id: id
}).then(function(todos) {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then(function(todo) {
	console.log('Todo', todo);
});

Todo.findById(id).then(function(todo) {
	console.log('Todo', todo);
}).catch(function(e) {
	console.log(e);
});

User.findById(userId).then(function(user) {
	if(!user) {
		return console.log('USer not found');
	}
	console.log('User', user);
}).catch(function(e) {
	console.log(e);
});

