const express = require('express');
const router = express.Router();

require('../controllers/groupController');
const { auth } = require('../middlewares/auth');

router.post('/group', createGroup);
router.get('/group', getAllGroups);
router.get('/group/:chatGroup', getGroup);
router.post('/group/:chatGroup', sendGroupMessage);


module.exports = router;

