"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Task, useTaskStore } from "@/store/store";
const FormDialog = ({
  openForm,
  handleClose,
  triggerType,
  taskData,
}: {
  openForm: boolean;
  handleClose: any;
  triggerType?: string;
  taskData?: Task;
}) => {
  const taskStore: any = useTaskStore((state) => state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { taskTitle, taskDescription } = Object.fromEntries(formData);
    handleClose();
    if (triggerType === "EDIT") {
      const updatedTaskData = {
        id: taskData?.id,
        title: taskTitle,
        description: taskDescription,
        status: taskData?.status,
      };
      taskStore.updateTaskData(updatedTaskData);
    } else {
      taskStore.addTask(taskTitle, taskDescription);
    }
  };
  return (
    <Dialog open={openForm} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create A Task</DialogTitle>
          <DialogDescription>Write the task data bellow.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="taskTitle" className="text-right">
                Title
              </Label>
              <Input
                required
                id="taskTitle"
                name="taskTitle"
                defaultValue={taskData?.title}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="taskDescription" className="text-right">
                Description
              </Label>
              <Textarea
                required
                placeholder="Type your message here."
                name="taskDescription"
                id="taskDescription"
                defaultValue={taskData?.description}
                className="col-span-3"
              />
            </div>
          </div>
          <Button type="submit" className="rounded-full">
            {triggerType === "EDIT" ? "Update Task" : "Add Task"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
