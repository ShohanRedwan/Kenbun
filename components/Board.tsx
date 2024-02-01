import React, { useMemo } from "react";
import Task from "./Task";
import { cn } from "@/lib/utils";
import { Task as TaskType, useTaskStore } from "@/store/store";
type boardProp = {
  status: string;
  title: string;
};

const Board = ({ status, title }: boardProp) => {
  const tasks: TaskType[] = useTaskStore((state: any) => state.tasks);
  const filteredTask = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );
  return (
    <div
      className={cn("w-[360px] bg-white p-4 border rounded-lg", {
        "border-yellow-500": status === "TODO",
        "border-blue-500": status === "PROGRESS",
        "border-green-500": status === "DONE",
      })}
    >
      <h3
        className={cn("text-2xl font-bold text-center mb-8", {
          "text-yellow-500": status === "TODO",
          "text-blue-500": status === "PROGRESS",
          "text-green-500": status === "DONE",
        })}
      >
        {title}
      </h3>
      {filteredTask.map((filtedTask) => {
        return <Task key={filtedTask.id} task={filtedTask} />;
      })}
    </div>
  );
};

export default Board;
