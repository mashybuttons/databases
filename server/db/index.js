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
// exports.query = dbConnection.query.binds(dbConnection);

//SEQUALIZED VERSION

// var Sequelize = require('sequelize');
// var db = new Sequelize('chat', 'root', '');
// /* TODO this constructor takes the database name, username, then password.
//  * Modify the arguments if you need to */

// /* first define the data structure by giving property names and datatypes
//  * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// var User = db.define('Users', {
//   name: Sequelize.STRING,
//   'name_id': Sequelize.INTEGER
// });
// var Room = db.define('Rooms', {
//   name: Sequelize.STRING,
//   'room_id': Sequelize.INTEGER
// });
// var Message = db.define('Message', {
//   'user_id': Sequelize.INTEGER,
//   message: Sequelize.STRING,
//   'room_id': Sequelize.INTEGER,
//   'message_id': Sequelize.INTEGER
// });

// module.exports = {
  
//   db: db,
//   Message: Message,
//   User: User,
//   Room: Room
// };

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
// User.sync()
//   .then(function() {
//     // Now instantiate an object and save it:
//     return User.create({username: 'Jean Valjean'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return User.findAll({ where: {username: 'Jean Valjean'} });
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(user.username + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });