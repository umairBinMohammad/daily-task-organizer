import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';

/**
 * AddTask component allows the user to add a new task.
 * @param {function} onAdd - Function to call when a new task is added.
 * 
 * Time complexity: O(1)
 */
const AddTask = ({ onAdd }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleAdd = (taskData) => {
      if (taskData.title.length > 15) {
        alert("Title cannot exceed 15 characters");
        return;
      }
      if (taskData.description.length > 30) {
        alert("Description cannot exceed 30 characters");
        return;
      }
      onAdd(taskData);
    };
  
    return (
        <>
          <div className="mb-4" style={{ textAlign: 'center', fontFamily: 'Macondo, serif' }}>
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
              Start Quest
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
