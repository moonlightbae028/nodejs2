const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.render('index'); // Make sure you have an 'index.ejs' view
});

module.exports = router;
