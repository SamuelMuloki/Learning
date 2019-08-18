var config = require('./config'),
mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db, { useNewUrlParser: true, useFindAndModify: false });

    require('../app/models/user.server.model');

    return db;
}
