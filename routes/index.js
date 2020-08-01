const router = require('express').Router();
const { getMessageByID, create, get, getOne, updateOne, deleteOne } = require('../controllers/index');

router.param('messageID', getMessageByID);

router.post('/create', create); // route for creating new message
router.get('/getAll', get); // route for getting all messages
router.get('/getOne/:messageID', getOne); // route for getting one message
router.put('/updateOne/:messageID', updateOne) // route for updating one message
router.delete('/deleteOne/:messageID', deleteOne); // route for deleting one message

module.exports = router;