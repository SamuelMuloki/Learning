module.exports = function(app) {
    var index = require('../controllers/index.server.contoller');
    app.get('/', index.render);
}
