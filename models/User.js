const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    userEmail: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        // look into validator npm package https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
        // near bottom of page
        unique: true
    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
        {
            toJSON: {
                virtuals: true
            },
            id: false
        }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;