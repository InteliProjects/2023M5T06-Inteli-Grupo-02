import React from 'react';
import { FiCheckCircle, FiCircle } from 'react-icons/fi'; // Importe os ícones desejados

interface TaskCardProps {
  taskNames: string[]; // Alterei o nome da prop para taskNames para representar um array de nomes de tarefas
}

const TaskCard: React.FC<TaskCardProps> = ({ taskNames }) => {
  // Função para gerar status aleatório para cada tarefa
  const generateRandomStatus = () => {
    return Math.random() < 0.5; // Retorna true ou false aleatoriamente
  };

  return (
    <div className="bg-[rgb(45,37,63)] justify-between hover:opacity-75 text-white rounded-lg p-6 m-1 hover:shadow-lg transition duration-300">
      <div className="mb-4">
        {taskNames.map((taskName, index) => (
          <div key={index} className="flex items-center space-x-2">
            {generateRandomStatus() ? (
              <>
                <FiCheckCircle className="text-green-500 text-lg" />
                <span className="text-xs font-semibold text-green-500">Concluída</span>
              </>
            ) : (
              <>
                <FiCircle className="text-red-500 text-lg" />
                <span className="text-xs font-semibold text-red-500">Em execução</span>
              </>
            )}
            <h3 className="text-lg font-semibold mb-2">{taskName}</h3>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-200">Orientador(a): Vanessa Nunes</p>
      {/* Adicione aqui os detalhes e ações da tarefa */}
    </div>
  );
};

export default TaskCard;
