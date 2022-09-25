const { User, Thought } = require('../models');

const thoughtController = {
    addThought({ params, body} , res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id }},
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "User not found" });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    }
}

module.exports = thoughtController;