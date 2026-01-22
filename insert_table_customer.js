let mysql = require('mysql');

let con = mysql.createConnection({
	host: "localhost", user: "root", password: "1234", database: "newdata"});

con.connect(function (err) {

	if (err) throw err;
	console.log("Connected!");
	let sql = "INSERT INTO customer(id,name) VALUES(101,'Ram')";
	con.query(sql,function(err,result){
		if (err) throw err;
		console.log("1 row inserted");
	});
});
		