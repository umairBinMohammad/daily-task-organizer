import React from 'react';

/**
 * Task component represents a single task item.
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.task - The task object containing id, title, description, priority, and completed status.
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
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        maxWidth: '300px', // Added to make the task list narrower
        margin: '0 auto' // Center the component
      }}
    >
      <div style={{ marginRight: '8px' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
      </div>
      <div
        // Task title styles and click handler
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flex: 1
        }}
      >
        {task.title}
      </div>
      <div style={{ fontSize: '0.9em', color: '#555' }}>
        {task.description} | Priority: {task.priority}
      </div>
      <button 
        // Delete button styles and click handler
        onClick={() => onDelete(task.id)} 
        style={{ marginLeft: '10px', color: '#ff4d4d', border: 'none', background: 'none', cursor: 'pointer' }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
