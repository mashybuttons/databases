var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('----------------- MES GET');
      models.messages.get(req, res);


    }, // a function which handles a get request for all messages
    post: function (req, res, callback) {
      console.log('-----------------MES POST');
      models.messages.post(req.body, callback);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res, callback) {
      console.log('-----------------USER GET');
      console.log('users get: ', req.body);
      console.log(req.body);
      models.users.get(req.body, res, callback);
    },
    post: function (req, res, callback) {
      console.log('-----------------USER POST');
      models.users.post(req.body, callback);
      //pass down the data to the model 
    }
  }
};

