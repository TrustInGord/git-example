import { useState, useEffect } from 'react'
import './App.css'
import TaskList from './TaskList'
import * as api from './api'

// Main app component - displays the task list and manages all tasks
function App() {
  const [todos, setTodos] = useState([]) // Stores all tasks from the server

  // Fetches all tasks from the server and updates display
  const loadTodos = () => {
    api.fetchTodos().then(data => setTodos(data))
  }

  // Loads tasks
  useEffect(() => {
    loadTodos()
  }, [])

  // Deletes a single task and refreshes the list
  const handleDeleteTask = (id) => {
    api.deleteTask(id).then(() => loadTodos())
  }

  // Deletes all tasks
  const clearAll = () => {
    api.deleteAllTasks(todos).then(() => setTodos([]))
  }

  return (
    <TaskList 
      todos={todos}
      onTaskAdded={loadTodos}
      onDeleteTask={handleDeleteTask}
      onClearAll={clearAll}
    />
  )
}

export default App
