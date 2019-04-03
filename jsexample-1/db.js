// const mongojs = require("mongojs");
// const db = mongojs("localhost:27017/OSD", ['contacts']);
// 	db.contacts.find({}, function(err, posts) {
// 		if( err || !posts) console.log("No posts found");
// 		else posts.forEach( function(post) {
// 		console.log(post);
// 	});
// });
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/OSD", {useNewUrlParser: true})
.then(() => {
	console.log('Database connection successful')
  })
  .catch(err => {
  console.error('Database connection error')
  console.error(err);
})

