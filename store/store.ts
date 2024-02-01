import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
export type Task = {
  id: string;
  title: string;
  description: string;
  status: Status;
};
export type Status = "TODO" | "PROGRESS" | "DONE";

export type TaskStore = {
  tasks: Task[];
  addTask: (title: string, description?: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, status: Status) => void;
  updateTaskData: (updatedTask: Task) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (title: string, description?: string) =>
    set((oldState: any) => ({
      tasks: [
        ...oldState.tasks,
        {
          id: uuidv4(),
          title: title,
          description: description,
          status: "TODO",
        },
      ],
    })),
  removeTask: (id: string) =>
    set((oldState: any) => ({
      tasks: oldState.tasks.filter((item: Task) => item.id !== id),
    })),
  updateTask: (id: string, status: Status) =>
    set((oldState: TaskStore) => ({
      tasks: oldState.tasks.map((item: Task) =>
        item.id === id ? { ...item, status: status } : item
      ),
    })),
  updateTaskData: (updatedTask: Task) =>
    set((oldState: TaskStore) => ({
      tasks: oldState.tasks.map((item: Task) =>
        item.id === updatedTask.id ? { ...updatedTask } : item
      ),
    })),
}));
