import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

interface FilterButtonsProps {
  filter: "all" | "pending" | "completed";
  setFilter: (filter: "all" | "pending" | "completed") => void;
  completedCount: number,
  pendingCount: number,
  totalTasks: number
}

export function FilterButtons({
  filter,
  setFilter,
  completedCount,
  pendingCount,
  totalTasks 
}: FilterButtonsProps) {
  return (
    <div className="flex gap-2 my-4">
      <Button
        variant={'outline'}
        className={filter === "all" ? "border-green-700 text-green-700" : ""}
        onClick={() => setFilter("all")}
      >
        <Badge className="rounded-full bg-green-100 hover:bg-green-200 text-green-900">
          {totalTasks}
        </Badge>
        Todas
      </Button>
      <Button
        variant={'outline'}
        className={filter === "pending" ? "border-green-700 text-green-700" : ""}
        onClick={() => setFilter("pending")}
      >
        <Badge className="rounded-full bg-green-100 hover:bg-green-200 text-green-900">
          {pendingCount}
        </Badge>
        Pendentes
      </Button>
      <Button
        variant={'outline'}
        className={filter === "completed" ? "border-green-700 text-green-700" : ""}
        onClick={() => setFilter("completed")}
      >
        <Badge className="rounded-full bg-green-100 hover:bg-green-200 text-green-900">
          {completedCount}
        </Badge>
        Completas
      </Button>
    </div>
  );
}
