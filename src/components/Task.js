import React from 'react';

/**
 * Task component represents a single quest item.
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.task - The quest object containing id, title, description, priority, and completed status.
 * @param {Function} props.onToggle - Function to toggle the completed status of the quest.
 * @param {Function} props.onDelete - Function to delete the quest.
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
        backgroundColor: '#faf3f7',
        maxWidth: '300px',
        margin: '0 auto',
        fontFamily: 'Cinzel, serif'
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
        // Quest name styles and click handler
        onClick={() => onToggle(task.id)}
        style={{
          cursor: 'pointer',
          flex: 1,
          fontFamily: 'Cinzel, serif'
        }}
      >
        <div style={{ fontWeight: 'bold', textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </div>
        <div style={{ color: '#555' }}>
          {task.description}
        </div>
        <div style={{ fontSize: '0.9em', color: '#777' }}>
          Difficulty: {task.priority}
        </div>
      </div>
      <button 
        // Delete button styles and click handler
        onClick={() => onDelete(task.id)} 
        style={{ marginLeft: '10px', color: '#ff4d4d', border: 'none', background: 'none', cursor: 'pointer' }}
      >
        Abandon Quest
      </button>
    </div>
  );
};

export default Task;
