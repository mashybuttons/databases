var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

dbConnection.connect(function(err) {
  if (err) {
    console.log('ERR IN dbConnection', err);
  } else {
    console.log('IM CONNECTED');
  }
});
module.exports = dbConnection;
// exports.query = dbConnection.query.bind(dbConnection);

