import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PiListPlusThin } from "react-icons/pi";

interface TaskInputProps {
  input: string;
  setInput: (value: string) => void;
  onAddTask: () => void;
}

export const TaskInput = ({ input, setInput, onAddTask }: TaskInputProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTask = () => {
    onAddTask();
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bottom-6 right-6 bg-green-800 hover:bg-green-700 p-4 rounded-full shadow-lg">
            Nova Tarefa
            <PiListPlusThin size={24} />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>Adicionar Nova Tarefa</DialogTitle>
          </DialogHeader>
          
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua tarefa..."
            autoFocus
          />

          <Button 
            className="bg-green-800 hover:bg-green-700 w-full mt-4" 
            onClick={handleAddTask} 
            disabled={!input.trim()}
          >
            Adicionar Tarefa
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
