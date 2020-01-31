var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    created: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('User', userSchema);
