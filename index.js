//backend
//require mongoose(the orm)
var mongoose = require("mongoose");
//connect to mongo
mongoose.connect("mongod://localhost/students")
//model (schema)
var Student.model("Student", {
  name: String
})
//seed data
new Student({name:"Teddy"});
