var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var websiteURl = function(url) {
    if (!url) {
        return url
    } else {
        if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
            url = 'http://' + url;
        }
        return url;
    }
}

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String
    },
    username: {
        type: String,
        trim: true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now,
    },
    website: {
        type: String,
        set: websiteURl,
        get: websiteURl
    }
});

userSchema.virtual('fullName').get(function () {
    return this.firstName + '' + this.lastName;
}).set(function (fullName) {
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// userSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('User', userSchema);
