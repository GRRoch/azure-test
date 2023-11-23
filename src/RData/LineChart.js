import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Extracting Date and RVal from the JSON data
    const dates = data.map(entry => entry.Date);
    const rValues = data.map(entry => entry.RVal);

    // Chart configuration
    const chartConfig = {
      labels: dates,
      datasets: [
        {
          label: 'R Values',
          data: rValues,
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(75,192,192,1)',
          pointRadius: 1,
          fill: false,
        },
      ],
    };

    setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "30 Day R Value Data"
            }
        },
        scales: {
            y: {
                suggestedMin: 0.9,
                suggestedMax: 1.1,
            }
        },
        maintainAspectRatio: false,
        height: 600,
        width: 800,
    })

    setChartData(chartConfig);
  }, [data]);

  return (
    <div style={ {width: '800px', height: '600px'}}>
      {chartData && <Line data={chartData} options = {chartOptions}/>}
    </div>
  );
};

export default LineChart;