const Schema = require('mongoose').Schema;

const messageSchema = new Schema({
    CarId: {
		type: Schema.Types.ObjectId,
	},
    FromId: String,
    ToId: String,
    Content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    collection: 'message',
})

module.exports = messageSchema;