import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (taskName) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: Date.now(), name: taskName, completed: false },
          ],
        })),
      toggleTaskCompletion: (taskId) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId
              ? { ...task, completed: !task.completed }
              : task
          ),
        })),
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
