const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Item = require('./Item');

const UserSchema = new Schema(
    {
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
        items: [Item.schema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
  // compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

// get total count of items on retrieval
UserSchema.virtual('itemCount').get(function() {
    return this.items.length
});

const User = model('User', UserSchema);

module.exports = User;