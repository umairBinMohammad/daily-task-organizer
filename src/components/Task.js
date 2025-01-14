import React from 'react';

/**
 * Task component represents a single task item.
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.task - The task object containing id, name, and completed status.
 * @param {Function} props.onToggle - Function to toggle the completed status of the task.
 * @param {Function} props.onDelete - Function to delete the task.
 */
const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div
      // Container styles
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    >
      <div
        // Task name styles and click handler
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {task.name}
      </div>
      <button 
        // Delete button styles and click handler
        onClick={() => onDelete(task.id)} 
        style={{ marginLeft: '10px' }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
