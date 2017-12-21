const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
	if (err) {
		 return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//find one and update
	db.collection('Todos').findOneAndUpdate({
		text: 'Something else to do'
	}, {
		$set: { //update operator
			completed: true
		}
	}, {
		returnOriginal: false
	}).then(function(result) {
		console.log(result);
	});
	
	//db.close();
});