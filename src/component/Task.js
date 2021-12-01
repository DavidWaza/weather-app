import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({tasks, onDelete, onToggle}) => {
    return (
        <div className={`event ${tasks.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(tasks.id)}>
            <h3>{tasks.text} <FaTimes style={{color: 'red'}} onClick={() => onDelete(tasks.id)}/></h3>
            <p>{tasks.time}</p>
        </div>
    )
}

export default Task
