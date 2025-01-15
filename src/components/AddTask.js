import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';

/**
 * AddTask component allows the user to add a new task.
 * @param {function} onAdd - Function to call when a new task is added.
 */
const AddTask = ({ onAdd }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleAdd = (taskData) => {
      onAdd(taskData.title); // Adjust store logic to handle more fields
      // or modify your store to handle complete "taskData" object
    };
  
    return (
        <>
          <div
            // Button container styles
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#007BFF',
              borderRadius: '8px',
              cursor: 'pointer',
              padding: '6px 12px',
              color: '#fff',
              width: '20%',
            }}
          >
            <button
              onClick={() => setShowModal(true)}
              style={{
                border: 'none',
                background: 'none',
                color: 'inherit',
                fontSize: '16px',
                cursor: 'pointer',
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
