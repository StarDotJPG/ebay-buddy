const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const ItemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
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
        },
        section: {
            type: Schema.Types.ObjectId,
            ref: 'Section',
            required: true
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

const Item = model('Item', ItemSchema);

module.exports = Item;