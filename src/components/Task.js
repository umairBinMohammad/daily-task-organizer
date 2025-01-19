import React from 'react';

/**
 * Task component represents a single quest item.
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.task - The quest object containing id, title, description, priority, and completed status.
 * @param {Function} props.onToggle - Function to toggle the completed status of the quest.
 * @param {Function} props.onDelete - Function to delete the quest.
 * @param {Function} props.onTurnIn - Function to turn in the quest.
 * 
 * Time complexity: O(1)
 */
const Task = ({ task, onToggle, onDelete, onTurnIn }) => {
  return (
    <div
      // Container styles
      style={{
        display: 'flex',
        alignItems: 'flex-start', // Changed from 'center' to 'flex-start'
        justifyContent: 'space-between',
        flexDirection: 'column', // Added to ensure vertical alignment
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#faf3f7',
        maxWidth: '400px',
        margin: '0 auto',
        fontFamily: 'Macondo, serif',
        wordWrap: 'break-word',
        overflow: 'hidden',
        whiteSpace: 'normal'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
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
            fontFamily: 'Macondo, serif'
          }}
        >
          <div style={{ fontWeight: 'bold', textDecoration: task.completed ? 'line-through' : 'none', wordWrap: 'break-word' }}>
            {task.title}
          </div>
          <div style={{ color: '#555', wordWrap: 'break-word' }}>
            {task.description}
          </div>
          <div style={{ fontSize: '0.9em', color: '#777' }}>
            Difficulty: {task.priority}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <button 
          // Delete button styles and click handler
          onClick={() => onDelete(task.id)} 
          style={{ marginLeft: '10px', color: '#ff4d4d', border: 'none', background: 'none', cursor: 'pointer' }}
        >
          Abandon Quest
        </button>
        <button 
          onClick={() => onTurnIn(task.id)}
          style={{ marginLeft: '10px', color: '#28a745', border: 'none', background: 'none', cursor: 'pointer' }}
        >
          Turn in Quest
        </button>
      </div>
    </div>
  );
};

export default Task;
