import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div
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
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {task.name}
      </div>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
};

export default Task;
