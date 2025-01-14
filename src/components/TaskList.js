import React from 'react';
import Task from './Task';

/**
 * TaskList component renders a list of tasks.
 * 
 * @param {Object[]} tasks - Array of task objects to be displayed.
 * @param {Function} onToggle - Function to toggle the completion status of a task.
 * @param {Function} onDelete - Function to delete a task.
 */
const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
