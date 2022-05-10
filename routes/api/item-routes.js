const router = require('express').Router();
const {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    removeItem
} = require('../../controllers/item-controller');

router
  .route('/')
  .get(getAllItems)
  .post(createItem);

router
  .route('/:id')
  .get(getItemById)
  .put(updateItem)
  .delete(removeItem);

module.exports = router;