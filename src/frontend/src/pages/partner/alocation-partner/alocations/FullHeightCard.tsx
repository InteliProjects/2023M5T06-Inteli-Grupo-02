import React from 'react';
import { PartnerEntity } from '../../../../api/entities/partner.entity';

interface FullHeightCardProps {
  partner: PartnerEntity | null;
}

const FullHeightCard: React.FC<FullHeightCardProps> = ({ partner }) => {
  const formatDateTime = (dateTimeString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      timeZone: 'America/Sao_Paulo', // Adjust the timezone as needed
    };

    const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(new Date(dateTimeString));

    return formattedDate;
  };

  return (
    <div className="bg-gray-100 p-2 shadow-md rounded-md flex-grow overflow-x-auto">
      {partner ? (
        <table className="border-collapse w-max">
          <thead className="text-lg text-white top-0 bg-[#2D253F]">
            <tr>
              <th className="border p-2">Nome do Parceiro</th>
              <th className="border p-2">Setor</th>
              <th className="border p-2">Tipo de organização</th>
              <th className="border p-2">Email de Contato</th>
              <th className="border p-2">Telefone de Contato</th>
              <th className="border p-2">Filial</th>
              <th className="border p-2">Cargo do Representante</th>
              <th className="border p-2">Ativo</th>
              <th className="border p-2">Criado em</th>
              <th className="border p-2">Atualizado em</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm bg-gray-100">
              <td className="border p-2">{partner.partnerName}</td>
              <td className="border p-2">{partner.sector}</td>
              <td className="border p-2">{partner.organizationType}</td>
              <td className="border p-2">{partner.contactEmail}</td>
              <td className="border p-2">{partner.contactPhone}</td>
              <td className="border p-2">{partner.branch}</td>
              <td className="border p-2">{partner.representativeJob}</td>
              <td className="border p-2">{partner.isActive ? 'Sim' : 'Não'}</td>
              <td className="border p-2">{formatDateTime(partner.createdAt)}</td>
              <td className="border p-2">{formatDateTime(partner.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Nenhum parceiro associado a esta iniciativa.</p>
      )}
    </div>
  );
};

export default FullHeightCard;
