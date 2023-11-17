import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import options from './options';
import { PartnerDto } from '../../../api/dtos/partner.dto';
import { postPartnerRegistration } from '../../../api/services/post-partner-registration';
import { Link, useNavigate } from 'react-router-dom';

interface SelectInputProps {
  label: string;
  id: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  required: boolean;
}

const CustomSelectInput: React.FC<SelectInputProps> = ({ label, id, options, value, onChange, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full text-sm focus:outline-gray-500 border border-gray-300 px-2 py-1 rounded-md"
    >
      <option value="">Selecione uma opção</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const PartnerRegistration: React.FC = () => {
  const [partnerData, setPartnerData] = useState<PartnerDto>({
    partnerName: '',
    sector: '',
    contactEmail: '',
    contactPhone: '',
    rateForProject: 0,
    password: '',
    branch: '',
    representativeJob: '',
    organizationType: '',
  });

  const history = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = event.target;
    const newValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;

    setPartnerData((prevData) => ({
      ...prevData,
      [id]: newValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await postPartnerRegistration(partnerData);
      console.log('Partner created:', response);
      localStorage.setItem('userType','partner');
      history('/home-partner');
    } catch (error) {
      console.error('Error creating partner:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full lg:w-[80%] shadow-md">
        <h1 className="text-xl text-center mb-4">Cadastro de Parceiro</h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Cadastre-se como parceiro para gerenciar suas iniciativas e parcerias em projetos.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <TextInput label="Nome" id="partnerName" placeholder="Digite o nome" onChange={handleInputChange} required />
            </div>
            <div>
              <TextInput label="Email" id="contactEmail" placeholder="seuemail@provedor.com" onChange={handleInputChange} required />
            </div>
            <div>
              <TextInput label="Telefone" id="contactPhone" placeholder="(xx) xxxxx-xxxx" onChange={handleInputChange} required />
            </div>
            <div>
              <TextInput label="Nome da Empresa" id="branch" placeholder="Digite o nome da empresa" onChange={handleInputChange} required />
            </div>
            <div>
              <TextInput label="Cargo" id="representativeJob" placeholder="(ex. desenvolvedor)" onChange={handleInputChange} required />
            </div>
            <div>
              <CustomSelectInput
                label="Qual área?"
                id="sector"
                options={options.area}
                value={partnerData.sector}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <TextInput label="Defina uma senha" id="password" placeholder="(ex. senha123)" onChange={handleInputChange} required isPassword />
            </div>
            <div>
              <CustomSelectInput
                label="Qual segmento de atuação da Empresa?"
                id="branch"
                options={options.segment}
                value={partnerData.branch}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <CustomSelectInput
                label="Tipo de organização"
                id="organizationType"
                options={options.organizationType}
                value={partnerData.organizationType}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="mt-6 space-x-4 text-lg flex justify-center">
            <button
              type="submit"
              className="bg-red-500 shadow-md rounded-[10px] px-5 py-2 text-xl text-white hover:bg-red-600"
            >
              Cadastrar-se
            </button>
            <Link to="/">
              <button
                type="button"
                className="px-5 py-2 bg-gray-200 text-xl text-gray-600 rounded-[10px] hover:bg-gray-300 active:bg-gray-400"
              >
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerRegistration;