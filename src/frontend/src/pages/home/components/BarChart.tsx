import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface BarChartProps {
  data: { organizationType: string; partnerName: string }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  
  const categories = Array.from(new Set(data.map((item) => item.organizationType)));
  const partnerCounts = categories.map((category) => {
    const partnersInCategory = data.filter((item) => item.organizationType === category);
    return partnersInCategory.length;
  });

  const chartConfig = {
    chart: {
      type: 'column',
      height: '400px',
    },
    title: {
      text: 'Contagem de Parceiros por Tipo de Organização',
    },
    xAxis: {
      categories: categories,
      title: {
        text: 'Tipo de Organização',
      },
    },
    yAxis: {
      title: {
        text: 'Contagem de Projetos',
      },
    },
    series: [
      {
        name: 'Contagem de Projetos',
        data: partnerCounts,
        colorByPoint: true,
        dataLabels: {
          enabled: true,
          format: '{point.y}',
        },
      },
    ],
  };

  return (
    <div className="card" style={{ background: '#fff', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '20px', width: 'auto', height: 'fit-content' }}>
      <div className="card-content">
        <HighchartsReact highcharts={Highcharts} options={chartConfig} />
      </div>
    </div>
  );
};

export default BarChart;
