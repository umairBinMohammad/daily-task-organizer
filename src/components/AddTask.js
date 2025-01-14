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
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        style={{
          padding: '10px',
          width: '70%',
          marginRight: '10px',
        }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
