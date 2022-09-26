const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    addThought
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getAllThoughts)

router
.route('/:thoughtId')
.get(getOneThought)

router
.route('/:userId')
// .get(getOneThought)
.post(addThought)

router
.route('/:userId/:thoughtId')

module.exports = router;