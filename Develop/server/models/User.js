const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        items: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Item'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
);

// get total count of items on retrieval
UserSchema.virtual('itemCount').get(function() {
    return this.items.length
});

const User = model('User', UserSchema);

module.exports = User;