import { useState, useMemo, useEffect } from "react";
import { api } from "@/lib/api";
import { useHandleError } from "@/hooks/use-handle-error"

export interface Task {
  id: number;
  text: string;
  status: "pending" | "completed";
  createdAt?: string,
  updatedAt?: string,
  removedAt?: string 
}

type FilterType = "all" | "pending" | "completed";

function useTodoList() {
  const [loading, setLoading] = useState<Boolean>(true)
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");

  const { handleError } = useHandleError();

  const addTask = async () => {
    try {
      if (!input.trim()) return;
      const  newTask: Task =  await api.post('tasks', { json: { text: input } }).json()
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInput("");
    } catch (error) {
      handleError(error)
    }
  };

  const toggleTask = async (id: number) => {
    const task = tasks.find((task) => task.id === id);
    const newStatus = task?.status === 'pending' ? 'completed' : 'pending';
    try {
      const updatedTask: Task = await api.put(`tasks/${id}`, { json: { status: newStatus }}).json();
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: updatedTask.status } : task
        )
      );
    } catch (error) {
      handleError(error);
    }
  };

  const removeTask = async (id: number) => {
    try {
      await api.delete(`tasks/${id}`)
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) { 
      handleError(error)   
    }
  };

  const startEditing = (id: number) => {
    setEditingTaskId(id); 
  };

  const saveEdit = async (id: number, newText: string) => {
    try {
      const updatedTask: Task = await api.put(`tasks/${id}`, { json: { text: newText }}).json();
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, text: updatedTask.text } : task
        )
      );
      setEditingTaskId(null);
    } catch (error) {
      handleError(error)
    }
  };

  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === "pending") return task.status === "pending";
    if (filter === "completed") return task.status === "completed";
    return true;
  });

  const totalTasks = useMemo(() => tasks.length, [tasks]);

  const pendingCount = useMemo(
    () => tasks.filter((task: Task) => task.status !== "completed").length,
    [tasks]
  );

  const completedCount = useMemo(
    () => tasks.filter((task) => task.status !== "pending").length,
    [tasks]
  );

  const completedPercentage = useMemo(() => {
    if (tasks.length === 0) return 0;
    const completedCount = tasks.filter((task) => task.status === "completed").length;
    return Math.round((completedCount / tasks.length) * 100);
  }, [tasks]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const fetchedTasks: Task[] = await api.get('tasks').json();
      setTasks(fetchedTasks);
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    loading,
    completedCount,
    totalTasks,
    pendingCount,
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
    completedPercentage
  };
}

export default useTodoList;
