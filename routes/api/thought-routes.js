const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getAllThoughts)

router
.route('/:thoughtId')
.get(getOneThought)
.put(updateThought)
.delete(deleteThought)

router
.route('/:userId')
.post(addThought)
// .post(addReaction)

router
.route('/:userId/:thoughtId')
.post(addReaction)

router
.route('/:thoughtId/:reactionId')
.delete(deleteReaction)

module.exports = router;