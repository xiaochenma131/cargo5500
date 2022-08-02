const Schema = require('mongoose').Schema;

const messageSchema = new Schema({

    FromId: {
        type: String,
    },
    ToId: {
        type: String,
    },
    Content: {
        type: String
    },
    SendTime: {
        type: Date,
        default: Date.now
    },
    species: String,
    name: String,
}, {
    collection: 'message',
})

module.exports = messageSchema;