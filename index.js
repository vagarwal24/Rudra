var express = require('express');
var app = express();
var db = require('./db');

app.get('/',function(req,res){
	res.send("Welcome Home !!");
});






app.listen('2000',function(err){
	if(err) throw err;
	console.log("Server Running at : http://localhost:2000");	
});