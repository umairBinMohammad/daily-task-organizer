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
    <div className="p-4 max-w-md mx-auto bg-gray-100 min-h-screen" style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h1 className="text-xl font-bold text-center mb-4">Daily Task Organizer</h1>
      {/* Component to add a new task */}
      <div className="mb-4">
        <AddTask onAdd={addTask} />
      </div>
      {/* Component to list all tasks */}
      <div className="mt-4">
        <TaskList
          tasks={tasks}
          onToggle={toggleTaskCompletion}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
