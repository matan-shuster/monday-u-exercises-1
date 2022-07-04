// Create an ItemClient class here. This is what makes requests to your express server (your own custom API!)

const apiUrl = 'http://localhost:3000/todos'
export default class item_client {
  async getTodos() {
    try {
      const response = await fetch(`${apiUrl}`)
      const data = await response.json()
      return data
    } catch (e) {
      console.log(e)
    }
  }

  addTodo(todo) {
    return fetch(`${apiUrl}`, {
      method: 'POST',
      body: JSON.stringify({ todo }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
  }

  updateStatus(id, status) {
    return fetch(`${apiUrl}/status`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        status: status
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
  }

  updateUrgency(id, urgency) {
    return fetch(`${apiUrl}/urgency`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        urgency: urgency
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
  }

  async deleteSelected(selectedArray) {
    await fetch(`${apiUrl}/selected`, {
      method: 'DELETE',
      body: JSON.stringify({ selectedArray }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
  }
  async deleteTodo(id) {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
  }

  async clearTodoList() {
    await fetch(`${apiUrl}`, {
      method: 'DELETE'
    })
  }
}
