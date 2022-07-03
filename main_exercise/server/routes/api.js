//Define your endpoints here (this is your "controller file")
//

const express = require("express");
const ItemManager = require("../services/item_manager.js");

const router = express.Router();

router.use(async (req, res, next) => {
    console.log("A request was made to the API");
    console.log(req.body)
    next();
});
const itemManager = new ItemManager();
router.get('/todos', async (req, res) => {
    res.send(await itemManager.getTodoList(req, res));
});
router.post('/todos', async (req, res) => {
   const renderedTodos= await itemManager.addTodo(req.body.todo);
   console.log(renderedTodos)
    res.status(200).json(renderedTodos);
});
router.put('/todos/status', async (req, res) => {
    await itemManager.updateStatus(req.body.id, req.body.status);
    res.status(200).json(req.body.todo);
});

router.put('/todos/urgency', async (req,res) => {
    await itemManager.updateUrgency(req.body.id,req.body.urgency);
    res.status(200).json(req.body.todo)
})

router.delete('/todos/single', async (req, res) => {
    await itemManager.deleteTodo(req.body.id);
    res.status(200).json(req.body.id);
});
router.delete('/todos', async (req, res) => {
    await itemManager.clearTodoList();
    res.status(200).json("Todo list cleared");
});

router.delete('/todos/selected', async (req, res) => {
    await itemManager.deleteSelected(req.body.selectedArray);
    res.status(200).json("selected cleared");
});
module.exports = router;