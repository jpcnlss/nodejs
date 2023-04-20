var express = require('express');
var app = express();
var fs = require("fs");


var student = {
   "student5" : {
      "name" : "Shawn Sunga",
	  "addess" : "Sto tomas Pampanga",
	  "course" : "Bs-Civil Engineering",
      "year level" : "3rd Year",
      "id": 5
   }
}



app.get('/listStudents', function (req, res) {
   fs.readFile( __dirname + "/" + "students.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "student.json", 'utf8', function (err, data) {
      var student = JSON.parse( data );
      var student = student["student" + req.params.id] 
      console.log( student );
      res.end( JSON.stringify(student));
   });
})


app.post('/addStudent', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "student.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["student5"] = student["student5"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})


app.delete('/deleteStudent', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "student.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["student" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.delete('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "student.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["student" + req.params.id];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})