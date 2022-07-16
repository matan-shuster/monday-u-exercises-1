// The ItemManager should go here. Remember that you have to export it.

const { Todo } = require('../db/models')
const PokemonClient = require('../clients/pokemon_client.js')

class ItemManager {
  // Constructor
  constructor() {
    this.pokemonClient = new PokemonClient()
    this.todoList = this.getTodoList() || []
  }

  trimSpaces(splitList) {
    const regex = /\s/g
    let cleanList = splitList.map((element) => element.replace(regex, ''))
    return cleanList
  }

  checkNumbers(splitList) {
    const regex = /^\d+$/
    return this.trimSpaces(splitList).every((element) => regex.test(element))
  }

  async createTodo(todoObject) {
    const {
      dataValues: { id }
    } = await Todo.create({
      ...todoObject
    })
    return { todoObject, id }
  }

  async addTodo(todo) {
    const splitList = todo.split(',')
    const renderedTodos = []

    if (this.checkNumbers(splitList)) {
      const pokemonIDArray = splitList
      const pokemonNameArray = await this.pokemonClient.getPokemons(
        this.trimSpaces(splitList)
      )
      for (const element of pokemonNameArray) {
        const todoObject = {
          todo: element,
          pokemonID: pokemonIDArray[pokemonNameArray.indexOf(element)],
          isPokemon: true
        }
        const generatedTodo = await this.createTodo(todoObject)
        renderedTodos.push({
          ...generatedTodo.todoObject,
          id: generatedTodo.id
        })
      }
    } else {
      const todoObject = {
        todo: todo,
        isPokemon: false
      }
      const generatedTodo = await this.createTodo(todoObject)
      renderedTodos.push({ ...generatedTodo.todoObject, id: generatedTodo.id })
    }
    return renderedTodos
  }

  async getTodoList() {
    try {
      const data = (await Todo.findAll()).map((element) =>
        element.get({ plain: true })
      )
      return data
    } catch {
      console.log('No todo list found')
      return []
    }
  }

  async deleteTodo(id) {
    await Todo.destroy({
      where: { id }
    })
  }

  async deleteSelected(idArray) {
    await Todo.destroy({
      where: { id: idArray }
    })
  }

  ש

  async clearTodoList() {
    await Todo.destroy({
      where: {}
    })
  }

  async updateStatus(id, status) {
    await Todo.update(
      {
        status
      },
      {
        where: { id }
      }
    )
  }

  async updateUrgency(id, urgency) {
    await Todo.update(
      {
        urgency
      },
      {
        where: { id }
      }
    )
  }
}

module.exports = ItemManager
