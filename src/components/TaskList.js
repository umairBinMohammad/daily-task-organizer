import React from 'react';
import Task from './Task';

/**
 * TaskList component renders a list of tasks.
 * 
 * @param {Object[]} tasks - Each task has title, description, priority, dueDate, etc.
 * @param {Function} onToggle - Function to toggle the completion status of a task.
 * @param {Function} onDelete - Function to delete a task.
 */
const TaskList = ({ tasks, onToggle, onDelete }) => {
    return (
        <div className="space-y-2" style={{ maxWidth: '80%', margin: '0 auto' }}>
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
