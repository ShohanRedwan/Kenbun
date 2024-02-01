"use client";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Button } from "./ui/button";
import { Pencil, Trash } from "lucide-react";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { useTaskStore } from "@/store/store";
import FormDialog from "./FormDialog";
import Task from "./Task";
const OptionDialog = ({ id }: { id: string }) => {
  const store = useTaskStore((state: any) => state);
  const [formOpen, setFormOpen] = useState(false);
  const handleFormClose = () => {
    setFormOpen(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <HiOutlineDotsVertical className="text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem
            className="gap-2 p-2"
            onClick={() => {
              setFormOpen(true);
            }}
          >
            <Pencil
              color="#000000"
              strokeWidth={1.25}
              width={16}
              absoluteStrokeWidth
              className="mr-2 h-4 w-4"
            />
            <span>Edit</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onClick={(e) => store.removeTask(id)}
            className="p-2 gap-2"
          >
            <Trash
              className="mr-2 h-4 w-4"
              color="#000000"
              strokeWidth={1.25}
              width={16}
              absoluteStrokeWidth
            />
            <span>Delete</span>
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
      <FormDialog
        openForm={formOpen}
        handleClose={handleFormClose}
        triggerType="EDIT"
        taskData={store.tasks.find((item: Task) => item.id === id)}
      />
    </DropdownMenu>
  );
};

export default OptionDialog;
