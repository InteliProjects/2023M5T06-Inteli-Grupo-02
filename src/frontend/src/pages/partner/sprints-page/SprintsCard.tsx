import React from 'react';

interface SprintsCardProps {
  sprintName: string;
  sprintContent: string;
}

const SprintsCard: React.FC<SprintsCardProps> = ({ sprintName, sprintContent }) => {
  return (
    <div className="bg-[#F2F2F2] shadow-md justify-between rounded-lg p-6 hover:shadow-lg transition duration-300">
      <h3 className="text-xl text-gray-600 font-semibold mb-4 ring-2 ring-gray-300 rounded w-fit px-2">{sprintName}</h3>
      <div className="items-center mb-4">
        <div className="flex flex-col">
          <p className="text-gray-600 text-xl">Início:</p>
          <p className="text-gray-700 text-base">2023-08-07</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600 text-xl">Fim:</p>
          <p className="text-gray-700 text-base">2023-10-15</p>
        </div>
        <p className="text-gray-600 text-base">{sprintContent}</p>
      </div>
    </div>
  );
};

export default SprintsCard;
