const { Item } = require('../models');

const itemController = {
  getAllItems(req, res) {
    Item.find({})
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbItemData => res.json(dbItemData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  getItemById({ params }, res) {
    Item.findOne({ _id: params.id })
      .select('-__v')
      .then(dbItemData => res.json(dbItemData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  createItem({ body }, res) {
    Item.create(body)
      .then(dbItemData => res.json(dbItemData))
      .catch(err => res.json(err));
  },

  updateItem({ params, body }, res) {
    Item.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbItemData => {
        if (!dbItemData) {
          res.status(404).json({ message: 'No item found with this id!' });
          return;
        }
        res.json(dbItemData);
      })
      .catch(err => res.status(400).json(err));
  },

  // delete pizza
  deleteItem({ params }, res) {
    Item.findOneAndDelete({ _id: params.id })
      .then(dbItemData => res.json(dbItemData))
      .catch(err => res.json(err));
  }
};

module.exports = itemController;