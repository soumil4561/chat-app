const mongoose = require('mongoose');

const chatGroupSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ChatGroup = mongoose.model('ChatGroup', chatGroupSchema);

module.exports = ChatGroup;

