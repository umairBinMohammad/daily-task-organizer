import React, { useState } from 'react';

const AddTaskModal = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Easy'); // Set default to 'Easy'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ title, description, priority });
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
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Add New Quest</h2>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Quest Name:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: 'calc(100% - 20px)',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              margin: '0 10px',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Backstory:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: 'calc(100% - 20px)',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              margin: '0 10px',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Difficulty:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            style={{
              width: 'calc(100% - 20px)',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              margin: '0 10px',
              boxSizing: 'border-box',
            }}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button 
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Add Quest
          </button>
          <button 
            type="button" 
            onClick={onClose} 
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;