import React from 'react';
import Task from './Task';

/**
 * TaskList component renders a list of quests.
 * 
 * @param {Object[]} tasks - Each quest has title, description, priority, dueDate, etc.
 * @param {Function} onToggle - Function to toggle the completion status of a quest.
 * @param {Function} onDelete - Function to delete a quest.
 * @param {Function} onTurnIn - Function to turn in a quest.
 * 
 * Time complexity: O(n)
 */
const TaskList = ({ tasks, onToggle, onDelete, onTurnIn }) => {
    return (
        <div className="space-y-2" style={{ maxWidth: '80%', margin: '0 auto', fontFamily: 'Cinzel, serif' }}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onTurnIn={onTurnIn}
            />
          ))}
        </div>
      );
};

export default TaskList;
