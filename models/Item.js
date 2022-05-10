const { Schema, model } = require('mongoose');

const ItemSchema = new Schema(
    {
        name: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        size: {
            type: String
        },
        weight: {
            type: Number
        }
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
);

// PizzaSchema.virtual('commentCount').get(function() {
//     return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
// });

const Item = model('Item', ItemSchema);

module.exports = Item;