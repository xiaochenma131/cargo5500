const express = require('express')
const MessageModel = require('./model/message.model')

const router = express.Router()

router.get('/myMessages', function (request, response) {
    return MessageModel.getAllMessages()
        .then(allMessages => {
            response.status(200).send(allMessages);
        })
        .catch(err => {
            response.status(400).send(err)
        })
});

module.exports = router;