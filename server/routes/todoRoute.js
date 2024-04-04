const express = require("express")
const router = express.Router()
const multer = require("multer")
const verifyJWT=require('../middleware/verifyJWT')

const todoController = require("../controller/todoController");
const upload = multer({ dest: './' })
router.get('/:done',verifyJWT,todoController.getTodosByComplete)
router.get('/',verifyJWT,todoController.getTodoByUserId)
router.post('/',  upload.single('imageUrlMan'),verifyJWT,todoController.createNewTodo )
router.delete('/',verifyJWT,todoController.deleteTodo)
router.put('/', upload.single('imageUrlMan') ,verifyJWT,todoController.updateTodo)

module.exports = router