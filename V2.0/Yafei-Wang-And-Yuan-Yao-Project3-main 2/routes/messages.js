const express = require('express')
const MessageModel = require('./model/message.model')

const router = express.Router()

router.post('/myMessages', function (request, response) {
    const email = request.body.email;
    return MessageModel.getMessageByFromId(email)
        .then(allMessages => {
            response.status(200).send(allMessages);
        })
        .catch(err => {
            response.status(400).send(err)
        })
});

module.exports = router;