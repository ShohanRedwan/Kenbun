"use client";
import Board from "@/components/Board";
import Task from "@/components/Task";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useStore";
import Image from "next/image";

import { useState } from "react";
import { useTaskStore } from "@/store/store";
import FormDialog from "@/components/FormDialog";
export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const handleFormClose = () => {
    setFormOpen(false);
  };
  return (
    <div className="container mx-auto p-10 bg-slate-50">
      <div className="flex gap-8">
        <div className="p-8">
          <Button
            variant="default"
            className="rounded-lg"
            onClick={(e) => {
              setFormOpen(true);
            }}
          >
            Create Task
          </Button>
          <FormDialog
            openForm={formOpen}
            handleClose={handleFormClose}
            triggerType="ADD"
          />
        </div>
        <Board status="TODO" title="Todo" />
        <Board status="PROGRESS" title="Work In Progress" />
        <Board status="DONE" title="Done" />
      </div>
    </div>
  );
}
