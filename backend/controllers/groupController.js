const ChatContent = require('../models/chatsContent');
const ChatGroup = require('../models/chatGroup');

const getAllGroups = async (req, res) => {
    try {
        const groups = await ChatGroup.find({ participants: req.user._id });
        res.send(groups);
    }
    catch (err) {
        res.send(err);
    }
}

const getGroup = async (req, res) => {
    try {
        const chatGroup = req.params.chatGroup;
        const participants = await ChatGroup.findOne({ _id: chatGroup }).populate('participants');
        const messages = await ChatContent.find({ chatGroup: chatGroup }).populate('sender');
        res.send({ participants, messages });
    } catch (error) {
        res.send(error);
    }
}

const createGroup = async (req, res) => {
    try {
        const participants = req.body.participants;
        const name = req.body.name;
        participants.push(req.user._id);
        const admin = req.user._id;
        const chatGroup = new ChatGroup({ name, participants, admin });
        const savedChatGroup = await chatGroup.save();
        res.send(savedChatGroup);
    } catch (error) {
        res.send(error);
    }
}

const sendGroupMessage = async (req, res) => {
    try {
        const chatGroup = req.params.chatGroup;
        const sender = req.user._id;
        const content = req.body.content;
        const chatContent = new ChatContent({ chatGroup, sender, content });
        const savedChatContent = await chatContent.save();
        res.send(savedChatContent);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getAllGroups,
    getGroup,
    createGroup,
    sendGroupMessage,
}
