import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import useTaskStore from './store/taskStore';

/**
 * The main App component that renders the Daily Task Organizer.
 * It uses the task store to manage tasks and passes necessary props to child components.
 */
const App = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <div
      className="p-4 max-w-md mx-auto bg-gray-100 min-h-screen"
      style={{
        maxWidth: '65%', // 90% of the viewport width
        margin: '0 auto',
        padding: '2% 5% 5% 5%', // Lowered the top padding to 2%
        borderRadius: '0.5rem', // Use rem for consistent scaling
        boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)', // Converted to rem
        backgroundColor: '#fff',
      }}
    >
      <h1 className="text-xl font-bold text-center mb-4" style={{ textAlign: 'center' }}>Daily Task Organizer</h1>
      {/* Component to add a new task */}
      <div className="mb-4">
        <AddTask onAdd={addTask} />
      </div>
      {/* Component to list all tasks */}
      <div className="mt-4">
        <TaskList tasks={tasks} onToggle={toggleTaskCompletion} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default App;
