const router = require('express').Router();

const {authController:{authAuthor}} = require('../../controller');

router.post('/', authAuthor);

module.exports = router;