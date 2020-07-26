const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/submitForm', (req, res) => {
    console.log(req.body);
    res.send('Thanks For Submission');
});

router.get('/table', (req, res) => {
    res.render('table');
})

module.exports = router;