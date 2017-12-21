const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
	if (err) {
		 return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Users').find({name: 'Dan Bateman'}).toArray().then( function(docs) {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, function(err) {
		console.log('Unable to find records', err);
	});

	//db.close();
});