import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';

/**
 * AddTask component allows the user to add a new task.
 * @param {function} onAdd - Function to call when a new task is added.
 */
const AddTask = ({ onAdd }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleAdd = (taskData) => {
      onAdd(taskData);
    };
  
    return (
        <>
          <div className="mb-4" style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowModal(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '20%',
              }}
            >
              Add Task
            </button>
          </div>
      
          {showModal && (
            <AddTaskModal
              onAdd={handleAdd}
              onClose={() => setShowModal(false)}
            />
          )}
        </>
      );
  };

export default AddTask;
