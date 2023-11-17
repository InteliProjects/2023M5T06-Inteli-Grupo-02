import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FullHeightCard from './FullHeightCard';
import ButtonGroup from './ButtonGroup';
import DocumentViewer from './DocumentViewer';
import { useCardStore } from '../../../../stores/CardStore';
import { fetchPartnerData } from '../../../../api/services/fetch-partner';
import { PartnerEntity } from '../../../../api/entities/partner.entity';
import { updateInitiative } from '../../../../api/services/fetch-Initiatives';
import { ModuleEntity } from '../../../../api/entities/module-entity';
import { fetchModules } from '../../../../api/services/fetch-Modules';
import Modal from 'react-modal';
import './styles.css';

Modal.setAppElement('#root');

const InfoInitiative: React.FC = () => {
  
  const { id } = useParams<{ id: string }>();
  const initiative = useCardStore((state) =>
    state.initiativeData.find((init) => init.id === id)
  );
  
  const [modules, setModules] = useState<ModuleEntity[]>([]);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string>('default'); 
  const [newStatus, setNewStatus] = useState<string>(initiative?.status || '');
  const [newAnalystRate, setNewAnalystRate] = useState<number | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(initiative?.urlTAPI || null);
  const [partnerData, setPartnerData] = useState<PartnerEntity | null>(null);

  const statusButton = ["pendente", "negado", "em andamento", "concluído"];

  const [, setShowPdfViewer] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);


  
  const setFeedback = (message: string | null) => {
    setIsModalOpen(!!message);
    if (message) {
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);
    }
  };

  useEffect(() => {
    fetchModules().then((data) => {
      setModules(data);
    });

    fetchPartnerData().then((data) => {
      const partnerRelatedToInitiative = data.find((partner) => partner.id === initiative?.partnerId);
      if (partnerRelatedToInitiative) {
        setPartnerData(partnerRelatedToInitiative);
      }
    });
  }, [initiative]);

  useEffect(() => {
    if (initiative?.urlTAPI) {
      setPdfUrl(initiative.urlTAPI);
      setShowPdfViewer(true);
    }
  }, [initiative]);

  useEffect(() => {
    if (initiative) {
      setNewStatus(initiative.status || '');
      setFeedbackText(initiative.textFeedback || '');
      setPdfUrl(initiative.urlTAPI || null);
    }
  }, [initiative]);

  useEffect(() => {
    if (initiative && modules.length > 0) {
      const associatedModule = modules.find((module) => module.id === initiative.moduleId);
      setSelectedModuleId(associatedModule?.id || null);
    }
  }, [initiative, modules]);

  useEffect(() => {
    if (initiative?.analystRate !== null && initiative?.analystRate !== undefined) {
      setNewAnalystRate(initiative.analystRate);
    }
  }, [initiative]);

  const renderSelectedComponent = () => {
    if (selectedComponent === 'tapi') {
      if (pdfUrl) {
        return <DocumentViewer pdfUrl={pdfUrl} />;
      } else {
        return null;
      }
    } else if (selectedComponent === 'metaprojeto') {
      return <div>Metaprojeto/Artefatos</div>;
    } else if (selectedComponent === 'default') {
      if (partnerData) {
        return (
          <div className='grid items-center justify-center'>
            <FullHeightCard key={partnerData.id} partner={partnerData} />
          </div>
        );
      } else {
        return <p>Nenhum parceiro associado a esta iniciativa.</p>;
      }
    } else {
      if (pdfUrl) {
        return <DocumentViewer pdfUrl={pdfUrl} />;
      } else {
        return null;
      }
    }
  };

  const handleButtonClick = (component: string) => {
    setSelectedComponent(component);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setNewAnalystRate(getRateByLetter(letter));
  };

  
  const openConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  
  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const [feedbackSuccessMessage, setFeedbackSuccessMessage] = useState<string | null>(null);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const updateFeedback = () => {
    if (initiative) {
      const updatedInitiative = {
        ...initiative,
        moduleId: selectedModuleId,
        analystRate: newAnalystRate || 0,
        status: newStatus,
        allocated: !!selectedModuleId,
        textFeedback: feedbackText,
      };
      setFeedbackText(feedbackText);
      updateInitiative(initiative.id, updatedInitiative)
        .then((response) => {
          setFeedbackSuccessMessage('O feedback foi enviado para o parceiro com sucesso.');
          setIsFeedbackModalOpen(true);
          console.log('Feedback atualizado:', response);
        })
        .catch((error) => {
          console.error('Erro ao atualizar feedback:', error);
          setFeedback('Erro ao atualizar feedback');
        });
    }
  };

  const confirmAndUpdateInitiative = () => {
    if (initiative) {
      const updatedInitiative = {
        ...initiative,
        moduleId: selectedModuleId || null,
        analystRate: newAnalystRate || 0,
        status: newStatus,
        allocated: !!selectedModuleId,
        textFeedback: feedbackText,
      };
  
      updateInitiative(initiative.id, updatedInitiative)
        .then((response) => {
          setIsModalOpen(true);
          console.log('Iniciativa atualizada:', response);
          setIsUpdateSuccessful(true);
          setIsConfirmationModalOpen(false);
        })
        .catch((error) => {
          console.error('Erro ao atualizar iniciativa:', error);
          setFeedback('Erro ao atualizar iniciativa');
        });
    }
  };

  const getRateByLetter = (letter: string) => {
    const letterToValue: Record<string, number> = {
      'I': 0,
      'N': 1,
      'T': 2,
      'E': 3,
      'L': 4,
      'I.': 5,
    };

    return letterToValue[letter];
  };

  const renderVotingButtons = () => {
    const letters = ['I', 'N', 'T', 'E', 'L', 'I.'];

    return (
      <div className="flex items-center space-x-4">
        {letters.map((letter) => (
          <div key={letter} className="relative group">
            <button
              className={`w-12 h-12 shadow-md rounded-full text-white font-bold text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out ${
                selectedLetter === letter ? 'ring-2 ring-offset-2 ring-black' : ''
              } ${
                newAnalystRate === getRateByLetter(letter)
                  ? 'bg-[#2E2640] hover:bg-opacity-75'
                  : 'bg-red-500 hover:bg-opacity-75'
              }`}
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Feedback Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="text-center">
          {isUpdateSuccessful ? (
            <p className="text-green-600 text-lg font-semibold">
              Iniciativa atualizada com sucesso!
            </p>
          ) : (
            <p className="text-red-600 text-lg font-semibold">
              Ocorreu um erro ao atualizar a iniciativa.
            </p>
          )}
          <button
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            onClick={() => {
              setIsModalOpen(false);
              setIsUpdateSuccessful(false);
            }}
          >
            Fechar
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isFeedbackModalOpen}
        onRequestClose={() => setIsFeedbackModalOpen(false)}
        contentLabel="Feedback Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="text-center">
          <p className="text-green-600 text-lg font-semibold">
            {feedbackSuccessMessage || 'Feedback atualizado com sucesso!'}
          </p>
          <button
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            onClick={() => {
              setIsFeedbackModalOpen(false);
              setFeedbackSuccessMessage(null);
            }}
          >
            Fechar
          </button>
        </div>
      </Modal>
      <div className='grid grid-cols-4 justify-content items-center gap-2 bg-red-500 py-6 px-36 rounded-t-lg'>
        {statusButton.map((status) => (
          <button
            className={`text-white w-fit ${newStatus === status ? 'bg-[#2E2640]' : 'bg-red-500 hover:bg-[rgba(255,255,255,0.2)]'} outline-gray-300 text-sm p-3 rounded-2xl`}
            type="button"
            value={status}
            onClick={() => setNewStatus(status)}>{status}</button>
        ))}
      </div>
      <div className="flex flex-col rounded-b-lg justify-center items-center h-max bg-white shadow-md p-8">
        <div className='flex w-full flex-col bg-[rgb(249,249,249)] gap-6 justify-center items-center py-4 px-28 rounded shadow-md'>
          <h2>Nome da Iniciativa: {initiative?.initiativeName}</h2>
          <h2>Alocado: {initiative?.allocated ? 'sim' : 'Não'}</h2>
          <select
            className="border ring-1 ring-gray-300 outline-gray-300 text-sm py-2 rounded"
            onChange={(e) => setSelectedModuleId(e.target.value)}
            value={selectedModuleId || ''}
          >
            <option value="">Selecione um módulo</option>
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.moduleName}
              </option>
            ))}
          </select>
          <div>
            <span>Nota: </span>
            {renderVotingButtons()}
          </div>
          <button
        className="text-lg text-white ml-10 bg-[linear-gradient(rgb(45,37,63)_23.61%,rgb(40,33,55)_43.94%)] hover:opacity-90 rounded p-2"
        onClick={openConfirmationModal}
      >
        Atualizar Iniciativa
      </button>
          <div className='flex flex-col w-full'>
          <textarea
            className='css-1l53lbz ring-1 ring-gray-400 rounded w-[250px] h-[300px] text-base text-gray-800'
            name=""
            id=""
            maxLength={2000}
            placeholder='Feedback'
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)} />

      <div className='flex css-oxi3kn justify-between items-center bg-[#2E2640] py-4 px-8 ring-1 z-10 ring-[#2E2640] rounded-b-lg'>
        <button className='text-white rounded bg-red-500 hover:bg-red-400 px-4 py-2'
          onClick={updateFeedback}>
          Enviar Feedback
        </button>
        <div className='text-sm text-gray-400'>
          {feedbackText.length}/{2000}
        </div>
      </div>
          </div>
      <Modal
        isOpen={isConfirmationModalOpen}
        onRequestClose={closeConfirmationModal}
        contentLabel="Confirmation Modal"
        overlayClassName="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="text-center">
          <p className="text-lg font-semibold">
            Tem certeza de que deseja confirmar esta ação?
          </p>
          <div className="mt-4">
            <button
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mr-4"
              onClick={confirmAndUpdateInitiative} 
            >
              Confirmar
            </button>
            <button
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={closeConfirmationModal} 
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
          <ButtonGroup
          activeComponent={selectedComponent}
            setSelectedComponent={handleButtonClick}
          />
          <div className="w-full p-4">{renderSelectedComponent()}</div>
        </div>
      </div>
    </>
  );
};

export default InfoInitiative;