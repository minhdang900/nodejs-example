const mongoose =  require ("mongoose");
const student = new mongoose.Schema({
	name: {type:String, reuire:""},
	birthday: {type: Date},
	contact: {type: ObjectId, ref: "contact"}
});
module.exports = mongoose.model("student", student);