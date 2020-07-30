const router = require('express').Router();

const { createMessage, findAllPOST } = require('../controllers/messageController');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', createMessage);

router.get('/table', findAllPOST);

module.exports = router;