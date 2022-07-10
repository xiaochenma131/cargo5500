const Schema = require('mongoose').Schema;

const UserSchema = new Schema({
    FirstName: {
        type: String,
        unique: true,
    },
    LastName: {
        type: String,
        unique: true,
    },
    Email: {
        type: String,
        unique: true,
    },
    PassWord: {
        type: String,
    },
    DOB: {
        type: String,
    },
    Zip: {
        type: Number,
    },
    Phone: {
        type: Number
    },
}, {
    collection: 'users',
})

module.exports = UserSchema;