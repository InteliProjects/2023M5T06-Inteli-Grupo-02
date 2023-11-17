import React from 'react';
import SprintCard from './SprintsCard';
import TaskCard from './TaskCard';

const ModulesPage = () => {
  const cardData = [
    {
      title: 'Sprint 1',
      content: 'Conteúdo da Sprint 1...',
    },
    {
      title: 'Sprint 2',
      content: 'Conteúdo da Sprint 2...',
    },
    {
      title: 'Sprint 3',
      content: 'Conteúdo da Sprint 3...',
    },
    {
      title: 'Sprint 4',
      content: 'Conteúdo da Sprint 4...',
    },
    {
      title: 'Sprint 5',
      content: 'Conteúdo da Sprint 5...',
    },
  ];

  const sampleTasks = [
    'Task 1', 
    'Task 2', 
    'Task 3'
  ];


  return (
    <div className="flex justify-center items-center h-full w-full mt-2 bg-white rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {cardData.map((card) => (
          <React.Fragment>
              <SprintCard sprintName={card.title} sprintContent={card.content} />
              <TaskCard taskNames={sampleTasks} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ModulesPage;
