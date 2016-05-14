var Promises = require('bluebird');
var db = require('../db');
// Promise.promisifyAll(db);
// var dbConnection = db.dbConnection;

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {


      ///REFACTOR ALL THIS FOR MESSAGES!!!!  5.13 9:45p


      // console.log('going into query');
      // console.log(db.query);
      // // 'INSERT INTO users (name) values (' + data.username + ')'
      // db.query('INSERT INTO users (name) values (' + '"' + data.username + '"' + ')', function (err) { 
      //   if (err) {
      //     console.log('IM AN ERROR', err); 
      //   }
      //   // console.log(rows);
      // });
      // // .then(function(user) {
      // //   console.log(user);
      // // });
      // callback(data);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data, callback) {
      console.log('going into query');
      console.log(db.query);
      // 'INSERT INTO users (name) values (' + data.username + ')'
      db.query('INSERT INTO users (name) values (' + '"' + data.username + '"' + ')', function (err) { 
        if (err) {
          console.log('IM AN ERROR', err); 
        }
        // console.log(rows);
      });
      // .then(function(user) {
      //   console.log(user);
      // });
      callback(data);
    }
  }
};

//{ username: 'Valjean' }

// http://www.hacksparrow.com/using-mysql-with-node-js.html