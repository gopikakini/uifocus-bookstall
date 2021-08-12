const bookstall = require('./bookstall');

const router = require('express').Router();


// Example endpoint becomes http://localhost:PORT/api/books
router.use('/api',bookstall);

module.exports = router;
