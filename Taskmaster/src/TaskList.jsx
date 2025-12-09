import Task from './Task'
import TaskForm from './TaskForm'

// This component displays the task table with header and all tasks
function TaskList({ todos, onTaskAdded, onDeleteTask, onClearAll }) {
  return (
    <>
      <h1>Taskmaster</h1>
      
      <table>
        <thead>
          <tr>
            <th>Task & Subtasks</th>
            <th>Person</th>
          </tr>
        </thead>
        <tbody>
          <TaskForm onTaskAdded={onTaskAdded} />
          {todos.map(todo => (
            <Task key={todo.id} task={todo} onDelete={onDeleteTask} />
          ))}
        </tbody>
      </table>
      
      <div style={{ textAlign: 'right', marginTop: '10px' }}>
        <button className="clearButton" onClick={onClearAll}>Clear All Tasks</button>
      </div>
    </>
  )
}

export default TaskList
