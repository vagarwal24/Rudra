var mysql = require('mysql');

var db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: '',
	database: "college",
});
db.connect(function(error){
	if(error) throw error;
	db.query("select * from batchsubjectmap",function(err,result){
		if(err) throw err;
		console.warn("all results are here",result)
	})
});

module.exports = db