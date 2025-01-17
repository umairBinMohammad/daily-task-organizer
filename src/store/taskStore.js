import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create a Zustand store with persistence
const useTaskStore = create(
  persist(
    (set) => ({
      // Initial state: an empty array of quests
      tasks: [],
      
      // Add a new quest to the store
      addTask: (taskData) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now(),
              title: taskData.title,
              description: taskData.description,
              priority: taskData.priority,
              completed: false,
            }
          ],
        })),
      
      // Toggle the completion status of a quest
      toggleTaskCompletion: (taskId) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId
              ? { ...task, completed: !task.completed }
              : task
          ),
        })),
      
      // Delete a quest from the store
      deleteTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
      
      // Clear all quests from the store
      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: 'task-storage',
    }
  )
);

export default useTaskStore;
