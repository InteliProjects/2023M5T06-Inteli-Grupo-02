import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Project {
  id: string;
  partnerName: string;
  allocated: boolean;
  organizationType: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ProjectAllocationChartProps {
  projects: Project[];
}

const cardStyle = {
  background: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '20px',
  width: 'auto',
  height: 'fit-content',
};

type SectorColors = {
  [key: string]: string;
  ONG: string;
  Governamental: string;
  Privado: string;
};

const sectorColors: SectorColors = {
  ONG: 'rgb(84, 79, 197)',
  Governamental: 'rgb(0, 226, 114)',
  Privado: 'rgb(44, 175, 254)',
};

const ProjectAllocationChart: React.FC<ProjectAllocationChartProps> = ({ projects }) => {
  
  const generateChartData = (projects: Project[] | undefined) => {
    if (!projects) {
      return []; 
    }


    
    const sectors = ['ONG', 'Governamental', 'Privado'];
  
    const data = sectors.map((sector) => {
      const projectsInSector = projects.filter((project) => project.organizationType === sector);
      return {
        name: sector,
        y: projectsInSector.length,
        color: sectorColors[sector],
      };
    });

    return data;
  };

  const chartConfig = {
    chart: {
      type: 'pie',
      height: '400px',
    },
    title: {
      text: 'Distribuição de Projetos Alocados e Não Alocados',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Projetos',
        colorByPoint: true,
        data: generateChartData(projects), 
      },
    ],
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-content">
        <HighchartsReact highcharts={Highcharts} options={chartConfig} />
      </div>
    </div>
  );
};

export default ProjectAllocationChart;