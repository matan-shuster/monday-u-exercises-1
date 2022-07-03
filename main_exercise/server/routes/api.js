//Define your endpoints here (this is your "controller file")
//
// import express from "express";
const express = require("express");
// import ItemManager from "../services/item_manager.js";
const ItemManager = require("../services/item_manager.js");

const router = express.Router();

router.use(async (req, res, next) => {
    console.log("A request was made to the API");
    console.log(req.body)
    next();
});
const itemManager = new ItemManager();
router.get('/todos', async (req, res) => {
    res.send(await itemManager.getTodoList(req,res));
});
router.post('/todo', async (req, res) => {
    await itemManager.addTodo(req.body.todo);
    res.status(200).json(req.body.todo);
});
router.put('/todo', async (req, res) => {
    await itemManager.updateStatus(req.body.todo, req.body.status);
    res.status(200).json(req.body.todo);
});

router.delete('/todo',async (req, res) => {
    await itemManager.deleteTodo(req.body.todo);
    res.status(200).json(req.body.todo);
});
router.delete('/todos',async (req, res) => {
    await itemManager.clearTodoList();
    res.status(200).json("Todo list cleared");
});
module.exports = router;