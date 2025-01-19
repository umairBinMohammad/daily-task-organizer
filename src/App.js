import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import useTaskStore from './store/taskStore';
import parchmentTexture from './assets/resources/parchment4.jpeg';
import coinIcon from './assets/resources/coin.png';

/**
 * The main App component that renders the Daily Task Organizer.
 * It uses the task store to manage tasks and passes necessary props to child components.
 * 
 * Time complexity: O(n)
 */
const App = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const clearTasks = useTaskStore((state) => state.clearTasks);
  const coins = useTaskStore((state) => state.coins);
  const completedTasks = useTaskStore((state) => state.completedTasks);
  const turnInTask = useTaskStore((state) => state.turnInTask);
  const clearCompletedTasks = useTaskStore((state) => state.clearCompletedTasks);
  
  // // Clear the tasks from the store
  // const currentState = useTaskStore.getState();
  // console.log(currentState);
  // useTaskStore.setState({ tasks: [] });

  return (
    <div
      className="p-4 max-w-md mx-auto bg-gray-100 min-h-screen"
      style={{
        maxWidth: '65%',
        margin: '0 auto',
        padding: '2% 5% 5% 5%',
        borderRadius: '5rem',
        boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        backgroundImage: `url(${parchmentTexture})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Macondo, serif'
      }}
    >
      {/* Coins display */}
      <div style={{ position: 'absolute', top: '30px', right: '30px', display: 'flex', alignItems: 'center' }}>
        <img src={coinIcon} alt="coins" style={{ width: '52px', marginRight: '5px' }} />
        <span style={{ color: '#fff', fontSize: '1.25rem' }}>{coins}</span>
      </div>
      <h1 className="text-xl font-bold text-center mb-4" style={{ textAlign: 'center', fontSize: '2.25rem' }}>Active Quests</h1>
      {/* Component to add a new task */}
      <div className="mb-4" style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        <AddTask onAdd={addTask} />
      </div>
      {/* Button to clear all tasks */}
      <div className="mb-4" style={{ textAlign: 'center' }}>
        <button
          onClick={clearTasks}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff4d4d',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Abandon all Quests
        </button>
      </div>
      {/* Component to list all tasks */}
      <div className="mt-4" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <TaskList tasks={tasks} onToggle={toggleTaskCompletion} onDelete={deleteTask} onTurnIn={turnInTask} />
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Completed Quests</h2>
      <div className="mb-4" style={{ textAlign: 'center' }}>
        <button
          onClick={clearCompletedTasks}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff4d4d',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Clear Archived Quests
        </button>
      </div>
      <TaskList tasks={completedTasks} onToggle={() => {}} onDelete={() => {}} onTurnIn={() => {}} />
    </div>
  );
};

export default App;
