// const mysql = require("mysql");
var mysql = require("mysql")
var conn = mysql.createConnection({
  host: "localhost",
  user: "root@localhost",
  password: "Blaze@123",
  database: "HR_DB",
});

conn.connect(function (err) {
  if (err) {
    console.log("Connection Error...");
    console.error(err);
  } else {
    console.log("Successfully connected....");
  }
});

conn.end(function (err) {
  if (err) {
    console.error(err);
  }
});
