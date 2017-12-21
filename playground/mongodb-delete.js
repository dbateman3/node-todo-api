const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
	if (err) {
		 return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// deleteMany
	db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(function(result) {
		console.log(result);
	});
	//deleteOne
	db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(function(result) {
		console.log(result);
	});
	// findOneAndDelete
	db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then(function(result) {
		console.log(result);
	});
	
	//db.close();
});