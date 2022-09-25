const { Schema, model } = require('mongoose');
// const dateFormat add later

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

    userThoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ]
},
    {
        userFriends: [
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
    return this.friends.reduce((total, friend) => total + friend.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = User;