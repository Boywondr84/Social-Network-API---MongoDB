const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// const ReactionSchema = new Schema({

// })

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        // 1 -280 characters
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },

    userName: {
        type: String,
        required: true
    },

    // reactions: [ReactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;