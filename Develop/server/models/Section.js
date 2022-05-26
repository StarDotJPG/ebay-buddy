const { Schema, model } = require('mongoose');
const Item = require('./Item');

const SectionSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        full: {
            type: Boolean,
            default: false
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

// get total count of items on retrieval
SectionSchema.virtual('itemCount').get(function() {
    return this.items.length
});

const Section = model('Section', SectionSchema);

module.exports = Section;