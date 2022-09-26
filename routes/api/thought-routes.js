const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    addThought,
    updateThought
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getAllThoughts)

router
.route('/:thoughtId')
.get(getOneThought)
.put(updateThought)

router
.route('/:userId')
// .get(getOneThought)
.post(addThought)

router
.route('/:userId/:thoughtId')

module.exports = router;