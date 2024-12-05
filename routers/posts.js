const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

//index NB per la ricerca  ad esempio del tag1 sara' /posts?tag=tag1.
router.get('/', postController.index);

//show
router.get('/:id', postController.show);

//create
router.post('/', postController.store);

//update
router.put('/:id', postController.update);

//modify
router.patch('/:id', postController.modify);

//destroy
router.delete('/:id', postController.destroy);




module.exports = router;