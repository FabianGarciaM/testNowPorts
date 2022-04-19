//Require Mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Contact = new Schema({
  FirstName: String,
  LastName: String,
  Phone: Number,
});

// Compile model from schema
module.exports = mongoose.model("Contact", Contact);
