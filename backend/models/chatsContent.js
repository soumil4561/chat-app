const mongoose = require('mongoose');

const chatContentSchema = new mongoose.Schema({
    chatGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatGroup',
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },  
    readStatus: {
        type: Boolean,
        default: false,
    },
});

const ChatContent = mongoose.model('ChatContent', chatContentSchema);

module.exports = ChatContent;