import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { postInitiative } from "../../../api/services/post-iniciative";
import { InitiativeDto } from "../../../api/dtos/initiative.dto";
import '../../login/LoginForm.css';

const cardStyle = {
  background: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  padding: '24px',
  width: 'auto',
  height: 'auto',
};

const InitiativeRegistration = () => {
  const initialFormData: InitiativeDto = {
    initiativeName: "",
    partnerId: "",
    scope: "",
    partnerName: "",
    status: "pendente",
    stage: 0,
    urlTAPI: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<InitiativeDto>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      history("/projects-page");
    }
  }, [shouldRedirect, history]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (isSubmitting) {
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      setIsLoading(true);
      setError(null);
  
      const updatedFormData: InitiativeDto = {
        ...formData,
        partnerId: localStorage.getItem("userId")! as string,
        partnerRate: 0,
        analystRate: 0,
        allocated: false,
      };
      await postInitiative(updatedFormData);
      setFormData(initialFormData);
      setIsLoading(false);
      setShouldRedirect(true);
    } catch (error) {
      setError("Ocorreu um erro ao cadastrar a iniciativa.");
      console.error("Erro ao cadastrar iniciativa:", error);
      setIsLoading(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadClick = () => {
    const a = document.createElement("a");
    a.href = "https://drive.usercontent.google.com/download?id=1B8wTb68BXHSJDjwXCuX2-Bv_vN0DFg9O&export=download&authuser=1";
    a.download = "modelo-tapi.docx";
    a.style.display = "none";

    document.body.appendChild(a);
    a.click();


    document.body.removeChild(a);
  };
  
  return (
    <>
      {isLoading ? (
        <div className="container mx-auto mt-8 p-4">
          <div className="loading-screen">
            <div className="loading-spinner"></div>
            <div className="loading-text">Carregando...</div>
          </div>
        </div>
      ) : (
        <div style={cardStyle}>
          <h1 className="text-3xl font-semibold">Cadastro de Projeto</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 mb-4">
              <label className="block text-xl font-semibold mb-1">Escopo</label>
              <input
                type="text"
                name="scope"
                value={formData.scope}
                onChange={handleChange}
                className="border border-gray-300 text-sm outline-gray-300 rounded-md p-4 w-full"
                placeholder="Defina um escopo"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-semibold mb-1">Nome da Iniciativa</label>
              <input
                type="text"
                name="initiativeName"
                value={formData.initiativeName}
                onChange={handleChange}
                className="border border-gray-300 text-sm outline-gray-300 rounded-md p-4 w-full"
                placeholder="Nome da Iniciativa"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-semibold mb-1">Nome do Parceiro</label>
              <input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleChange}
                className="border border-gray-300 text-sm outline-gray-300 rounded-md p-4 w-full"
                placeholder="Nome do Parceiro"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-semibold mb-1">URL do documento <button type="button" onClick={handleDownloadClick}>
                <img src="/src/assets/icons/file-arrow-down.svg" alt="Download" />
              </button></label>
              <input
                type="text"
                name="urlTAPI"
                value={formData.urlTAPI}
                onChange={handleChange}
                className="border border-gray-300 text-sm outline-gray-300 rounded-md p-4 w-full"
                placeholder="https://urldocumento"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 mt-2 shadow-md rounded-[10px] px-8 py-2 text-xl text-white hover:bg-red-600"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default InitiativeRegistration;
