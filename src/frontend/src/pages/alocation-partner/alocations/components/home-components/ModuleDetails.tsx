import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCardStore } from "../../../../../stores/ModuleCardStore";

export default function AlocationDetails() {
  const { id } = useParams<{ id: string }>();
  const module = useCardStore((state) =>
    state.moduleData.find((init) => init.id === id)
  );

  const [selectedModule, setSelectedModule] = useState("");
  const navigate = useNavigate();

  if (!module) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p>Iniciativa não encontrada.</p>
        <Link to="/alocation">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded mt-4"
          >
            Voltar para a lista de alocação de iniciativas
          </button>
        </Link>
      </div>
    );
  }

  const handleSave = () => {
    // Lógica para salvar a alocação do projeto com o módulo selecionado
    // ...
  };

  return (
    <div className="flex text-lg bg-white rounded-xl drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] text-gray-700 justify-center items-center h-full">
      <div className="flex bg-gray-100 drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] rounded-xl p-4 gap-4">
        {/* Lado Esquerdo */}
        <div className="w-1/2">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              Nome do Módulo: {module.moduleName}
            </h2>
            <p className="text-sm">Contato: {module.moduleName}</p>
          </div>
        </div>

        <div className="w-1/2">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Descrição Detalhada:</h2>
            <p className="text-sm">{module.status}</p>
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Selecione um Módulo:</label>
            <select
              className="border outline-gray-300 border-gray-300 rounded-md p-2 w-full"
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              placeholder="Selecione..."
              required
            >
              <option value="">Selecione...</option>
              <option value="webApp">Web App</option>
              <option value="predictModel">Modelo Preditivo</option>
              <option value="iotApplcation">Aplicação IOT</option>
              <option value="graphOtimization">Otimização com Grafos</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
              onClick={() => navigate("/alocation")}
            >
              Cancelar
            </button>
            <button
              className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
              onClick={handleSave}
            >
              Alocar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
