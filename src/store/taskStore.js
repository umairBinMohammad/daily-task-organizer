import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create a Zustand store with persistence
const useTaskStore = create(
  persist(
    (set) => ({
      // Initial state: an empty array of quests
      tasks: [],
      coins: 0,
      
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
        set((state) => {
          const toggledTask = state.tasks.find((task) => task.id === taskId);
          let newCoins = state.coins;
          if (toggledTask && !toggledTask.completed) {
            if (toggledTask.priority === 'Easy') newCoins += 20;
            else if (toggledTask.priority === 'Medium') newCoins += 50;
            else if (toggledTask.priority === 'Hard') newCoins += 80;
          }
          return {
            tasks: state.tasks.map((task) =>
              task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
            ),
            coins: newCoins,
          };
        }),
      
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
