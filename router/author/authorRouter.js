const router = require('express').Router();

const {authorController} = require('../../controller');

router.post('/',authorController.createAuthor);

module.exports = router;