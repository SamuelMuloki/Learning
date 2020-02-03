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
        type: String,
        match: /.+\@.+\..+/
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        validate: [
            function(password) {
                return password.length >= 6;
            },
            'Passwords should be longer'
        ]
    },
    created: {
        type: Date,
        default: Date.now,
    },
    website: {
        type: String,
        set: websiteURl,
        get: websiteURl
    },
    role: {
        type: String,
        enum: ['Admin', 'Owner', 'User']
    }
});

userSchema.virtual('fullName').get(function () {
    return this.firstName + '' + this.lastName;
}).set(function (fullName) {
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// custom static methods
userSchema.statics.findOneByUsername = function(username, callback) {
    this.findOne({ userName: new RegExp(username, 'i')}, callback);
};

// custom instance methods
userSchema.methods.authenticate = function(password) {
    return this.password === password;
};

// userSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('User', userSchema);
