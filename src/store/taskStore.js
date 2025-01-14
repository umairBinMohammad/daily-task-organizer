import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create a Zustand store with persistence
const useTaskStore = create(
  persist(
    (set) => ({
      // Initial state: an empty array of tasks
      tasks: [],
      
      // Add a new task to the store
      addTask: (taskName) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: Date.now(), name: taskName, completed: false },
          ],
        })),
      
      // Toggle the completion status of a task
      toggleTaskCompletion: (taskId) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId
              ? { ...task, completed: !task.completed }
              : task
          ),
        })),
      
      // Delete a task from the store
      deleteTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
    }),
    {
      name: 'task-storage', // Name of the key in LocalStorage
    }
  )
);

export default useTaskStore;
