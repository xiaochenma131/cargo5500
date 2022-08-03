const express = require('express')
const MessageModel = require('./model/message.model')

const router = express.Router()

router.post('/myMessages', function (request, response) {
    const email = request.body.Email;
    return MessageModel.getMessageByEmail(email)
        .then(allMessages => {
            response.status(200).send(allMessages);
        })
        .catch(err => {
            response.status(400).send(err)
        })
});

module.exports = router;