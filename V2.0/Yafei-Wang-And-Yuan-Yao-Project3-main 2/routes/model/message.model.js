const mongoose = require('mongoose');

const messageSchema = require('../schema/review.schema');

const messageModel = mongoose.model("Message", messageSchema);

function createMessage(message) {
    return messageModel.create(message);
}

function getMessageByEmail(Email) {
    return messageModel.find({
        Email: Email
    }).exec();
}

// function getReviewByReviewId(reviewId) {
//     return ReviewModel.findOne({
//         _id: reviewId
//     }).exec();
// }

// function deleteReviewByReviewId(reviewId) {
//     return ReviewModel.findByIdAndDelete(reviewId).exec()
// }

// function updateReviewByReviewId(review, newReview) {
//     return ReviewModel.findOneAndUpdate(
//         review,
//         newReview,
//         { new: true }
//     );
// }


module.exports = {
    createMessage,
    getMessageByEmail,
}