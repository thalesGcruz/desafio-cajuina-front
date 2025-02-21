import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Task } from "@/hooks/use-todolist";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number) => void;
  onSaveEdit: (id: number, newText: string) => void;
}

export const TaskItem = ({ task, onToggle, onRemove, onSaveEdit }: TaskItemProps) => {
  const [editText, setEditText] = useState(task.text);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const handleSave = () => {
    onSaveEdit(task.id, editText);
    setIsEditModalOpen(false);
  };

  const handleRemove = () => {
    onRemove(task.id);
    setIsRemoveModalOpen(false);
  };

  return (
    <div className="shadow p-3 flex justify-between items-center gap-2 rounded-lg">
      <div className="flex items-center w-full gap-2">
        <Checkbox
          checked={task.status === "completed"}
          onCheckedChange={() => onToggle(task.id)}
          aria-label={`Marcar tarefa ${task.text} como concluída`}
        />
        <span className={task.status === "completed" ? "line-through text-gray-500" : ""}>
          {task.text}
        </span>
      </div>
      <div className="flex gap-2">
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" aria-label="Editar tarefa">
              <Pencil className="w-5 h-5 text-blue-500" />
              Editar
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Tarefa</DialogTitle>
            </DialogHeader>
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              autoFocus
            />
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleSave} disabled={!editText.trim()} className="bg-green-800 hover:bg-green-700">
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog open={isRemoveModalOpen} onOpenChange={setIsRemoveModalOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Remover tarefa" onClick={() => setIsRemoveModalOpen(true)}>
              <Trash2 className="w-5 h-5 text-red-500" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirmar Remoção</DialogTitle>
            </DialogHeader>
            <p>Tem certeza de que deseja remover esta tarefa?</p>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsRemoveModalOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleRemove} className="bg-red-600 hover:bg-red-500">
                Remover
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
