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
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4" style={{ maxWidth: '300px', margin: '0 auto' }}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{ borderColor: '#ddd', borderRadius: '8px' }}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        style={{ borderRadius: '8px' }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
