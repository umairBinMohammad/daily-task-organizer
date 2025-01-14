import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import useTaskStore from './store/taskStore';

/**
 * The main App component that renders the Daily Task Organizer.
 * It uses the task store to manage tasks and passes necessary props to child components.
 */
const App = () => {
  // Get tasks from the task store
  const tasks = useTaskStore((state) => state.tasks);
  // Function to add a new task
  const addTask = useTaskStore((state) => state.addTask);
  // Function to toggle the completion status of a task
  const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);
  // Function to delete a task
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Daily Task Organizer</h1>
      {/* Component to add a new task */}
      <AddTask onAdd={addTask} />
      {/* Component to list all tasks */}
      <TaskList
        tasks={tasks}
        onToggle={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
