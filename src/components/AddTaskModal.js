import React, { useState } from 'react';

const AddTaskModal = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ title, description });
      onClose();
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form 
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          minWidth: '300px',
        }}
      >
        <h2>Add New Task</h2>
        <div style={{ marginBottom: '10px' }}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit">Add Task</button>
        <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
      </form>
    </div>
  );
};

export default AddTaskModal;