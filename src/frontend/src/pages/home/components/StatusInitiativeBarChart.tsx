import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface StatusInitiativeBarChartProps {
  data: Record<string, number>;
}

const StatusInitiativeBarChart: React.FC<StatusInitiativeBarChartProps> = ({ data }) => {
  const categories = Object.keys(data);
  const counts = Object.values(data);

  const chartConfig = {
    chart: {
      type: 'bar',
      height: '400px',
    },
    title: {
      text: 'Contagem de Iniciativas por Status',
    },
    xAxis: {
      categories: categories,
      title: {
        text: 'Status',
      },
    },
    yAxis: {
      title: {
        text: 'Contagem de Iniciativas',
      },
    },
    series: [
      {
        name: 'Contagem de Iniciativas',
        data: counts,
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

export default StatusInitiativeBarChart;
