let mysql= require('mysql');

let con=mysql.createConnection({
	host: "localhost",
        user: "root",
        password: "1234",
	database: "newdata"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!");
	let sql="CREATE TABLE customer(id INT AUTO_INCREMENT primary key,name varchar(255))";
	con.query(sql, function(err,result){
		if (err) throw err;
		console.log("Table created!");
	});
});
	