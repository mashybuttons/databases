var Promises = require('bluebird');
var db = require('../db');
// Promise.promisifyAll(db);
// var dbConnection = db.dbConnection;

module.exports = {
  messages: {
    get: function (req, res) {
      db.query('SELECT * FROM messages', function (err, result, field) {
        if (err) {
          console.log('ERR ', err);
        }
        res.send(JSON.stringify(result));
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      db.query('INSERT INTO messages (message) values (' + '"' + data.message + '"' + ')', function (err, results) { 
        if (err) {
          console.log('IM AN ERROR', err); 
        } 
      });
      callback(data);
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data, callback) {
      console.log(data.username);
      db.query('INSERT INTO users (name) values (' + '"' + data.username + '"' + ')', function (err) { 
        if (err) {
          console.log('IM AN ERROR', err); 
        }
      });

      callback(data);
    }
  }
};

// http://www.hacksparrow.com/using-mysql-with-node-js.html