import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create a Zustand store with persistence
const useTaskStore = create(
  persist(
    (set) => ({
      // Initial state: an empty array of quests
      tasks: [],
      coins: 0,
      completedTasks: [],
      
      // Add a new quest to the store
      // Time complexity: O(1)
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
      // Time complexity: O(n)
      toggleTaskCompletion: (taskId) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId
              ? { ...task, completed: !task.completed }
              : task
          ),
        })),
      
      // Turn in a quest and award coins
      // Time complexity: O(n)
      turnInTask: (taskId) =>
        set((state) => {
          const turnedInTask = state.tasks.find((task) => task.id === taskId);
          if (!turnedInTask) return {};

          let newCoins = state.coins;
          if (turnedInTask.priority === 'Easy') newCoins += 20;
          else if (turnedInTask.priority === 'Medium') newCoins += 50;
          else if (turnedInTask.priority === 'Hard') newCoins += 80;

          return {
            tasks: state.tasks.filter((task) => task.id !== taskId),
            completedTasks: [...state.completedTasks, { ...turnedInTask, completed: true }],
            coins: newCoins,
          };
        }),
      
      // Delete a quest from the store
      // Time complexity: O(n)
      deleteTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
      
      // Clear all quests from the store
      // Time complexity: O(1)
      clearTasks: () => set({ tasks: [] }),

      // Clear all completed tasks from the store
      // Time complexity: O(1)
      clearCompletedTasks: () => set({ completedTasks: [] }),
    }),
    {
      name: 'task-storage',
    }
  )
);

export default useTaskStore;
