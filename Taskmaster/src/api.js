// Gets all tasks from the server
export const fetchTodos = () => {
  return fetch('/todos').then(res => res.json())
}

// Sends a new task to the server
export const createTask = (task) => {
  return fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  })
}

// Deletes a task from the server
export const deleteTask = (id) => {
  return fetch(`/todos/${id}`, { method: 'DELETE' })
}

// Deletes all tasks by calling deleteTask for each one
export const deleteAllTasks = (todos) => {
  return Promise.all(todos.map(todo => deleteTask(todo.id)))
}

// Updates just the status of a task (pending/complete/failed)
export const updateTaskStatus = (id, status) => {
  return fetch(`/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  })
}
