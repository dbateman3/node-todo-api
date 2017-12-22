let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
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

let User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

let newUser = new User({
	email: 'dbateman0319@starkstate.net'
});

newUser.save().then(function(doc) {
	console.log('Saved user', doc)
}, function(e) {
	console.log('Unableto save user');
});