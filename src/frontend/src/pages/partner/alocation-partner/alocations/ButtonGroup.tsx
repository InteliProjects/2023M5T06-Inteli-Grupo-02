import React from 'react';
import {
  FiUser,
  FiFileText,
  FiFolder,
} from 'react-icons/fi';

interface ButtonGroupProps {
  setSelectedComponent: (component: string) => void;
  activeComponent: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  setSelectedComponent,
  activeComponent,
}) => {
  return (
    <div className="flex text-lg space-x-4 mt-4">
      <button
        className={`flex gap-2 items-center ${
          activeComponent === 'default' ? 'bg-[#5E586B] text-white' : 'bg-[#F2F2F2] hover:bg-[#B3B3C3] text-black'
        } px-[0.8rem] py-[0.8rem] rounded-md`}
        onClick={() => setSelectedComponent('default')}
      >
        <FiUser className={`${activeComponent === 'default' ? '' : 'text-lg'} text-lg`} /> Informações do parceiro
      </button>
      <button
        className={`flex gap-2 items-center ${
          activeComponent === 'tapi' ? 'bg-[#5E586B] text-white' : 'bg-[#F2F2F2] hover:bg-[#B3B3C3] text-black'
        } px-[0.8rem] py-[0.8rem] rounded-md`}
        onClick={() => setSelectedComponent('tapi')}
      >
        <FiFileText className={`${activeComponent === 'tapi' ? '' : 'text-lg'} text-lg`} /> Tapi/Descrição
      </button>
      <button
        className={`flex gap-2 items-center ${
          activeComponent === 'metaprojeto' ? 'bg-[#5E586B] text-white' : 'bg-[#F2F2F2] hover:bg-[#B3B3C3] text-black'
        } px-[0.8rem] py-[0.8rem] rounded-md`}
        onClick={() => setSelectedComponent('metaprojeto')}
      >
        <FiFolder className={`${activeComponent === 'metaprojeto' ? '' : 'text-lg'} text-lg`} /> Metaprojeto/Artefatos
      </button>
    </div>
  );
};

export default ButtonGroup;
