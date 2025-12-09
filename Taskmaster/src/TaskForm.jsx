import { useState } from 'react'
import * as api from './api'
import './TaskForm.css'

// This component displays the form for adding new tasks
function TaskForm({ onTaskAdded }) {
  // State variables store the form input values
  const [title, setTitle] = useState('') 
  const [person, setPerson] = useState('') 
  const [subtask, setSubtask] = useState('') 
  const [subtaskPerson, setSubtaskPerson] = useState('') 
  const [subtasks, setSubtasks] = useState([]) 

  // Todo: Make a task object and incorporate task (taskName), person (personName), subtask (subtaskName), subtaskPerson (subtaskPersonName) into it. 
  // Either push onto substack the task, or make an array a sub of the task object.

  // Adds a subtask to the list when the + button is clicked
  const addSubtask = () => {
    if (subtask.trim()) { 
      setSubtasks([...subtasks, { task: subtask, person: subtaskPerson }])
      setSubtask('') 
      setSubtaskPerson('')
    }
  }

  // Submits the new task to the server
  const handleSubmit = () => {
    let finalSubtasks = [...subtasks]
    if (subtask.trim()) {
      finalSubtasks.push({ task: subtask, person: subtaskPerson })
    }
    
    // Create the task object with all the data
    const newTask = { title, person, subtasks: finalSubtasks, status: 'pending' }
    
    // Send to server and clear the form when done
    api.createTask(newTask).then(() => {
      onTaskAdded() 
      setTitle('')
      setPerson('')
      setSubtask('')
      setSubtaskPerson('')
      setSubtasks([])
    })
  }

  return (
    <tr>
      <td colSpan="2">
        <div className="taskFormTitleContainer">
          <input 
            type="text" 
            placeholder="Task Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="taskFormTitleInput"
          />
        </div>
        <div className="taskFormSubtaskContainer">
          <input 
            type="text" 
            placeholder="Subtask" 
            value={subtask} 
            onChange={(e) => setSubtask(e.target.value)} 
            className="taskFormSubtaskInput"
          />
          <input 
            type="text" 
            placeholder="Person" 
            value={subtaskPerson} 
            onChange={(e) => setSubtaskPerson(e.target.value)} 
            className="taskFormPersonInput"
          />
          <button type="button" onClick={addSubtask} className="taskFormRoundedButton">+</button>
        </div>
        <ul>
          {subtasks.map((st, i) => <li key={i}>{st.task} - {st.person}</li>)}
        </ul>
        <div className="taskFormMainPersonContainer">
          <input 
            type="text" 
            placeholder="Person" 
            value={person} 
            onChange={(e) => setPerson(e.target.value)} 
            className="taskFormMainPersonInput"
          />
          <button onClick={handleSubmit} className="taskFormRoundedButton">Add</button>
        </div>
      </td>
    </tr>
  )
}

export default TaskForm
