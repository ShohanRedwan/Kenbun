import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { Task, useTaskStore } from "@/store/store";
import OptionDialog from "./OptionDialog";

type TaskProp = {
  task: Task;
};
const Task = ({ task: { id, description, title, status } }: TaskProp) => {
  return (
    <Card className="mb-5">
      <CardHeader className="font-bold p-4">
        <div className="flex justify-between items-center">
          <Badge
            className={cn({
              "bg-yellow-500 text-black": status === "TODO",
              "bg-blue-500 text-white": status === "PROGRESS",
              "bg-green-500 text-black": status === "DONE",
            })}
          >
            {status}
          </Badge>
          <OptionDialog id={id} />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-500 px-4">{description}</CardContent>
    </Card>
  );
};

export default Task;
