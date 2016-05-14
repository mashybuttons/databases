var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {


      console.log('----------------- MES GET');

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('-----------------MES POST');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('-----------------USER GET');
    },
    post: function (req, res, callback) {
      console.log('-----------------USER POST');
      models.users.post(req.body, callback);
      //pass down the data to the model 
    }
  }
};

