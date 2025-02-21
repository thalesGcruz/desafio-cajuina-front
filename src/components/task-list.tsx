import { Task } from "@/hooks/use-todolist";
import { TaskItem } from "./task-item";
import { Skeleton } from "./ui/skeleton";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onRemoveTask: (id: number) => void;
  onEditTask: (id: number) => void;
  onSaveEdit: (id: number, newText: string) => void;
  editingTaskId: number | null;
  loading: Boolean
}

export const TaskList = ({
  tasks,
  onToggleTask,
  onRemoveTask,
  onEditTask,
  onSaveEdit,
  loading
}: TaskListProps) => {

  if (loading) {
    return (
      <ul className="space-y-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="flex items-center space-x-2 p-4 border rounded-md">
            <Skeleton className="w-6 h-6 bg-gray-300 rounded-full" />
          </li>
        ))}
      </ul>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center my-20 p-6 text-gray-500">
        <p className="mt-4 text-lg font-medium">Nenhuma tarefa encontrada</p>
        <p className="text-sm text-gray-400">Tente ajustar os filtros ou adicionar novos itens</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task: Task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onRemove={onRemoveTask}
          onEdit={onEditTask}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </ul>
  );
};
