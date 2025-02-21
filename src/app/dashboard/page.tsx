'use client'

import { TaskInput } from "@/components/task-input";
import { TaskList } from "@/components/task-list";
import useTodoList from "@/hooks/use-todolist";
import { FilterButtons } from "@/components/filter-buttons";
import TodoProgress from "@/components/progress";

export default function Home() {
  const {
    filteredTasks,
    input,
    setInput,
    addTask,
    toggleTask,
    removeTask,
    startEditing,
    saveEdit,
    editingTaskId,
    setFilter,
    filter,
    completedPercentage,
    completedCount,
    pendingCount,
    totalTasks,
    loading
  } = useTodoList();

  return (
      <main className="">
        <div className="max-w-6xl mx-auto p-4">
          <div className="w-full flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold ">Minhas Tarefas</h1>
              <p className="mb-3 text-gray-500">Adicione, gerencie e conclua suas tarefas com facilidade.</p>
            </div>
            <TaskInput input={input} setInput={setInput} onAddTask={addTask} />
          </div>
          <TodoProgress completedPercentage={completedPercentage} />
          <FilterButtons 
          setFilter={setFilter} 
          filter={filter} 
          completedCount={completedCount}
          pendingCount={pendingCount}
          totalTasks={totalTasks}

          />
          <TaskList
            loading={loading}
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onRemoveTask={removeTask}
            onEditTask={startEditing}
            onSaveEdit={saveEdit}
            editingTaskId={editingTaskId} 
          />
        </div>
      </main>
  );
}

