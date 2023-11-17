import React, { useEffect, useRef } from 'react';
import Highcharts, { Options } from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import './style.css';

// Importe o módulo de exportação
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

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

interface ScatterPlotChartProps {
  data: { analystRate: number; partnerRate: number; sector: string; partnerName: string }[];
}

const ScatterPlotChart: React.FC<ScatterPlotChartProps> = ({ data }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const sectors = Array.from(new Set(data.map((item) => item.sector)));

      const chartOptions: Options = {
        chart: {
          type: 'scatter',
        },
        title: {
          text: 'Gráfico de matching por avaliação',
        },
        xAxis: {
          type: 'linear', 
          title: {
            text: 'Avaliação do analista', 
          },
        },
        yAxis: {
          type: 'linear', 
          title: {
            text: 'Avaliação do parceiro', 
          },
        },
        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
              
            },
            tooltip: {
              pointFormat: 'Parceiro: {point.partnerName}<br><br>Analyst Rate: {point.x}<br>Partner Rate: {point.y}',
            },
          },
        },
        series: sectors.map((sector) => {
          const sectorData = data.filter((item) => item.sector === sector);
          return {
            type: 'scatter',
            name: sector,
            color: sectorColors[sector],
            data: sectorData.map(({ analystRate, partnerRate, partnerName }) => ({
              x: analystRate, 
              y: partnerRate, 
              partnerName,
              color: sectorColors[sector],
            } as Highcharts.PointOptionsObject)),            
            marker: {
              symbol: 'circle',
            },
          } as Highcharts.SeriesOptionsType; 
        }),
      };
  
      Highcharts.chart(chartContainerRef.current, chartOptions);
  
    }
  }, [data]);

  return <div id="scatterChartContainer" ref={chartContainerRef} style={cardStyle} />;
};

export default ScatterPlotChart;
