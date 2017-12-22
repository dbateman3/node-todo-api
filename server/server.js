let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

let newTodo = new Todo({
	text: 'Cook dinner'
});

let anotherTodo = new Todo({
	text: 'Take out trash',
	completed: false,
	completedAt: 1000
});

anotherTodo.save().then(function(doc) {
	console.log('Saved todo', doc)
}, function(e) {
	console.log('Unable to save todo');
});