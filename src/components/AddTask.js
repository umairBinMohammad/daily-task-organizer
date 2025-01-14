import React, { useState } from 'react';

/**
 * AddTask component allows the user to add a new task.
 * @param {function} onAdd - Function to call when a new task is added.
 */
const AddTask = ({ onAdd }) => {
  // State to hold the name of the new task
  const [taskName, setTaskName] = useState('');

  /**
   * Handles the form submission.
   * @param {object} e - Event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAdd(taskName); // Call the onAdd function with the new task name
      setTaskName(''); // Reset the task name input field
    }
  };

  return (
    <div
      // Wrapper styles for the form container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        maxWidth: '80%',
        margin: '0 auto',
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: '70%', display: 'flex', alignItems: 'center' }}>
        <div
          // Input container styles
          style={{
            display: 'flex',
            flex: 1,
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '0 10px',
          }}
        >
          <input
            type="text"
            placeholder="Add a new task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              flex: 1,
              padding: '10px',
              fontSize: '16px',
            }}
          />
        </div>
        <div
          // Button container styles
          style={{
            marginLeft: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#007BFF',
            borderRadius: '8px',
            cursor: 'pointer',
            padding: '6px 12px',
            color: '#fff',
          }}
        >
          <button
            type="submit"
            style={{
              border: 'none',
              background: 'none',
              color: 'inherit',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
