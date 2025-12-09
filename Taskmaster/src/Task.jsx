import { useState } from 'react'
import './Task.css'
import * as api from './api'

// This component displays a single task with its details
function Task({ task, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(true) // Controls if task details are shown
  const [status, setStatus] = useState(task.status || 'pending') // Current status of the task

  // Changes the task status when the status circle is clicked
  const cycleStatus = (e) => {
    e.stopPropagation() // stops from shrinking header (working!)
    let newStatus
    // Cycle through: pending -> complete -> failed -> pending. Could have used enum. 
    if (status === 'pending') { newStatus = 'complete' }
    else if (status === 'complete') { newStatus = 'failed' }
    else newStatus = 'pending'
    
    setStatus(newStatus) // Update the display
    api.updateTaskStatus(task.id, newStatus) // Save to server
  }

  // Returns the symbol to show in the status circle
  const getStatusDisplay = () => {
    if (status === 'pending') return '' // Yellow circle
    if (status === 'complete') return '✓' // Green checkmark
    return '✗' // Red X (Robin the Villain)
  }

  return (
    <tr className="taskRow">
      <td colSpan="2">
        <div className="taskHeader" onClick={() => setIsExpanded(!isExpanded)}>
          <h2 className="taskTitle">{task.title}</h2>
          <div className="taskHeaderButtons">
            <div className={`statusCircle ${status}`} onClick={cycleStatus}>
              {getStatusDisplay()}
            </div>
            <button className="deleteBtn" onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}>Delete</button>
          </div>
        </div>
        {isExpanded && (
          <section className="taskContent">
            <article className="taskBottom">
              <ul className="taskSubtasks">
                {task.subtasks && task.subtasks.map((subtask, index) => (
                  <li key={index}>
                    {typeof subtask === 'string' ? subtask : `${subtask.task} - ${subtask.person}`}
                  </li>
                ))}
              </ul>
              <div className="taskPerson">{task.person}</div>
            </article>
            <div className="taskId">ID: {task.id}</div>
          </section>
        )}
      </td>
    </tr>
  )
}

export default Task
