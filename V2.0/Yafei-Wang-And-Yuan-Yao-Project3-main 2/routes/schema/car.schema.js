const Schema = require('mongoose').Schema;

const carSchema = new Schema({
    Username: String,
    Vin: {
        require: true,
        type: String
    },
    Year: {
        type: Number
    },
    Make: {
        type: String
    },
    Model: {
        type: String
    },
    Trim: {
        type: String
    },
    Body: {
        type: String
    },
    Transmission: {
        type: String
    },
    State: {
        type: String
    },
    Odometer: {
        type: Number
    },
    CarCondition: {
        type: Number
    },
    Color: {
        type: String
    },
    Interior: {
        type: String
    },
    Mmr: {
        type: Number
    },
    SellingPrize: {
        type: Number
    },
    SellerId: {
        type: Number
    }
}, {
    collection: 'car',
})

module.exports = carSchema;