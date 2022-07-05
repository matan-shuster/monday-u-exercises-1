//Define your endpoints here (this is your "controller file")
//

const express = require('express')
const ItemManager = require('../services/item_manager.js')
const morgan = require('morgan')
const winston = require('../logger/winston.js')

const router = express.Router()

router.use(morgan('combined', { stream: winston.stream }))
router.use(async (req, res, next) => {
  console.log('A request was made to the API')
  console.log(req.body)
  next()
})
const itemManager = new ItemManager()
router.get('/todos', async (req, res, next) => {
  res.send(await itemManager.getTodoList(req, res))
  next()
})
router.post('/todos', async (req, res, next) => {
  const renderedTodos = await itemManager.addTodo(req.body.todo)
  console.log(renderedTodos)
  res.status(200).json(renderedTodos)
})
router.put('/todos/:id/status', async (req, res) => {
  await itemManager.updateStatus(req.body.id, req.body.status)
  res.status(200).json(req.body.todo)
})

router.put('/todos/:id/urgency', async (req, res) => {
  await itemManager.updateUrgency(req.body.id, req.body.urgency)
  res.status(200).json(req.body.todo)
})

router.delete('/todos/selected', async (req, res) => {
  await itemManager.deleteSelected(req.body.selectedArray)
  res.status(200).json('selected cleared')
})
router.delete('/todos/:id', async (req, res) => {
  const { id } = req.params
  await itemManager.deleteTodo(id)
  res.status(200).json(req.body.id)
})
router.delete('/todos', async (req, res) => {
  await itemManager.clearTodoList()
  res.status(200).json('Todo list cleared')
})

module.exports = router
