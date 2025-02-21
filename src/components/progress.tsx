import { Progress } from "./ui/progress";

export default function TodoProgress({completedPercentage}: {completedPercentage : number} ) {

  return (
    <div className="w-full mx-auto mt-4   py-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className=" font-medium text-gray-700">
          Progresso das tarefas concluidas
        </span>
        <span className="text-sm font-medium text-gray-500">
          {completedPercentage}%
        </span>
      </div>
      <Progress 
        value={completedPercentage} 
        className="h-2" 
        aria-label="Progresso das tarefas"
      />
    </div>
  );

}
