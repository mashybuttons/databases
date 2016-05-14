var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('----------------- MES GET');
      models.messages.get(req, res);


    }, // a function which handles a get request for all messages
    post: function (req, res) {

      console.log('-----------------MES POST');
      var body = '';
      req.on('data', function(chunk) {
        body += chunk;
      }).on('end', function() {
        console.log(body);
        models.messages.post(body);
      });


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('-----------------USER GET');
 
      models.users.get(req.body, res);
    },
    post: function (req, res) {
      console.log('-----------------USER POST');
      models.users.post(req.body);
      //pass down the data to the model 
    }
  }
};

