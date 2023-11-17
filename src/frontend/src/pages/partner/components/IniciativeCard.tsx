import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  analystRate: number;
  textFeedback: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, status, analystRate, textFeedback }) => {
  let statusIcon = null;

  if (status === 'pendente' || status === 'Pending') {
    statusIcon = <img src='/src/assets/icons/hourglass-start.svg' alt="Hourglass" />;
  } else if (status === 'em andamento') {
    statusIcon = <img src='/src/assets/icons/forward-step.svg' alt="Forward Step" />;
  } else if (status === 'aprovado' || status === 'concluído') {
    statusIcon = <img src='/src/assets/icons/circle-check.svg' alt="Circle Check" />;
  } else if (status === 'negado') {
    statusIcon = <img src='/src/assets/icons/circle-x.svg' alt="Circle X" />;
  } else {
    statusIcon = null; // Se não houver correspondência, você pode definir um valor padrão ou deixar em branco.
  }

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };


  return (
    <div className="w-full h-full bg-[#F2F2F2] rounded-lg shadow-md p-4 gap-4 flex flex-col justify-between">
      <h2 className="text-gray-800 font-semibold text-lg mb-2">{title}</h2>
      <div className="mb-2">
        <span className="flex w-fit gap-2 text-xs px-2 py-1 rounded bg-gray-200 ring-1 ring-gray-300 text-gray-800" aria-label={`Status: ${status}`}>
          {statusIcon} {status}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <button
        className="w-full bg-red-500 text-white text-lg rounded-md py-2 px-2 hover:bg-opacity-80 transition-colors"
        onClick={openDialog}
      >
        Visualizar Iniciativa
      </button>

      <Transition show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDialog}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
<div className="bg-white w-1/2 p-4 rounded-lg mx-auto space-y-4 shadow-lg">
  <Dialog.Title className="text-xl font-semibold flex items-center justify-between">
    Feedback do analista
    <span className="flex items-center gap-2 bg-red-500 text-white rounded-full p-2 relative inline-block group">
      Nota do analista: {analystRate}
      <span className="hidden text-base group-hover:inline-block absolute top-10 w-full bg-white text-gray-700 p-2 rounded-lg shadow-md border border-gray-200">
        <span className="block font-semibold text-gray-900">Dica:</span>
        Esta nota varia de 0 a 5.
      </span>
      <span className="text-sm group-hover:inline-block ml-2 cursor-pointer hover:underline">
        ?
      </span>
    </span>
  </Dialog.Title>
  <div className="text-gray-600">
    {textFeedback}
  </div>
</div>



            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProjectCard;
