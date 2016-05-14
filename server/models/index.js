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
    post: function (data) {
      data = JSON.parse(data);
      module.exports.users.post(data);
      module.exports.rooms.post(data);


      db.query('INSERT INTO messages (message, user_id, room_id) values ("' + data.text + '", (select user_id from users where name = "' + data.username + '"), (select room_id from rooms where name = "' + data.roomname + '"))', function (err, results) { 
        if (err) {
          console.log(err);
        } 
        console.log('results', results);
      });
  
    }
  },
 
  users: {
    // Ditto as above.
    get: function () {},
    post: function (data) {

      db.query('INSERT IGNORE INTO users (name) values (' + '"' + data.username + '"' + ')', function (err) { 
        if (err) {
          console.log('IM AN ERROR', err); 
        }
        console.log('users query finished');
      });

    }
  },

  rooms: {
    // Ditto as above.
    get: function () {},
    post: function (data) {
      //IF user exist or not first
      db.query('INSERT IGNORE INTO rooms (name) values (' + '"' + data.roomname + '"' + ')', function (err) { 
        if (err) {
          console.log('IM AN ERROR', err); 
        }
        console.log('room query finished');
      });



    }
  }
};
// http://www.hacksparrow.com/using-mysql-with-node-js.html