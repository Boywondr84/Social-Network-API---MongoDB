const router = require('express').Router();
const {
    addThought
} = require('../../controllers/thought-controller');

router
.route('/:userId')
.post(addThought)

router
.route('/:userId/:thoughtId')

module.exports = router;