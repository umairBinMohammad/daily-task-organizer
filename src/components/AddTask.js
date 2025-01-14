import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAdd(taskName);
      setTaskName('');
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
