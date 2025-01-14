import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import useTaskStore from './store/taskStore';

const App = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Daily Task Organizer</h1>
      <AddTask onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
